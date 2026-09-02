'use client';

import React, { useState } from 'react';
import { 
  Plus, Search, Settings, Moon, Paperclip, Send, Folder, Terminal, 
  Minus, Square, X, ShieldAlert, Code2, MessageSquare, Layout, 
  Cpu, ChevronRight, LogOut
} from 'lucide-react';

interface LiveCodingAgentAppProps {
  className?: string;
}

export function LiveCodingAgentApp({ className = '' }: LiveCodingAgentAppProps) {
  const [inputVal, setInputVal] = useState('');

  const quickPrompts = [
    'Explain the project structure',
    'Fix failing tests and run them',
    'Add a dark mode toggle to settings',
    'Find and fix the bug in login flow'
  ];

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
            <span className="px-2.5 py-1 rounded text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer flex items-center gap-1.5">
              <Layout size={12} /> IDE
            </span>
            <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-bold flex items-center gap-1.5 border border-primary/20">
              <Code2 size={12} /> Agent
            </span>
            <span className="text-[var(--ide-text-dim)] opacity-40 mx-1">/</span>
            <span className="text-[var(--ide-text-dim)] flex items-center gap-1">
              <Folder size={12} className="text-primary" /> woocommerce
            </span>
          </div>
        </div>

        {/* Right window actions */}
        <div className="flex items-center gap-4 text-[11px] text-[var(--ide-text-dim)]">
          <div className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer">
            <Cpu size={12} className="text-primary" />
            <span>Model: <strong className="text-[var(--ide-text-bright)] font-semibold">Claude 3.7 Sonnet</strong></span>
          </div>
          <div className="flex items-center gap-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
            <Terminal size={12} /> Terminal
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-[var(--ide-border)]">
            <Minus size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            <Square size={11} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            <X size={13} className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. Main Content Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar */}
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
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>

            <div className="mt-3">
              <span className="text-[10px] font-bold tracking-wider text-[var(--ide-text-dim)] uppercase px-1 mb-2 block">
                Agent Chats
              </span>
              <div className="relative mb-2">
                <Search size={12} className="absolute left-2.5 top-2.5 text-[var(--ide-text-dim)]" />
                <input 
                  type="text" 
                  placeholder="Search chats" 
                  className="w-full bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-md py-1.5 pl-7 pr-2 text-[11px] text-[var(--ide-text-bright)] outline-none placeholder-[var(--ide-text-dim)]" 
                />
              </div>
              <p className="text-[11px] text-[var(--ide-text-dim)] px-2 py-1 italic">
                No chats yet
              </p>
            </div>
          </div>

          <div className="p-3 border-t border-[var(--ide-border)] flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)] px-2 py-1 hover:text-[var(--ide-text-bright)] cursor-pointer">
              <Folder size={13} className="text-primary" /> woocommerce
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
                  U
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[var(--ide-text-bright)]">Usman</span>
                  <span className="text-[9px] text-[var(--ide-text-dim)] truncate max-w-[120px]">usman@aethersync.dev</span>
                </div>
              </div>
              <LogOut size={12} className="text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Center Main Stage (Agent Interface) */}
        <div className="flex-1 bg-[var(--ide-bg)] flex flex-col justify-between p-6 relative overflow-hidden">
          
          <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center gap-6">
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a2e] to-[#ff5700] shadow-[0_0_40px_rgba(255,108,26,0.35)] flex items-center justify-center text-white font-extrabold text-3xl">
              A
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-[var(--ide-text-bright)] tracking-tight">
                Coding Agent
              </h2>
              <p className="text-xs md:text-[13px] text-[var(--ide-text-dim)] leading-relaxed max-w-lg">
                Ask the agent to inspect, modify, or build something in <strong className="text-[var(--ide-text-bright)] font-semibold">woocommerce</strong>. It can read files, search, edit, run commands, and verify results — with your approval for anything risky.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
              {quickPrompts.map((prompt, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInputVal(prompt)}
                  className="p-3.5 rounded-xl bg-[var(--ide-sidebar)] hover:bg-[var(--ide-header)] border border-[var(--ide-border)] text-[var(--ide-text-bright)] text-xs font-medium text-left transition-all hover:border-primary/40 flex items-center justify-between group shadow-sm"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <ChevronRight size={13} className="text-[var(--ide-text-dim)] group-hover:text-primary transition-transform group-hover:translate-x-0.5 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Floating Prompt Input Box */}
          <div className="w-full max-w-3xl mx-auto relative">
            <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-2xl p-2.5 flex items-center gap-3 shadow-2xl focus-within:border-primary/50 transition-colors">
              <button className="p-2 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] rounded-lg hover:bg-black/5 transition-colors">
                <Paperclip size={16} />
              </button>
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask the coding agent... (it can read, edit, run commands)"
                className="flex-1 bg-transparent border-none outline-none text-xs text-[var(--ide-text-bright)] placeholder-[var(--ide-text-dim)]"
              />
              <button className="w-9 h-9 rounded-xl bg-primary hover:bg-[#ff8642] text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,108,26,0.4)] transition-transform active:scale-95">
                <Send size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Right Activity Rail */}
        <div className="w-64 bg-[var(--ide-sidebar)] border-l border-[var(--ide-border)] p-4 flex flex-col gap-4 text-xs shrink-0">
          
          <div className="flex items-center justify-between border-b border-[var(--ide-border)] pb-2.5">
            <span className="text-[11px] font-bold text-[var(--ide-text-dim)] uppercase tracking-wider">
              Activity
            </span>
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold text-[var(--ide-text-bright)]">
              TOOL CALLS (0)
            </span>
            <p className="text-[11px] text-[var(--ide-text-dim)]">
              No tool calls yet this session.
            </p>
          </div>

          <div className="mt-auto p-3 rounded-xl bg-[var(--ide-bg)] border border-[var(--ide-border)] flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-primary font-semibold text-[11px]">
              <ShieldAlert size={13} /> Sandbox
            </div>
            <p className="text-[10px] text-[var(--ide-text-dim)] leading-tight">
              Tool access is restricted to:
            </p>
            <code className="text-[9px] font-mono text-[var(--ide-text-bright)] bg-black/5 p-1 rounded break-all border border-[var(--ide-border)]">
              /home/usman/Downloads/woocommerce
            </code>
          </div>

        </div>

      </div>

    </div>
  );
}
