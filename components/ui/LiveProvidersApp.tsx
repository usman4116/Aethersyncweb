'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Settings, 
  Moon, 
  Terminal, 
  Minus, 
  Square, 
  X, 
  Key, 
  ShieldCheck, 
  Sliders, 
  Check, 
  ChevronDown,
  Folder,
  Layout,
  MessageSquare,
  Code2,
  Cpu,
  LogOut
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
    'OpenAI',
    'Anthropic',
    'Nano Router',
    'OpenRouter',
    'NVIDIA NIM',
    'Groq',
    'Together',
    'Fireworks',
    'Mistral',
    'Ollama (local)',
    'LM Studio (local)'
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
    <div className={`w-[1250px] h-[750px] bg-[#0c0c0c] light:bg-[#ffffff] text-[#cccccc] light:text-[#333333] font-sans flex flex-col select-none overflow-hidden rounded-xl border border-white/10 light:border-black/10 shadow-2xl ${className}`}>
      
      {/* 1. Top Window Frame Bar */}
      <div className="h-10 bg-[#141414] light:bg-[#f3f4f6] border-b border-white/5 light:border-black/10 flex items-center justify-between px-3 text-xs shrink-0">
        
        {/* Left window tabs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-white/10 light:border-black/10">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white font-bold text-[11px]">
              A
            </div>
            <span className="font-semibold text-white light:text-black tracking-tight text-[12px]">Aether Sync</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="px-2.5 py-1 rounded text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black cursor-pointer flex items-center gap-1.5">
              <MessageSquare size={12} /> Chat
            </span>
            <span className="px-2.5 py-1 rounded text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black cursor-pointer flex items-center gap-1.5">
              <Layout size={12} /> IDE
            </span>
            <span className="px-2.5 py-1 rounded text-gray-400 light:text-gray-600 hover:text-white light:hover:text-black cursor-pointer flex items-center gap-1.5">
              <Code2 size={12} /> Agent
            </span>
            <span className="text-gray-500 light:text-gray-400 mx-1">/</span>
            <span className="text-gray-400 light:text-gray-600 flex items-center gap-1">
              <Folder size={12} className="text-primary" /> hostel-management-system-main
            </span>
          </div>
        </div>

        {/* Right window actions */}
        <div className="flex items-center gap-4 text-[11px] text-gray-400 light:text-gray-600">
          <div className="flex items-center gap-1.5 hover:text-white light:hover:text-black cursor-pointer">
            <Cpu size={12} className="text-primary" />
            <span>Model: <strong className="text-gray-300 light:text-gray-800 font-semibold">{model}</strong></span>
          </div>
          <div className="flex items-center gap-1 hover:text-white light:hover:text-black cursor-pointer">
            <Terminal size={12} /> Terminal
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-white/10 light:border-black/10">
            <Minus size={13} className="hover:text-white cursor-pointer" />
            <Square size={11} className="hover:text-white cursor-pointer" />
            <X size={13} className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. Main Content Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Main Left Sidebar */}
        <div className="w-56 bg-[#111111] light:bg-[#f9fafb] border-r border-white/5 light:border-black/10 flex flex-col justify-between shrink-0">
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1 py-1">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white light:text-black leading-none">aethersync</span>
                <span className="text-[9px] text-primary font-mono tracking-widest uppercase">Desktop</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-[#ff8642] text-black font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs shadow-md transition-all">
              <Plus size={14} /> New Chat
            </button>

            <div className="flex flex-col gap-1 mt-1 text-xs">
              <div className="px-3 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <MessageSquare size={14} /> Simple Chat
              </div>
              <div className="px-3 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-white/5 light:border-black/10 flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600 px-2 py-1 hover:text-white light:hover:text-black cursor-pointer">
              <Folder size={13} className="text-primary" /> hostel-management-syst...
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary font-semibold border border-primary/20 px-2 py-1.5 rounded-lg cursor-pointer">
              <Settings size={13} /> Settings
            </div>
            <div className="flex items-center justify-between text-gray-400 light:text-gray-600 px-2 py-1">
              <span className="flex items-center gap-2">
                <Moon size={13} /> Dark Mode
              </span>
              <span className="text-[10px] bg-[#222] light:bg-[#ddd] px-1.5 py-0.5 rounded text-gray-300 light:text-gray-800 font-mono">
                Auto
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/5 light:border-black/10 px-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold text-[10px] flex items-center justify-center">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-gray-200 light:text-gray-800">Roxen Usman</span>
                  <span className="text-[9px] text-gray-500 truncate max-w-[100px]">roxenusman@gmail.com</span>
                </div>
              </div>
              <LogOut size={12} className="text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Secondary Settings Sidebar */}
        <div className="w-48 bg-[#0e0e0e] light:bg-[#f3f4f6] border-r border-white/5 light:border-black/10 p-3 shrink-0 flex flex-col gap-1">
          <div className="flex items-center gap-2 px-2 py-2 mb-2">
            <div className="w-4 h-4 rounded bg-primary flex items-center justify-center text-white text-[9px] font-bold">A</div>
            <span className="text-xs font-bold text-white light:text-black">aethersync</span>
          </div>

          <span className="text-[10px] font-bold tracking-wider text-gray-500 light:text-gray-400 uppercase px-2 mb-1">
            Settings
          </span>

          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#1a1a1a] light:bg-[#e5e7eb] text-primary font-semibold text-xs border border-primary/20 cursor-pointer">
            <Key size={13} /> Providers
          </div>
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 text-xs cursor-pointer">
            <ShieldCheck size={13} /> Permissions
          </div>
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 text-xs cursor-pointer">
            <Sliders size={13} /> General
          </div>
        </div>

        {/* Center Main Stage (Provider Configuration Panel) */}
        <div className="flex-1 bg-[#0a0a0a] light:bg-[#ffffff] p-6 overflow-y-auto no-scrollbar flex flex-col gap-5">
          
          {/* Section Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 light:border-black/10">
            <div>
              <h2 className="text-lg font-bold text-white light:text-black tracking-tight">
                Provider Configuration
              </h2>
              <p className="text-xs text-gray-400 light:text-gray-600 mt-0.5">
                AetherSync talks directly to any OpenAI compatible or Anthropic compatible API. Keys are stored in the OS secure credential store.
              </p>
            </div>
            <button className="bg-primary hover:bg-[#ff8642] text-black font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-md shrink-0">
              <Plus size={14} /> Add Provider
            </button>
          </div>

          {/* New Provider Box */}
          <div className="rounded-2xl bg-[#121212] light:bg-[#f9fafb] border border-primary/40 light:border-primary/50 p-6 flex flex-col gap-4 shadow-xl">
            
            <h3 className="text-xs font-bold text-white light:text-black uppercase tracking-wider">
              New provider
            </h3>

            {/* Quick Presets Pills */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
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
                          ? 'bg-[#222] light:bg-[#e5e7eb] text-primary border border-primary/50 shadow-sm font-semibold' 
                          : 'bg-[#181818] light:bg-[#f3f4f6] text-gray-400 light:text-gray-600 border border-white/5 light:border-black/10 hover:text-white light:hover:text-black'
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
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
                Provider Name
              </label>
              <input 
                type="text" 
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                className="bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/15 rounded-lg px-3 py-2 text-xs text-white light:text-black outline-none focus:border-primary/50"
              />
            </div>

            {/* API Format */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
                API Format
              </label>
              <div className="relative">
                <select className="w-full bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/15 rounded-lg px-3 py-2 text-xs text-white light:text-black outline-none appearance-none cursor-pointer">
                  <option>OpenAI Compatible</option>
                  <option>Anthropic Compatible</option>
                  <option>Ollama Native</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
              </div>
              <p className="text-[10px] text-gray-500 light:text-gray-500">
                Most providers (OpenRouter, NVIDIA NIM, Groq, Together, etc.) use "OpenAI Compatible" — even for Anthropic models.
              </p>
            </div>

            {/* Base URL */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
                Base URL
              </label>
              <input 
                type="text" 
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/15 rounded-lg px-3 py-2 text-xs text-white light:text-black outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* API Key */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
                API Key
              </label>
              <input 
                type="password" 
                placeholder="sk-..."
                defaultValue="sk-aethersync-local-keys-hidden"
                className="bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/15 rounded-lg px-3 py-2 text-xs text-white light:text-black outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* Model */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-gray-400 light:text-gray-600">
                Model
              </label>
              <input 
                type="text" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/15 rounded-lg px-3 py-2 text-xs text-white light:text-black outline-none focus:border-primary/50 font-mono"
              />
            </div>

            {/* Form Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5 light:border-black/10">
              <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 light:text-gray-700 hover:text-white light:hover:text-black">
                <Check size={14} className="text-primary" /> Test Connection
              </button>
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white light:hover:text-black">
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
