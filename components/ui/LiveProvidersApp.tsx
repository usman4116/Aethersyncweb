'use client';

import React, { useState } from 'react';
import { 
  Plus, Settings, Moon, Terminal, Minus, Square, X, Key, ShieldCheck, 
  Sliders, Check, ChevronDown, Folder, Layout, MessageSquare, Code2, 
  Cpu, LogOut 
} from 'lucide-react';

interface LiveProvidersAppProps {
  className?: string;
}

export function LiveProvidersApp({ className = '' }: LiveProvidersAppProps) {
  const [selectedPreset, setSelectedPreset] = useState('OpenAI');
  const [providerName, setProviderName] = useState('My Provider');
  const [baseUrl, setBaseUrl] = useState('https://api.openai.com/v1');
  const [model, setModel] = useState('gpt-4o');

  const presets = [
    'OpenAI', 'Anthropic', 'Nano Router', 'OpenRouter', 'NVIDIA NIM',
    'Groq', 'Together', 'Fireworks', 'Mistral', 'Ollama (local)', 'LM Studio (local)'
  ];

  const handlePreset = (preset: string) => {
    setSelectedPreset(preset);
    if (preset === 'Anthropic') {
      setProviderName('Anthropic');
      setBaseUrl('https://api.anthropic.com/v1');
      setModel('claude-3-7-sonnet-latest');
    } else if (preset === 'Ollama (local)') {
      setProviderName('Ollama Local');
      setBaseUrl('http://localhost:11434/v1');
      setModel('llama3.3:latest');
    } else if (preset === 'OpenAI') {
      setProviderName('My Provider');
      setBaseUrl('https://api.openai.com/v1');
      setModel('gpt-4o');
    } else {
      setProviderName(preset);
      setModel('default');
    }
  };

  return (
    <div className={`w-[1250px] h-[750px] bg-[var(--ide-bg)] text-[var(--ide-text)] font-sans flex flex-col select-none overflow-hidden rounded-xl border border-[var(--ide-border)] shadow-2xl transition-colors duration-200 ${className}`}>
      
      {/* 1. Top Window Frame Bar */}
      <div className="h-10 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 text-xs shrink-0">
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-[var(--ide-border)]">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-black font-bold text-[11px]">
              A
            </div>
            <span className="font-semibold text-[var(--ide-text-bright)] tracking-tight text-[12px]">Aether Sync</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="px-2.5 py-1 rounded text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer flex items-center gap-1.5">
              <MessageSquare size={12} /> Chat
            </span>
            <span className="px-2.5 py-1 rounded text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer flex items-center gap-1.5">
              <Layout size={12} /> IDE
            </span>
            <span className="px-2.5 py-1 rounded text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer flex items-center gap-1.5">
              <Code2 size={12} /> Agent
            </span>
            <span className="text-[var(--ide-text-dim)] opacity-40 mx-1">/</span>
            <span className="text-[var(--ide-text-dim)] flex items-center gap-1">
              <Folder size={12} className="text-primary" /> hostel-management-system-main
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[var(--ide-text-dim)]">
          <div className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer">
            <Cpu size={12} className="text-primary" />
            <span>Model: <strong className="text-[var(--ide-text-bright)] font-semibold">{model}</strong></span>
          </div>
          <div className="flex items-center gap-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
            <Terminal size={12} /> Terminal
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-[var(--ide-border)]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. Main Content Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Main Left Sidebar */}
        <div className="w-56 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col justify-between shrink-0">
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1 py-1">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-black font-bold text-xs">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--ide-text-bright)] leading-none">aethersync</span>
                <span className="text-[9px] text-primary font-mono tracking-widest uppercase">Desktop</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-[#ff8642] text-black font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs shadow-md transition-all">
              <Plus size={14} /> New Chat
            </button>

            <div className="flex flex-col gap-1 mt-1 text-xs">
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <MessageSquare size={14} /> Simple Chat
              </div>
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-[var(--ide-border)] flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)] px-2 py-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
              <Folder size={13} className="text-primary" /> hostel-management-syst...
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary font-semibold border border-primary/20 px-2 py-1.5 rounded-lg cursor-pointer">
              <Settings size={13} /> Settings
            </div>
            <div className="flex items-center justify-between text-[var(--ide-text-dim)] px-2 py-1">
              <span className="flex items-center gap-2">
                <Moon size={13} /> Theme
              </span>
              <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded text-[var(--ide-text-bright)] font-mono">
                Auto
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[var(--ide-border)] px-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold text-[10px] flex items-center justify-center">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[var(--ide-text-bright)]">Roxen Usman</span>
                  <span className="text-[9px] text-[var(--ide-text-dim)] truncate max-w-[100px]">roxenusman@gmail.com</span>
                </div>
              </div>
              <LogOut size={12} className="text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Secondary Settings Sidebar */}
        <div className="w-48 bg-[var(--ide-header)] border-r border-[var(--ide-border)] p-3 shrink-0 flex flex-col gap-1">
          <div className="flex items-center gap-2 px-2 py-2 mb-2">
            <div className="w-4 h-4 rounded bg-primary flex items-center justify-center text-black text-[9px] font-bold">A</div>
            <span className="text-xs font-bold text-[var(--ide-text-bright)]">aethersync</span>
          </div>

          <span className="text-[10px] font-bold tracking-wider text-[var(--ide-text-dim)] uppercase px-2 mb-1">
            Settings
          </span>

          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-xs border border-primary/20 cursor-pointer">
            <Key size={13} /> Providers
          </div>
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 text-xs cursor-pointer">
            <ShieldCheck size={13} /> Permissions
          </div>
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 text-xs cursor-pointer">
            <Sliders size={13} /> General
          </div>
        </div>

        {/* Center Main Stage (Provider Configuration Panel) */}
        <div className="flex-1 bg-[var(--ide-bg)] p-6 overflow-y-auto no-scrollbar flex flex-col gap-5">
          
          <div className="flex items-center justify-between pb-4 border-b border-[var(--ide-border)]">
            <div>
              <h2 className="text-lg font-bold text-[var(--ide-text-bright)] tracking-tight">
                Provider Configuration
              </h2>
              <p className="text-xs text-[var(--ide-text-dim)] mt-0.5">
                AetherSync talks directly to any OpenAI compatible or Anthropic compatible API. Keys are stored in the OS secure credential store.
              </p>
            </div>
            <button className="bg-primary hover:bg-[#ff8642] text-black font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-md shrink-0">
              <Plus size={14} /> Add Provider
            </button>
          </div>

          {/* New Provider Box */}
          <div className="rounded-2xl bg-[var(--ide-sidebar)] border border-primary/40 p-6 flex flex-col gap-4 shadow-xl">
            
            <h3 className="text-xs font-bold text-[var(--ide-text-bright)] uppercase tracking-wider">
              New provider
            </h3>

            {/* Quick Presets Pills */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                Quick preset
              </label>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((preset) => {
                  const isSelected = selectedPreset === preset;
                  return (
                    <button
                      key={preset}
                      onClick={() => handlePreset(preset)}
                      className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                        isSelected 
                          ? 'bg-primary/15 text-primary border border-primary/50 shadow-sm font-semibold' 
                          : 'bg-[var(--ide-bg)] text-[var(--ide-text-dim)] border border-[var(--ide-border)] hover:text-[var(--ide-text-bright)]'
                      }`}
                    >
                      {preset}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Provider Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                Provider Name
              </label>
              <input 
                type="text" 
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                className="bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-lg px-3 py-2 text-xs text-[var(--ide-text-bright)] outline-none focus:border-primary/50"
              />
            </div>

            {/* API Format */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                API Format
              </label>
              <div className="relative">
                <select className="w-full bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-lg px-3 py-2 text-xs text-[var(--ide-text-bright)] outline-none appearance-none cursor-pointer">
                  <option>OpenAI Compatible</option>
                  <option>Anthropic Compatible</option>
                  <option>Ollama Native</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-2.5 text-[var(--ide-text-dim)] pointer-events-none" />
              </div>
              <p className="text-[10px] text-[var(--ide-text-dim)]">
                Most providers (OpenRouter, NVIDIA NIM, Groq, Together, etc.) use "OpenAI Compatible" — even for Anthropic models.
              </p>
            </div>

            {/* Base URL */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                Base URL
              </label>
              <input 
                type="text" 
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-lg px-3 py-2 text-xs text-[var(--ide-text-bright)] outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* API Key */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                API Key
              </label>
              <input 
                type="password" 
                placeholder="sk-..."
                defaultValue="sk-aethersync-local-keys-hidden"
                className="bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-lg px-3 py-2 text-xs text-[var(--ide-text-bright)] outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* Model */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[var(--ide-text-dim)]">
                Model
              </label>
              <input 
                type="text" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-lg px-3 py-2 text-xs text-[var(--ide-text-bright)] outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* Form Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--ide-border)]">
              <button className="flex items-center gap-1.5 text-xs font-semibold text-[var(--ide-text-bright)] hover:text-primary transition-colors">
                <Check size={14} className="text-primary" /> Test Connection
              </button>
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 rounded-lg text-xs font-medium text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]">
                  Cancel
                </button>
                <button className="bg-primary hover:bg-[#ff8642] text-black font-bold px-5 py-1.5 rounded-lg text-xs shadow-md">
                  Save
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
