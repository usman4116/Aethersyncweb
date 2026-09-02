'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ShieldCheck, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

/* ── All providers ─────────────────────────────────────────── */
const providers = [
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    domain: 'anthropic.com',
    models: ['claude-3-7-sonnet-20250219', 'claude-3-5-sonnet', 'claude-3-opus'],
    tag: 'Best for Coding',
    endpoint: 'https://api.anthropic.com/v1/messages',
    desc: 'Deep reasoning, 200k context window, and industry-leading multi-file refactoring accuracy.',
    setup: [
      'Create an Anthropic API Key at console.anthropic.com',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Anthropic"',
      'Paste the API key into the secure credential store',
      'Select "claude-3-5-sonnet" as the default agent model'
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI (GPT-4o & o3)',
    domain: 'openai.com',
    models: ['gpt-4o', 'gpt-4o-mini', 'o3-mini', 'o1-preview'],
    tag: 'Fast & Versatile',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    desc: 'Native streaming tool calling, low latency completions, and advanced coding problem solving.',
    setup: [
      'Generate an OpenAI API Key at platform.openai.com',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "OpenAI"',
      'Paste the API key into the secure credential store',
      'Select "gpt-4o" as the default agent model'
    ]
  },
  {
    id: 'deepseek',
    name: 'DeepSeek (R1 & V3)',
    domain: 'deepseek.com',
    models: ['deepseek-reasoner', 'deepseek-chat'],
    tag: 'Cost-Effective',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    desc: 'State-of-the-art mathematical and algorithmic reasoning at unmatched cost efficiency.',
    setup: [
      'Create an API Key at platform.deepseek.com',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "DeepSeek"',
      'Paste the API key into the secure credential store',
      'Select "deepseek-coder" as the default agent model'
    ]
  },
  {
    id: 'ollama',
    name: 'Ollama / Local LLM',
    domain: 'ollama.com',
    models: ['qwen2.5-coder:32b', 'deepseek-r1:14b', 'codellama'],
    tag: '100% Offline',
    endpoint: 'http://localhost:11434/v1/chat/completions',
    desc: 'Run completely offline on your own GPU without internet connectivity or external API charges.',
    setup: [
      'Install Ollama from ollama.com',
      'Run `ollama run qwen2.5-coder:32b` in your terminal',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Local/Ollama"',
      'Set endpoint to http://localhost:11434 and select the model'
    ]
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    domain: 'gemini.google.com',
    models: ['gemini-2.5-pro', 'gemini-1.5-pro'],
    tag: 'Multimodal',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta',
    desc: 'Massive context windows and strong reasoning natively from Google.',
    setup: [
      'Get an API key from Google AI Studio (aistudio.google.com)',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Gemini"',
      'Paste the API key into the secure credential store',
      'Select "gemini-2.5-pro" as the default agent model'
    ]
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    domain: 'mistral.ai',
    models: ['mistral-large-latest', 'codestral-latest'],
    tag: 'Open Source',
    endpoint: 'https://api.mistral.ai/v1/chat/completions',
    desc: 'Powerful European open-weights models optimized for speed and coding tasks.',
    setup: [
      'Create an API key at console.mistral.ai',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Mistral"',
      'Paste the API key into the secure credential store',
      'Select "codestral-latest" as the default agent model'
    ]
  },
  {
    id: 'cohere',
    name: 'Cohere Command',
    domain: 'cohere.com',
    models: ['command-r-plus', 'command-r'],
    tag: 'Enterprise',
    endpoint: 'https://api.cohere.ai/v1/chat',
    desc: 'Enterprise-grade RAG and tool-use capabilities with Command R series.',
    setup: [
      'Sign up at dashboard.cohere.com',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Cohere"',
      'Paste the API key into the secure credential store',
      'Select "command-r-plus" as the default agent model'
    ]
  },
  {
    id: 'groq',
    name: 'Groq (LPU)',
    domain: 'groq.com',
    models: ['llama-3.3-70b-versatile', 'mixtral-8x7b-32768'],
    tag: 'Ultra Fast',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions',
    desc: 'Lightning fast inference speeds utilizing custom LPU hardware.',
    setup: [
      'Create an API Key at console.groq.com',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Groq"',
      'Paste the API key into the secure credential store',
      'Select a Llama 3 model as the default agent model'
    ]
  },
  {
    id: 'together',
    name: 'Together AI',
    domain: 'together.ai',
    models: ['meta-llama/Llama-3-70b-chat-hf', 'Qwen/Qwen2.5-Coder-32B-Instruct'],
    tag: 'Open Models',
    endpoint: 'https://api.together.xyz/v1/chat/completions',
    desc: 'Fast, scalable infrastructure for serving the latest open-source models.',
    setup: [
      'Sign up at api.together.xyz',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Together AI"',
      'Paste the API key into the secure credential store',
      'Select your preferred open-source model'
    ]
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    domain: 'perplexity.ai',
    models: ['sonar-reasoning-pro', 'sonar-pro'],
    tag: 'Search+AI',
    endpoint: 'https://api.perplexity.ai/chat/completions',
    desc: 'Search-grounded language models with real-time web knowledge.',
    setup: [
      'Get an API key from perplexity.ai/settings/api',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Perplexity"',
      'Paste the API key into the secure credential store',
      'Select a Sonar model as the default agent model'
    ]
  },
  {
    id: 'xai',
    name: 'xAI Grok',
    domain: 'x.ai',
    models: ['grok-2', 'grok-2-vision'],
    tag: 'Real-time',
    endpoint: 'https://api.x.ai/v1/chat/completions',
    desc: 'Advanced reasoning models from xAI with unique real-time knowledge features.',
    setup: [
      'Generate an API key from console.x.ai',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "xAI"',
      'Paste the API key into the secure credential store',
      'Select "grok-2" as the default agent model'
    ]
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    domain: 'openrouter.ai',
    models: ['anthropic/claude-3.5-sonnet', 'google/gemini-2.5-pro'],
    tag: 'Unified API',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    desc: 'A unified interface to access hundreds of models through a single API key.',
    setup: [
      'Create an API Key at openrouter.ai/keys',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "OpenRouter"',
      'Paste the API key into the secure credential store',
      'Select any model from the OpenRouter catalog'
    ]
  },
  {
    id: 'bedrock',
    name: 'Amazon Bedrock',
    domain: 'aws.amazon.com',
    models: ['anthropic.claude-3-5-sonnet', 'meta.llama3'],
    tag: 'AWS Native',
    endpoint: 'AWS Region Endpoint',
    desc: 'Serverless access to foundational models within your secure AWS VPC.',
    setup: [
      'Configure IAM credentials with Bedrock access in AWS Console',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Amazon Bedrock"',
      'Enter your AWS Access Key, Secret Key, and Region',
      'Select a Bedrock-supported model ARN'
    ]
  },
  {
    id: 'azure',
    name: 'Azure OpenAI',
    domain: 'azure.microsoft.com',
    models: ['gpt-4o', 'o1-preview'],
    tag: 'Enterprise',
    endpoint: 'Your Custom Azure Endpoint URL',
    desc: 'Enterprise-grade OpenAI models hosted securely in your Azure tenant.',
    setup: [
      'Deploy a model in Azure OpenAI Studio',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Azure OpenAI"',
      'Enter your Azure Endpoint URL and API Key',
      'Enter your specific deployment name for the model'
    ]
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    domain: 'huggingface.co',
    models: ['meta-llama/Llama-3-70B-Instruct', 'Qwen/Qwen2.5-Coder-32B'],
    tag: 'OSS Hub',
    endpoint: 'https://api-inference.huggingface.co/models/',
    desc: 'Access thousands of open-source models via serverless inference API.',
    setup: [
      'Get an Access Token from huggingface.co/settings/tokens',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Hugging Face"',
      'Paste the Token into the secure credential store',
      'Specify the repository ID of the model you wish to use'
    ]
  },
  {
    id: 'jan',
    name: 'Jan AI',
    domain: 'jan.ai',
    models: ['local-model-id'],
    tag: 'Local Privacy',
    endpoint: 'http://localhost:1337/v1/chat/completions',
    desc: 'Open-source ChatGPT alternative that runs 100% offline on your computer.',
    setup: [
      'Install Jan AI and download a model locally',
      'Start the local API server within Jan (default port 1337)',
      'Open AetherSync IDE Settings (Ctrl+,)',
      'Navigate to "AI Providers" -> "Jan AI"',
      'Connect using http://localhost:1337'
    ]
  }
];

