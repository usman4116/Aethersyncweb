'use client';

import { useState } from 'react';
import { Cpu, Check, Key, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const providers = [
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    models: ['claude-3-7-sonnet-20250219', 'claude-3-5-sonnet', 'claude-3-opus'],
    tag: 'Recommended for Coding Agent',
    endpoint: 'https://api.anthropic.com/v1/messages',
    desc: 'Deep reasoning, 200k context window, and industry-leading multi-file refactoring accuracy.',
  },
  {
    id: 'openai',
    name: 'OpenAI (GPT-4o & o3)',
    models: ['gpt-4o', 'gpt-4o-mini', 'o3-mini', 'o1-preview'],
    tag: 'Fast & Versatile',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    desc: 'Native streaming tool calling, low latency completions, and advanced coding problem solving.',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek (R1 & V3)',
    models: ['deepseek-reasoner', 'deepseek-chat'],
    tag: 'Open Weights & Cost-Effective',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    desc: 'State-of-the-art mathematical and algorithmic reasoning at unmatched cost efficiency.',
  },
  {
    id: 'ollama',
    name: 'Ollama / Local LLM',
    models: ['qwen2.5-coder:32b', 'deepseek-r1:14b', 'codellama'],
    tag: '100% Offline & Private',
    endpoint: 'http://localhost:11434/v1/chat/completions',
    desc: 'Run completely offline on your own GPU without internet connectivity or external API charges.',
  },
];

export function ProvidersSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="providers" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold mb-3">
          <Cpu size={12} />
          <span>Universal Model Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Bring Your Own <span className="neon-gradient-text">AI Provider</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          AetherSync is model-agnostic. Plug in your own API key or run local open-source models with zero vendor lock-in.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Provider List */}
        <div className="lg:col-span-1 space-y-3">
          {providers.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelected(idx)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selected === idx
                  ? 'border-orange-500/50 bg-[#14141e] shadow-lg shadow-orange-500/10'
                  : 'border-white/[0.06] bg-[#0c0c12]/60 hover:bg-[#111118]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">{p.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400">
                  {p.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.desc}</p>
            </button>
          ))}
        </div>

        {/* Selected Provider Showcase Detail */}
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.1] bg-[#0c0c12] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {providers[selected].name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{providers[selected].desc}</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck size={14} /> Full Agent Verified
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Target Endpoint
              </label>
              <div className="p-3 rounded-xl bg-[#07070a] border border-white/[0.06] font-mono text-xs text-orange-400">
                {providers[selected].endpoint}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Supported Models
              </label>
              <div className="flex flex-wrap gap-2">
                {providers[selected].models.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-[#14141c] border border-white/[0.08] text-xs font-mono text-slate-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Encrypted locally in OS Keyring</span>
              <a
                href="#docs"
                className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
              >
                Setup Guide <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
