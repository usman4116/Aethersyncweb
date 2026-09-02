'use client';

import React, { useState } from 'react';
import { 
  Plus, Search, Settings, Moon, Paperclip, Send, Folder, Terminal, 
  Minus, Square, X, MessageSquare, Layout, Code2, Cpu, LogOut 
} from 'lucide-react';

interface LiveChatAppProps {
  className?: string;
}

export function LiveChatApp({ className = '' }: LiveChatAppProps) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string; time: string }[]>([
    {
      role: 'user',
      text: 'How do I configure a custom OpenAI-compatible endpoint with streaming enabled?',
      time: '10:42 AM'
    },
    {
      role: 'assistant',
      text: 'To connect any OpenAI-compatible endpoint in AetherSync, go to Settings → Providers, click "Add Provider", select "OpenAI Compatible", and enter your base URL and API key. Streaming is automatically supported out of the box with zero proxy lag.',
      time: '10:42 AM'
    }
  ]);

  const dummyChats = [
    { id: 1, title: 'Configure custom OpenAI endpoint', time: 'Just now' },
    { id: 2, title: 'Refactor database schema for hostels', time: '2h ago' },
    { id: 3, title: 'Fix dark mode hydration mismatch', time: 'Yesterday' },
    { id: 4, title: 'Generate Dockerfile & compose setup', time: '2 days ago' },
  ];

  const handleSend = () => {
    if (!inputVal.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: inputVal, time: 'Just now' },
      { role: 'assistant', text: `Got it! I am processing "${inputVal}" across your repository context...`, time: 'Just now' }
    ]);
    setInputVal('');
    setSelectedChat(1);
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
            <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-bold flex items-center gap-1.5 border border-primary/20">
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
            <span>Model: <strong className="text-[var(--ide-text-bright)] font-semibold">Claude 3.7 Sonnet</strong></span>
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

            <button 
              onClick={() => setSelectedChat(null)}
              className="w-full bg-primary hover:bg-[#ff8642] text-black font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs shadow-md transition-all"
            >
              <Plus size={14} /> New Chat
            </button>

            <div className="flex flex-col gap-1 mt-1 text-xs">
              <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20 flex items-center gap-2.5 cursor-pointer">
                <MessageSquare size={14} /> Simple Chat
              </div>
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Layout size={14} /> IDE Workspace
              </div>
              <div className="px-3 py-2 rounded-lg text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5 flex items-center gap-2.5 cursor-pointer">
                <Code2 size={14} /> Coding Agent
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[10px] font-bold tracking-wider text-[var(--ide-text-dim)] uppercase px-1 mb-2 block">
                Recent Chats
              </span>
              <div className="relative mb-2">
                <Search size={12} className="absolute left-2.5 top-2.5 text-[var(--ide-text-dim)]" />
                <input 
                  type="text" 
                  placeholder="Search chats" 
                  className="w-full bg-[var(--ide-bg)] border border-[var(--ide-border)] rounded-md py-1.5 pl-7 pr-2 text-[11px] text-[var(--ide-text-bright)] outline-none placeholder-[var(--ide-text-dim)]" 
                />
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto max-h-[190px] no-scrollbar">
                {dummyChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`px-2.5 py-2 rounded-lg text-xs cursor-pointer flex flex-col transition-all ${
                      selectedChat === chat.id
                        ? 'bg-primary/15 text-[var(--ide-text-bright)] border border-primary/30 font-medium'
                        : 'text-[var(--ide-text-dim)] hover:bg-black/5 hover:text-[var(--ide-text-bright)]'
                    }`}
                  >
                    <span className="truncate text-[11.5px]">{chat.title}</span>
                    <span className="text-[9px] text-[var(--ide-text-dim)] mt-0.5">{chat.time}</span>
                  </div>
                ))}
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

        {/* Center Main Stage (Chat Stage) */}
        <div className="flex-1 bg-[var(--ide-bg)] flex flex-col justify-between p-6 relative overflow-hidden">
          
          {selectedChat ? (
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-3xl mx-auto w-full no-scrollbar">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 text-xs leading-relaxed ${
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0 mt-1 font-bold">
                      A
                    </div>
                  )}

                  <div 
                    className={`p-3.5 rounded-2xl max-w-[80%] shadow-sm ${
                      m.role === 'user'
                        ? 'bg-primary text-black font-medium rounded-tr-none'
                        : 'bg-[var(--ide-sidebar)] text-[var(--ide-text-bright)] border border-[var(--ide-border)] rounded-tl-none'
                    }`}
                  >
                    <p>{m.text}</p>
                    <span className={`text-[9px] mt-1.5 block ${m.role === 'user' ? 'text-black/70' : 'text-[var(--ide-text-dim)]'}`}>
                      {m.time}
                    </span>
                  </div>

                  {m.role === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-black/10 text-[var(--ide-text-bright)] flex items-center justify-center shrink-0 mt-1 font-semibold text-[11px]">
                      U
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto text-center gap-5">
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a2e] to-[#ff5700] shadow-[0_0_40px_rgba(255,108,26,0.35)] flex items-center justify-center text-white font-extrabold text-3xl">
                A
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-[var(--ide-text-bright)] tracking-tight">
                  Welcome to AetherSync
                </h2>
                <p className="text-xs md:text-[13px] text-[var(--ide-text-dim)] leading-relaxed max-w-md">
                  To start chatting, select a recent conversation or add an AI provider — any OpenAI-compatible or Anthropic-compatible API works.
                </p>
              </div>

              <button 
                onClick={() => setSelectedChat(1)}
                className="bg-primary hover:bg-[#ff8642] text-black font-bold px-6 py-2 rounded-xl text-xs shadow-md transition-all hover:scale-105 active:scale-95"
              >
                Start Conversation
              </button>
            </div>
          )}

          {/* Bottom Floating Prompt Input Box */}
          <div className="w-full max-w-3xl mx-auto relative mt-auto">
            <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-2xl p-2.5 flex items-center gap-3 shadow-2xl focus-within:border-primary/50 transition-colors">
              <button className="p-2 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] rounded-lg hover:bg-black/5 transition-colors">
                <Paperclip size={16} />
              </button>
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything... or select a provider (Enter to send)"
                className="flex-1 bg-transparent border-none outline-none text-xs text-[var(--ide-text-bright)] placeholder-[var(--ide-text-dim)]"
              />
              <button 
                onClick={handleSend}
                className="w-9 h-9 rounded-xl bg-primary hover:bg-[#ff8642] text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,108,26,0.4)] transition-transform active:scale-95"
              >
                <Send size={14} />
              </button>
            </div>
            
            <div className="flex items-center justify-between px-2 pt-1.5 text-[10px] text-[var(--ide-text-dim)]">
              <span>Enter to send · Shift+Enter for newline</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success inline-block" /> Status: Ready</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
