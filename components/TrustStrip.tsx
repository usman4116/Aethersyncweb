import { Reveal } from '@/components/ui/Reveal';

const providers = [
  'Anthropic Claude',
  'OpenAI',
  'DeepSeek',
  'Google Gemini',
  'Mistral AI',
  'Ollama',
  'Groq',
  'Cohere',
  'Together AI',
  'Perplexity',
  'xAI Grok',
  'Amazon Bedrock',
  'Azure OpenAI',
  'Hugging Face',
];

/**
 * Provider wall. Two duplicated tracks scroll as one marquee; the list is
 * duplicated with `aria-hidden` so screen readers read each name once.
 */
export function TrustStrip() {
  return (
    <section className="border-b border-border py-12" aria-labelledby="trust-strip-title">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p id="trust-strip-title" className="text-center text-label text-muted">
            Works with the frontier models you already pay for — and the local ones you don&rsquo;t.
          </p>
        </Reveal>
      </div>

      <div className="mask-x-fade mt-8 flex overflow-hidden">
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
          >
            {providers.map((name) => (
              <li
                key={name}
                className="whitespace-nowrap font-display text-[0.9375rem] font-semibold text-muted transition-colors duration-300 ease-cine hover:text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
