'use client';

import React from 'react';
import { 
  Plus, Terminal, Minus, Square, X, Folder, Layout, MessageSquare, 
  Code2, Cpu, Maximize2, Copy, Moon, Settings, LogOut, Bot 
} from 'lucide-react';

interface LiveTerminalAppProps {
  className?: string;
}

export function LiveTerminalApp({ className = '' }: LiveTerminalAppProps) {
  return (
    <div className={`w-[1250px] h-[750px] bg-[var(--ide-bg)] text-[var(--ide-text)] font-sans flex flex-col select-none overflow-hidden rounded-xl border border-[var(--ide-border)] shadow-2xl transition-colors duration-200 ${className}`}>
      
      {/* 1. Top Window Frame Bar */}
      <div className="h-10 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 text-xs shrink-0">
        
        {/* Left window tabs */}
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
            <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-bold flex items-center gap-1.5 border border-primary/20">
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

        {/* Right window actions */}
        <div className="flex items-center gap-4 text-[11px] text-[var(--ide-text-dim)]">
          <div className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer">
            <Cpu size={12} className="text-primary" />
            <span>Model: <strong className="text-[var(--ide-text-bright)] font-semibold">none configured</strong></span>
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold">
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
        
        {/* Left Activity Rail */}
        <div className="w-64 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col justify-between shrink-0">
          
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
              <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-[var(--ide-text-dim)] uppercase px-1 mb-2">
                <span>Explorer</span>
                <span>hostel-mgmt</span>
              </div>
              <div className="flex flex-col gap-1 text-xs pl-1">
                <div className="flex items-center gap-1.5 text-[var(--ide-text-bright)] font-medium cursor-pointer">
                  <Folder size={13} className="text-primary" /> hostel-management-system-main
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-[var(--ide-border)] flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)] px-2 py-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
              <Folder size={13} className="text-primary" /> hostel-management-syst...
            </div>
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)] px-2 py-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
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
                  <span className="text-[9px] text-[var(--ide-text-dim)] truncate max-w-[120px]">roxenusman@gmail.com</span>
                </div>
              </div>
              <LogOut size={12} className="text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Center Main Stage (Dedicated Full Terminal View) */}
        <div className="flex-1 bg-[var(--ide-bg)] flex flex-col overflow-hidden border-r border-[var(--ide-border)]">
          
          <div className="h-9 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-2 h-full">
              <div className="flex items-center gap-2 px-3 h-full bg-[var(--ide-bg)] border-t-2 border-primary text-xs font-semibold text-[var(--ide-text-bright)]">
                <Terminal size={12} className="text-primary" />
                <span>bash (hostel-management-system-main)</span>
                <span className="w-2 h-2 rounded-full bg-success ml-1" />
              </div>
              <button className="p-1 hover:bg-black/5 rounded text-[var(--ide-text-dim)]">
                <Plus size={13} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[var(--ide-text-dim)] text-xs">
              <button className="p-1 hover:text-[var(--ide-text-bright)]"><Copy size={12} /></button>
              <button className="p-1 hover:text-[var(--ide-text-bright)]"><Maximize2 size={12} /></button>
              <button className="p-1 hover:text-red-400"><X size={13} /></button>
            </div>
          </div>

          <div className="flex-1 p-4 font-mono text-[12px] leading-relaxed overflow-y-auto no-scrollbar bg-[var(--ide-code-bg)] text-[var(--ide-text)]">
            <div className="text-[var(--ide-text-dim)] mb-2 select-text">
              - bash [/home/usman/Downloads/hostel management system main] -
            </div>
            <div className="text-amber-500 font-medium mb-1 select-text">
              bash: cannot set terminal process group (2622): Inappropriate ioctl for device
            </div>
            <div className="text-amber-500 font-medium mb-3 select-text">
              bash: no job control in this shell
            </div>
            
            <div className="flex flex-wrap items-baseline gap-1 select-text">
              <span className="text-emerald-500 font-bold">usman@usman-OptiPlex-9030-AIO</span>
              <span className="text-[var(--ide-text-dim)]">:</span>
              <span className="text-blue-500 font-bold">~/Downloads/hostel-management-system-main</span>
              <span className="text-[var(--ide-text-dim)]">$</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-[var(--ide-text-bright)]">
              <span className="text-primary font-bold">$</span>
              <span className="animate-pulse bg-primary w-2 h-4 inline-block" />
            </div>
          </div>

          <div className="h-6 bg-[var(--ide-header)] border-t border-[var(--ide-border)] px-3 flex items-center justify-between text-[10px] text-[var(--ide-text-dim)] shrink-0">
            <div className="flex items-center gap-3">
              <span>UTF-8</span>
              <span>Spaces: 2</span>
              <span>PTY: Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success flex items-center gap-1">● Terminal Live</span>
            </div>
          </div>

        </div>

        {/* Right Docked AI Assistant */}
        <div className="w-64 bg-[var(--ide-sidebar)] flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--ide-border)] pb-2.5 text-xs">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <Bot size={13} /> AI ASSISTANT
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center text-center p-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3">
                <Bot size={20} />
              </div>
              <h4 className="text-xs font-semibold text-[var(--ide-text-bright)] mb-1">
                AI Code Assistant
              </h4>
              <p className="text-[11px] text-[var(--ide-text-dim)] leading-normal">
                Ask questions about your code, generate components, or debug issues while viewing your files.
              </p>
            </div>
          </div>

          <div className="bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-xl p-2.5 flex items-center text-xs text-[var(--ide-text-dim)] shadow-sm">
            <span className="text-[11px]">Ask about code...</span>
          </div>
        </div>

      </div>

    </div>
  );
}
