'use client';

import React from 'react';
import { 
  Plus, 
  Terminal, 
  Minus, 
  Square, 
  X, 
  Folder, 
  Layout, 
  MessageSquare, 
  Code2, 
  Cpu, 
  Maximize2,
  Copy,
  ChevronDown,
  Moon,
  Settings,
  LogOut,
  Bot
} from 'lucide-react';

interface LiveTerminalAppProps {
  className?: string;
}

export function LiveTerminalApp({ className = '' }: LiveTerminalAppProps) {
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
            <span className="px-2.5 py-1 rounded bg-[#202020] light:bg-[#e5e7eb] text-primary font-bold flex items-center gap-1.5 border border-primary/20">
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
            <span>Model: <strong className="text-gray-300 light:text-gray-800 font-semibold">none configured</strong></span>
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold">
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
        
        {/* Left Activity Rail */}
        <div className="w-64 bg-[#111111] light:bg-[#f9fafb] border-r border-white/5 light:border-black/10 flex flex-col justify-between shrink-0">
          
          {/* Sidebar Top Section */}
          <div className="p-3 flex flex-col gap-3">
            
            {/* Logo Brand */}
            <div className="flex items-center gap-2 px-1 py-1">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white light:text-black leading-none">aethersync</span>
                <span className="text-[9px] text-primary font-mono tracking-widest uppercase">Desktop</span>
              </div>
            </div>

            {/* New Chat Button */}
            <button className="w-full bg-primary hover:bg-[#ff8642] text-black font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs shadow-md transition-all">
              <Plus size={14} /> New Chat
            </button>

            {/* Nav links */}
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <div className="px-3 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <MessageSquare size={14} /> Simple Chat
              </div>
              <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg text-gray-400 light:text-gray-600 hover:bg-white/5 light:hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>

            {/* File Explorer Tree */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-gray-500 light:text-gray-400 uppercase px-1 mb-2">
                <span>Explorer</span>
                <span>hostel-mgmt</span>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-400 light:text-gray-600 pl-1">
                <div className="flex items-center gap-1.5 text-gray-300 light:text-gray-800 font-medium cursor-pointer">
                  <Folder size={13} className="text-primary" /> hostel-management-system-main
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Bottom Section */}
          <div className="p-3 border-t border-white/5 light:border-black/10 flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600 px-2 py-1 hover:text-white light:hover:text-black cursor-pointer">
              <Folder size={13} className="text-primary" /> hostel-management-syst...
            </div>
            <div className="flex items-center gap-2 text-gray-400 light:text-gray-600 px-2 py-1 hover:text-white light:hover:text-black cursor-pointer">
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
                  <span className="text-[9px] text-gray-500 truncate max-w-[120px]">roxenusman@gmail.com</span>
                </div>
              </div>
              <LogOut size={12} className="text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Center Main Stage (Dedicated Full Terminal View) */}
        <div className="flex-1 bg-[#0c0c0c] light:bg-[#ffffff] flex flex-col overflow-hidden border-r border-white/5 light:border-black/10">
          
          {/* Terminal Tabs Header */}
          <div className="h-9 bg-[#141414] light:bg-[#f3f4f6] border-b border-white/5 light:border-black/10 flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-2 h-full">
              <div className="flex items-center gap-2 px-3 h-full bg-[#0c0c0c] light:bg-[#ffffff] border-t-2 border-primary text-xs font-semibold text-white light:text-black">
                <Terminal size={12} className="text-primary" />
                <span>bash (hostel-management-system-main)</span>
                <span className="w-2 h-2 rounded-full bg-success ml-1" />
              </div>
              <button className="p-1 hover:bg-white/5 light:hover:bg-black/5 rounded text-gray-400 light:text-gray-600">
                <Plus size={13} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-gray-400 light:text-gray-500 text-xs">
              <button className="p-1 hover:text-white light:hover:text-black"><Copy size={12} /></button>
              <button className="p-1 hover:text-white light:hover:text-black"><Maximize2 size={12} /></button>
              <button className="p-1 hover:text-red-400"><X size={13} /></button>
            </div>
          </div>

          {/* Terminal Shell Body */}
          <div className="flex-1 p-4 font-mono text-[12px] leading-relaxed text-gray-300 light:text-gray-800 overflow-y-auto no-scrollbar bg-[#080808] light:bg-[#fdfdfd]">
            <div className="text-gray-500 light:text-gray-400 mb-2 select-text">
              - bash [/home/usman/Downloads/hostel management system main] -
            </div>
            <div className="text-amber-400/90 light:text-amber-700 mb-1 select-text">
              bash: cannot set terminal process group (2622): Inappropriate ioctl for device
            </div>
            <div className="text-amber-400/90 light:text-amber-700 mb-3 select-text">
              bash: no job control in this shell
            </div>
            
            <div className="flex flex-wrap items-baseline gap-1 select-text">
              <span className="text-emerald-400 light:text-emerald-700 font-bold">usman@usman-OptiPlex-9030-AIO</span>
              <span className="text-gray-400 light:text-gray-500">:</span>
              <span className="text-sky-400 light:text-sky-700 font-bold">~/Downloads/hostel-management-system-main</span>
              <span className="text-gray-400 light:text-gray-500">$</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-gray-200 light:text-gray-900">
              <span className="text-primary font-bold">$</span>
              <span className="animate-pulse bg-primary w-2 h-4 inline-block" />
            </div>
          </div>

          {/* Status Bar */}
          <div className="h-6 bg-[#111111] light:bg-[#f3f4f6] border-t border-white/5 light:border-black/10 px-3 flex items-center justify-between text-[10px] text-gray-500 light:text-gray-600 shrink-0">
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
        <div className="w-64 bg-[#111111] light:bg-[#f9fafb] flex flex-col justify-between p-4 shrink-0">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 light:border-black/10 pb-2.5 text-xs">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <Bot size={13} /> AI ASSISTANT
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center text-center p-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 light:bg-black/5 flex items-center justify-center text-gray-400 mb-3">
                <Bot size={20} />
              </div>
              <h4 className="text-xs font-semibold text-gray-200 light:text-gray-800 mb-1">
                AI Code Assistant
              </h4>
              <p className="text-[11px] text-gray-500 light:text-gray-500 leading-normal">
                Ask questions about your code, generate components, or debug issues while viewing your files.
              </p>
            </div>
          </div>

          {/* Bottom Prompt Input */}
          <div className="bg-[#181818] light:bg-[#ffffff] border border-white/10 light:border-black/10 rounded-xl p-2.5 flex items-center text-xs text-gray-400">
            <span className="text-[11px] text-gray-500">Ask about code...</span>
          </div>
        </div>

      </div>

    </div>
  );
}
