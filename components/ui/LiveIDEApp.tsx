'use client';

import React from 'react';
import { 
  Search, MessageSquare, Folder, Layout, Code2, Settings, Moon, 
  Terminal, Bot, Minus, Square, X, ChevronRight, ChevronDown, 
  FileCode, Play, Plus, Box, GitBranch
} from 'lucide-react';

export function LiveIDEApp() {
  return (
    <div className="w-[1250px] h-[750px] bg-[var(--ide-bg)] rounded-xl shadow-2xl flex flex-col font-sans text-[var(--ide-text)] border border-[var(--ide-border)] overflow-hidden cursor-auto select-none transition-colors duration-200">
      
      {/* Top Electron Title Bar */}
      <div className="h-10 w-full bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 select-none shrink-0">
        
        {/* Left: Brand & Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
             <div className="w-5 h-5 bg-primary text-black rounded flex items-center justify-center text-xs">A</div>
             <span className="text-[var(--ide-text-bright)]">Aether Sync</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] transition-colors cursor-pointer border-r border-[var(--ide-border)]">
              <MessageSquare size={13} /> Chat
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 text-primary bg-primary/10 transition-colors cursor-pointer border-r border-[var(--ide-border)] font-semibold">
              <Layout size={13} /> IDE
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] transition-colors cursor-pointer">
              <Bot size={13} /> Agent
            </div>
          </div>
        </div>
        
        {/* Center: Search Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-md px-3 py-1 w-96 text-xs text-[var(--ide-text-dim)] cursor-text shadow-sm">
          <Search size={13} className="mr-2 opacity-50" />
          <span className="flex-1">Search files, symbols & commands...</span>
          <span className="opacity-40 text-[10px]">Ctrl+P</span>
        </div>
        
        {/* Right: Model & Window Controls */}
        <div className="flex items-center gap-4 text-xs text-[var(--ide-text-dim)]">
          <div className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer">
            Model: <span className="text-[var(--ide-text-bright)] font-semibold">Claude 3.7 Sonnet</span> <ChevronDown size={12} />
          </div>
          <div className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer mr-2">
            <Terminal size={13} /> Terminal
          </div>
          <div className="flex items-center gap-3 ml-2 border-l border-[var(--ide-border)] pl-4">
            <Minus size={14} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            <Square size={12} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            <X size={14} className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main App Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Far Left Sidebar (App Nav) */}
        <div className="w-60 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col shrink-0 p-3 justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 pl-1 mt-1">
              <div className="w-7 h-7 bg-primary text-black rounded-md flex items-center justify-center font-bold text-sm shadow-md shadow-primary/20">A</div>
              <div className="leading-tight">
                <div className="text-[var(--ide-text-bright)] font-bold text-sm tracking-tight">aethersync</div>
                <div className="text-[9px] text-primary font-bold tracking-widest uppercase">Desktop</div>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-[#ff8642] text-black text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 mb-4 transition-colors shadow-sm">
              <Plus size={16} /> New Chat
            </button>

            <div className="flex flex-col gap-1 mb-4">
              <div className="flex items-center gap-3 px-3 py-2 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 rounded-lg cursor-pointer transition-colors text-xs">
                <MessageSquare size={15} /> Simple Chat
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-primary bg-primary/10 border border-primary/20 font-semibold rounded-lg cursor-pointer transition-colors text-xs">
                <Layout size={15} /> IDE Workspace
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 rounded-lg cursor-pointer transition-colors text-xs">
                <Code2 size={15} /> Coding Agent
              </div>
            </div>

            <div className="text-[10px] font-bold text-[var(--ide-text-dim)] uppercase tracking-widest px-3 mb-2">Chats</div>
            <div className="px-3 mb-2">
              <div className="bg-[var(--ide-bg)] rounded-md px-2.5 py-1.5 flex items-center text-xs border border-[var(--ide-border)]">
                <Search size={12} className="text-[var(--ide-text-dim)] mr-2" />
                <input type="text" placeholder="Search chats..." className="bg-transparent border-none outline-none text-[var(--ide-text-bright)] placeholder-[var(--ide-text-dim)] w-full text-[11px]" />
              </div>
            </div>
            <div className="px-3 text-[11px] text-[var(--ide-text-dim)] italic">No chats yet</div>
          </div>

          <div className="flex flex-col gap-1 border-t border-[var(--ide-border)] pt-2 text-xs">
            <div className="flex items-center gap-3 px-3 py-1.5 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] rounded-lg cursor-pointer">
              <Folder size={15} className="text-primary" /> Open Project
            </div>
            <div className="flex items-center gap-3 px-3 py-1.5 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] rounded-lg cursor-pointer">
              <Settings size={15} /> Settings
            </div>
            <div className="flex items-center justify-between px-3 py-1.5 text-[var(--ide-text-dim)]">
              <span className="flex items-center gap-2"><Moon size={14} /> Theme</span>
              <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded text-[var(--ide-text-bright)] font-mono">Auto</span>
            </div>
          </div>
        </div>

        {/* Explorer Sidebar */}
        <div className="w-52 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col shrink-0">
          <div className="h-9 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs font-bold text-[var(--ide-text-bright)]">
            <span className="uppercase tracking-wider text-[10px] text-[var(--ide-text-dim)]">Explorer</span>
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)]">
              <Plus size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
              <Folder size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            </div>
          </div>

          <div className="p-2 flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[var(--ide-text-bright)] px-1 py-1 cursor-pointer">
              <ChevronDown size={14} />
              <Folder size={14} className="text-primary fill-primary/20" />
              <span>aethersync-core</span>
            </div>
            
            <div className="pl-4 flex flex-col gap-1 text-[var(--ide-text)] text-[11.5px]">
              <div className="flex items-center gap-1.5 px-1.5 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
                <ChevronRight size={12} /> <Folder size={13} className="text-amber-500/80" /> src
              </div>
              <div className="flex items-center gap-1.5 px-1.5 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
                <ChevronRight size={12} /> <Folder size={13} className="text-blue-500/80" /> agent
              </div>
              <div className="flex items-center gap-1.5 px-1.5 py-1 bg-primary/10 text-primary font-semibold rounded cursor-pointer border border-primary/20">
                <FileCode size={13} /> useReducedMotion.ts
              </div>
              <div className="flex items-center gap-1.5 px-1.5 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
                <FileCode size={13} /> app-context.tsx
              </div>
              <div className="flex items-center gap-1.5 px-1.5 py-1 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
                <FileCode size={13} /> package.json
              </div>
            </div>
          </div>
        </div>

        {/* Center Monaco Editor & Terminal */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[var(--ide-code-bg)]">
          
          {/* Editor Tab Bar */}
          <div className="h-9 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center px-2 gap-1 shrink-0">
            <div className="flex items-center gap-2 px-3 h-full bg-[var(--ide-code-bg)] border-t-2 border-primary text-xs font-semibold text-[var(--ide-text-bright)]">
              <FileCode size={13} className="text-primary" />
              <span>useReducedMotion.ts</span>
              <X size={12} className="opacity-50 hover:opacity-100 cursor-pointer ml-1" />
            </div>
            <div className="flex items-center gap-2 px-3 h-full text-xs text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
              <FileCode size={13} />
              <span>app-context.tsx</span>
            </div>
          </div>

          {/* Code Body */}
          <div className="flex-1 p-4 font-mono text-[11.5px] leading-relaxed overflow-y-auto no-scrollbar text-[var(--ide-text)]">
            <div className="flex gap-4">
              <div className="select-none text-[var(--ide-text-dim)] opacity-40 text-right pr-2 border-r border-[var(--ide-border)]">
                <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
              </div>
              <div className="flex-1">
                <div><span className="text-purple-400 font-semibold">import</span> &#123; useEffect, useState &#125; <span className="text-purple-400 font-semibold">from</span> <span className="text-emerald-500">'react'</span>;</div>
                <div className="text-[var(--ide-text-dim)] italic mt-1">// Tracks the OS reduced-motion preference in real-time</div>
                <div><span className="text-purple-400 font-semibold">export function</span> <span className="text-amber-400 font-bold">useReducedMotion</span>(): <span className="text-blue-400">boolean</span> &#123;</div>
                <div className="pl-4"><span className="text-purple-400 font-semibold">const</span> [reduced, setReduced] = <span className="text-amber-400">useState</span>(<span className="text-blue-400">false</span>);</div>
                <div className="pl-4 mt-1"><span className="text-purple-400 font-semibold">useEffect</span>(() =&gt; &#123;</div>
                <div className="pl-8"><span className="text-purple-400 font-semibold">const</span> media = window.<span className="text-amber-400">matchMedia</span>(<span className="text-emerald-500">'(prefers-reduced-motion: reduce)'</span>);</div>
                <div className="pl-8"><span className="text-amber-400">setReduced</span>(media.matches);</div>
                <div className="pl-4">&#125;, []);</div>
                <div className="pl-4 mt-1"><span className="text-purple-400 font-semibold">return</span> reduced;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>

          {/* Integrated PTY Terminal */}
          <div className="h-44 bg-[var(--ide-bg)] border-t border-[var(--ide-border)] flex flex-col shrink-0">
            <div className="h-8 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs text-[var(--ide-text-dim)] bg-[var(--ide-header)]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--ide-text-bright)] flex items-center gap-1.5"><Terminal size={12} className="text-primary" /> bash (aethersync)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              </div>
              <Plus size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
            </div>
            <div className="flex-1 p-3 font-mono text-[11px] text-[var(--ide-text)] overflow-y-auto no-scrollbar">
              <div className="text-[var(--ide-text-dim)] mb-1">- bash [/home/usman/Music/Async/aethersync-core] -</div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-semibold">usman@OptiPlex:~/aethersync$</span>
                <span className="text-primary font-bold">npm run build:agent</span>
              </div>
              <div className="text-[var(--ide-text-dim)] mt-1">✓ Agent core runtime compiled successfully (2.1s)</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-emerald-500 font-semibold">usman@OptiPlex:~/aethersync$</span>
                <span className="w-2 h-3.5 bg-primary animate-pulse inline-block" />
              </div>
            </div>
          </div>

        </div>

        {/* Right AI Assistant Dock */}
        <div className="w-64 bg-[var(--ide-sidebar)] border-l border-[var(--ide-border)] flex flex-col justify-between p-3 shrink-0">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--ide-border)] pb-2 text-xs">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <Bot size={14} /> AI ASSISTANT
              </span>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center text-center p-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-2 shadow-sm">
                <Bot size={18} />
              </div>
              <h4 className="text-xs font-semibold text-[var(--ide-text-bright)] mb-1">
                AI Assistant Docked
              </h4>
              <p className="text-[11px] text-[var(--ide-text-dim)] leading-normal">
                Ask questions about your codebase, scaffold tests, or run multi-file agentic refactors.
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
