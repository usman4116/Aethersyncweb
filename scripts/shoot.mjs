/**
 * Minimal CDP screenshot driver — no dependencies, uses Node's built-in WebSocket.
 *
 * Usage: node scripts/shoot.mjs <url> <outDir> [name=selector ...]
 *
 * Captures one full-viewport screenshot per scroll target and reports any
 * console errors / uncaught exceptions the page produced along the way, so a
 * visual pass doubles as a smoke test.
 *
 * Requires Chrome already listening on CDP port 9222:
 *   google-chrome --headless=new --remote-debugging-port=9222 --window-size=1440,900
 */
const [, , url, outDir, ...targets] = process.argv;

const PORT = Number(process.env.CDP_PORT || 9222);

async function getTargetWs() {
  for (let i = 0; i < 80; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* devtools not up yet */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('devtools endpoint never came up');
}

const ws = new WebSocket(await getTargetWs());
await new Promise((res, rej) => {
  ws.addEventListener('open', res, { once: true });
  ws.addEventListener('error', rej, { once: true });
});

let nextId = 1;
const pending = new Map();
const problems = [];

ws.addEventListener('message', (ev) => {
  const msg = JSON.parse(ev.data);

  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    return;
  }

  if (msg.method === 'Runtime.exceptionThrown') {
    const d = msg.params.exceptionDetails;
    problems.push(`UNCAUGHT: ${d.exception?.description || d.text} @ ${d.url || '?'}:${d.lineNumber}`);
  }
  if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
    problems.push(
      `CONSOLE.${msg.params.type.toUpperCase()}: ${msg.params.args
        .map((a) => a.description ?? a.value ?? a.type)
        .join(' ')}`
    );
  }
  if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
    problems.push(`LOG: ${msg.params.entry.text} ${msg.params.entry.url ?? ''}`);
  }
});

function send(method, params = {}) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await send('Runtime.enable');
await send('Log.enable');
await send('Page.enable');
await send('Network.enable');
await send('Network.setCacheDisabled', { cacheDisabled: true });

await send('Page.navigate', { url });
await sleep(5000);

const { writeFileSync } = await import('node:fs');

async function shoot(name) {
  const { data } = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(`${outDir}/${name}.png`, Buffer.from(data, 'base64'));
}

await shoot('00-top');

for (const t of targets) {
  const [name, selector] = t.split('=');

  const { result } = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      if (!el) return 'MISSING';
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 8);
      return Math.round(window.scrollY) + ' of ' + document.body.scrollHeight;
    })()`,
    returnByValue: true,
  });

  console.log(`  ${name.padEnd(16)} ${selector.padEnd(26)} y=${result.value}`);
  await sleep(1200);
  await shoot(name);
}

console.log('\n--- page problems ---');
console.log(problems.length ? [...new Set(problems)].join('\n') : '(none)');

ws.close();