export function ProvidersSection() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [showSetup, setShowSetup] = useState(false);

  const featured = providers.slice(0, 4);
  const allOtherProviders = providers.slice(4);
  const active = providers[selected];

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowSetup(false);

    // On narrow viewports the detail panel sits below the list — bring it up.
    if (window.innerWidth < 1024) {
      document
        .getElementById('provider-detail-panel')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Section id="providers" className="border-b border-border">
      <SectionHeader
        eyebrow="Universal model ecosystem"
        title={
          <>
            Bring your own <span className="text-ember-gradient">AI provider.</span>
          </>
        }
        description={`AetherSync is model-agnostic. Plug in your own API key or run local open-source models with zero vendor lock-in — ${providers.length} providers ship configured out of the box.`}
      />

      <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        
        {/* Left Column: Grid of Logos */}
        <div className="rounded-xl border border-border bg-surface/45 p-6 sm:p-8 lg:col-span-5 flex flex-col items-center">
          <div className="w-full mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              {'{'} AVAILABLE PROVIDERS {'}'}
            </span>
            <h3 className="text-heading-sm font-semibold text-foreground mt-2">
              Select a provider to configure
            </h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4 w-full">
            {(expanded ? providers : providers.slice(0, 8)).map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-pressed={selected === idx}
                className={cn(
                  'aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 ease-cine border group relative',
                  selected === idx
                    ? 'border-primary bg-surface-elevated shadow-[0_0_15px_rgba(255,108,26,0.15)] ring-1 ring-primary'
                    : 'border-white/5 bg-background hover:border-white/20 hover:bg-surface-hover/50'
                )}
                title={p.name}
              >
                <img 
                  src={`https://icon.horse/icon/${p.domain}`} 
                  alt={`${p.name} logo`} 
                  className={cn(
                    "w-8 h-8 object-contain transition-transform duration-300",
                    selected === idx ? "scale-110" : "group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  )} 
                  aria-hidden 
                />
              </button>
            ))}
          </div>
          
          <div className="w-full mt-6 flex items-center gap-4 text-xs font-semibold text-muted">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 hover:text-primary transition-colors duration-300 ease-cine"
            >
              {expanded ? 'Hide extra providers' : `Explore ${providers.length - 8} more`} 
              <ChevronRight size={14} className={cn("transition-transform duration-300 ease-cine", expanded ? "rotate-90" : "")} />
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors duration-300 ease-cine">
              View documentation <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Column: Detail Panel */}
        <div
          id="provider-detail-panel"
          className="rounded-xl border border-border bg-surface/45 p-6 sm:p-8 lg:col-span-7 h-full flex flex-col justify-center"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
            <div>
              <h3 className="flex items-center gap-3 font-display text-heading font-semibold text-foreground">
                <div className="w-10 h-10 rounded-xl bg-background border border-white/5 flex items-center justify-center shrink-0">
                  <img src={`https://icon.horse/icon/${active.domain}`} alt={`${active.name} logo`} className="w-6 h-6 object-contain" aria-hidden />
                </div>
                {active.name}
              </h3>
              <p className="mt-2.5 max-w-prose text-label text-text-secondary">{active.desc}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-success/30 bg-success/12 px-2 py-1 text-micro font-semibold text-success">
              <ShieldCheck size={13} aria-hidden /> Full agent verified
            </span>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="kicker mb-3">Target endpoint</p>
              <div className="truncate rounded-lg border border-border bg-background px-4 py-3 font-mono text-[11px] text-primary">
                {active.endpoint}
              </div>
            </div>

            <div>
              <p className="kicker mb-3">Supported models</p>
              <div className="flex flex-wrap gap-2.5">
                {active.models.map((m) => (
                  <span
                    key={m}
                    className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-[11px] text-text-secondary"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-label text-muted">
                  <ShieldCheck size={13} className="text-primary" aria-hidden />
                  Encrypted locally in the OS keyring
                </span>
                <button
                  type="button"
                  onClick={() => setShowSetup(!showSetup)}
                  aria-expanded={showSetup}
                  className="inline-flex items-center gap-1 text-label font-semibold text-primary transition-colors duration-300 ease-cine hover:text-primary-hover"
                >
                  {showSetup ? 'Hide setup details' : 'Show setup steps'}
                  <ChevronDown
                    size={13}
                    className={cn(
                      'transition-transform duration-300 ease-cine',
                      showSetup && 'rotate-180'
                    )}
                  />
                </button>
              </div>

              {showSetup && (
                <div className="mt-5 rounded-lg border border-border bg-background p-6">
                  <p className="kicker mb-4 flex items-center gap-2">
                    <Terminal size={12} aria-hidden /> End-to-end setup
                  </p>
                  <ol className="space-y-4">
                    {active.setup.map((step, idx) => (
                      <li key={step} className="flex items-start gap-3 text-[0.875rem] text-foreground">
                        <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/12 font-mono text-[10px] font-bold text-primary">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
