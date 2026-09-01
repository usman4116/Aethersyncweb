'use client';

import { useState } from 'react';
import { Cpu, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

/* ── All providers ─────────────────────────────────────────── */
const providers = [
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    icon: '🟣',
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
    icon: '⚡',
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
    icon: '🔵',
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
    icon: '🖥️',
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
    icon: '💎',
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
    icon: '🌊',
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
    icon: '🔶',
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
    icon: '🚀',
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
    icon: '🤝',
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
    icon: '🔍',
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
    icon: '🌐',
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
    icon: '🔀',
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
    icon: '☁️',
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
    icon: '🏢',
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
    icon: '🤗',
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
    icon: '🔒',
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

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowSetup(false);
    
    // Smooth scroll to detail panel if on mobile
    if (window.innerWidth < 1024) {
      document.getElementById('provider-detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="providers" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-3">
          <Cpu size={12} />
          <span>Universal Model Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Bring Your Own <span className="text-primary">AI Provider</span>
        </h2>
        <p className="mt-3 text-muted text-sm sm:text-base">
          AetherSync is model-agnostic. Plug in your own API key or run local open-source models with zero vendor lock-in. All providers feature one-click setup.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Detail Panel (Always shows selected provider) */}
        <div id="provider-detail-panel" className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xl order-first lg:order-last">
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span>{providers[selected].icon}</span>{providers[selected].name}
              </h3>
              <p className="text-xs text-muted mt-0.5">{providers[selected].desc}</p>
            </div>
            <div className="hidden sm:flex px-3 py-1 rounded-full bg-green-500/15 text-green-500 border border-green-500/30 text-xs font-semibold items-center gap-1.5 shrink-0">
              <ShieldCheck size={14} /> Full Agent Verified
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-1.5">
                Target Endpoint
              </label>
              <div className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-primary truncate">
                {providers[selected].endpoint}
              </div>
            </div>
            <div>
              <label className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-1.5">
                Supported Models
              </label>
              <div className="flex flex-wrap gap-2">
                {providers[selected].models.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary"/> Encrypted locally in OS Keyring</span>
                <button
                  onClick={() => setShowSetup(!showSetup)}
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors"
                >
                  {showSetup ? 'Hide Setup Details' : 'Click to Setup'} 
                  <ChevronDown size={14} className={`transform transition-transform ${showSetup ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {showSetup && (
                <div className="mt-4 p-4 rounded-xl bg-background border border-border animate-in fade-in slide-in-from-top-2">
                  <h4 className="text-[11px] font-mono text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal size={12} /> End-to-End Setup Instructions
                  </h4>
                  <ol className="space-y-3 text-sm text-foreground">
                    {providers[selected].setup.map((step, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary font-mono text-[10px] shrink-0 mt-0.5">
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

        {/* Top 4 Provider List */}
        <div className="lg:col-span-1 space-y-3 lg:order-first">
          {featured.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selected === idx
                  ? 'border-primary/50 bg-surface-elevated shadow-lg shadow-primary/10'
                  : 'border-border bg-surface hover:bg-surface-elevated'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span>{p.icon}</span>{p.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                  {p.tag}
                </span>
              </div>
              <p className="text-xs text-muted mt-1 line-clamp-2">{p.desc}</p>
            </button>
          ))}
          
          {/* Explore More Button within the column layout */}
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-surface border-border hover:bg-surface-elevated"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Hide Extra Providers' : `Explore ${allOtherProviders.length}+ More`}
          </Button>
        </div>
      </div>

      {/* Expanded Providers Grid */}
      {expanded && (
        <div className="mt-8 pt-8 border-t border-border animate-in fade-in">
          <div className="text-center mb-6">
            <h4 className="text-sm font-bold text-foreground">More Supported Providers</h4>
            <p className="text-xs text-muted mt-1">Click on any provider to view setup instructions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {allOtherProviders.map((p, idx) => {
              const globalIdx = idx + 4; // offset by featured length
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(globalIdx)}
                  className={`aether-card rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 ${
                    selected === globalIdx
                      ? 'border-primary/50 bg-surface-elevated shadow-lg shadow-primary/10 scale-105'
                      : 'hover:border-primary/30'
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-xs font-bold text-foreground leading-tight">{p.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                    {p.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
