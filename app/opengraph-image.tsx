import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AetherSync IDE — the autonomous AI code editor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated at build time so social cards never 404 on a missing asset. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#07080f',
          backgroundImage:
            'radial-gradient(900px 520px at 12% -10%, rgba(255,108,26,0.30), rgba(255,108,26,0) 70%), radial-gradient(760px 520px at 96% 108%, rgba(96,165,250,0.16), rgba(96,165,250,0) 70%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* The theaethersync.com mark, vectorised from the official raster */}
          <svg width="58" height="58" viewBox="0 0 188 188">
            <rect x="0.5" y="0" width="187" height="188" rx="12.5" fill="#fd5502" />
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M81 40 H105 L145 146 H123 L115 123.5 H71 L63 146 H41 Z M93 63.5 L108.4 104.5 H77.6 Z"
            />
          </svg>
          <div
            style={{
              display: 'flex',
              color: '#f4f5fa',
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            <span>Aether</span>
            <span style={{ color: '#ff6c1a' }}>Sync</span>
            <span>&nbsp;AI</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#ff6c1a',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            AetherSync IDE
          </div>
          <div
            style={{
              color: '#f4f5fa',
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            The autonomous AI IDE built for precision, privacy and speed.
          </div>
          <div style={{ color: '#a0a6b4', fontSize: 28 }}>
            Local-first · Zero telemetry · Claude · GPT-4o · DeepSeek · Ollama
          </div>
        </div>

        <div style={{ color: '#707685', fontSize: 24 }}>www.ai.aethersync.com</div>
      </div>
    ),
    size
  );
}
