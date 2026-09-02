'use client';

import React from 'react';
import { 
  Search, MessageSquare, Folder, Layout, Code2, Settings, Moon, 
  Terminal, Bot, Minus, Square, X, ChevronRight, ChevronDown, 
  FileCode, Play, Plus, Box, GitBranch
} from 'lucide-react';

export function LiveIDEApp() {
  return (
    <div className="w-[1250px] h-[750px] bg-[#0c0c0c] rounded-xl shadow-lift flex flex-col font-sans text-gray-300 border border-white/10 overflow-hidden cursor-auto select-auto">
      {/* Top Electron Title Bar */}
      <div className="h-10 w-full bg-[#0c0c0c] border-b border-white/5 flex items-center justify-between px-3 select-none shrink-0">
        
        {/* Left: Brand & Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
             <div className="w-5 h-5 bg-primary text-[#0c0c0c] rounded flex items-center justify-center text-xs">A</div>
             Aether Sync
          </div>
          <div className="flex items-center text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 text-gray-400 hover:text-white transition-colors cursor-pointer border-r border-white/10">
              <MessageSquare size={13} /> Chat
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 text-primary bg-white/5 transition-colors cursor-pointer border-r border-white/10">
              <Layout size={13} /> IDE
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Bot size={13} /> Agent
            </div>
          </div>
        </div>
        
        {/* Center: Search Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-1 w-96 text-xs text-gray-400 cursor-text">
          <Search size={13} className="mr-2 opacity-50" />
          <span className="flex-1">Search files, symbols & commands...</span>
          <span className="opacity-40 text-[10px]">Ctrl+P</span>
        </div>
        
        {/* Right: Model & Window Controls */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer">
            Model: <span className="text-gray-300">none configured</span> <ChevronDown size={12} />
          </div>
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer mr-2">
            <Terminal size={13} /> Terminal
          </div>
          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
            <Minus size={14} className="hover:text-white cursor-pointer" />
            <Square size={12} className="hover:text-white cursor-pointer" />
            <X size={14} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main App Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Far Left Sidebar (App Nav) */}
        <div className="w-60 bg-[#0c0c0c] border-r border-white/5 flex flex-col shrink-0 p-3">
          <div className="flex items-center gap-3 mb-4 pl-1 mt-1">
            <div className="w-7 h-7 bg-primary text-[#0c0c0c] rounded-md flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">A</div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-tight">aethersync</div>
              <div className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">Desktop</div>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-[#ff8642] text-[#0c0c0c] text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 mb-6 transition-colors">
            <Plus size={16} /> New Chat
          </button>

          <div className="flex flex-col gap-1 mb-6">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <MessageSquare size={16} /> Simple Chat
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-white bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <Layout size={16} className="text-primary" /> IDE Workspace
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <Code2 size={16} /> Coding Agent
            </div>
          </div>

          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 mb-2">Chats</div>
          <div className="px-3 mb-4">
            <div className="bg-[#1a1a1a] rounded-md px-2.5 py-1.5 flex items-center text-xs border border-white/5">
              <Search size={12} className="text-gray-500 mr-2" />
              <input type="text" placeholder="Search chats..." className="bg-transparent border-none outline-none text-white placeholder-gray-600 w-full" />
            </div>
          </div>
          <div className="px-3 text-xs text-gray-500 italic">No chats yet</div>

          <div className="mt-auto flex flex-col gap-1 border-t border-white/5 pt-2">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <Folder size={16} /> Open Project
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-white bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <Settings size={16} className="text-primary" /> Settings
            </div>
            <div className="flex items-center justify-between px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors text-sm">
              <div className="flex items-center gap-3"><Moon size={16} /> Dark Mode</div>
              <div className="text-[10px] bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-white/10">Dark</div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 mt-2 border-t border-white/5 cursor-pointer hover:bg-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-900 text-orange-200 flex items-center justify-center text-xs font-bold border border-orange-700">R</div>
                <div className="leading-tight">
                  <div className="text-xs text-white font-medium">Roxan Usman</div>
                  <div className="text-[10px] text-gray-500">roxanusman@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IDE Explorer Sidebar */}
        <div className="w-56 bg-[#121212] border-r border-white/5 flex flex-col shrink-0">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">EXPLORER &middot; ASYNC</span>
            <div className="flex gap-2 text-gray-500">
               <Plus size={12} className="hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-2 text-xs text-gray-400 no-scrollbar">
            <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer">
              <Search size={14} className="text-gray-500" />
              <input type="text" placeholder="Find file..." className="bg-transparent outline-none border-none placeholder-gray-600 w-full" />
            </div>
            
            <div className="mt-2 space-y-[1px]">
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <FileCode size={13} className="text-gray-500" /> <span>check-routes.mjs</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <FileCode size={13} className="text-gray-500" /> <span>check-schema.mjs</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <FileCode size={13} className="text-gray-500" /> <span>eval.mjs</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <FileCode size={13} className="text-gray-500" /> <span>find-overflow.mjs</span>
               </div>
               
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer mt-2 text-white">
                 <ChevronDown size={14} /> <Folder size={13} className="text-primary" /> <span>src</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <ChevronRight size={14} /> <Folder size={13} className="text-gray-500" /> <span>assets</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <ChevronRight size={14} /> <Folder size={13} className="text-gray-500" /> <span>components</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-6">
                 <ChevronDown size={14} /> <Folder size={13} className="text-primary" /> <span className="text-white">hooks</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-10">
                 <FileCode size={13} className="text-blue-400" /> <span>usePageMeta.ts</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 bg-white/10 text-white cursor-pointer pl-10 border-l-2 border-primary">
                 <FileCode size={13} className="text-blue-400" /> <span>useReducedMotion.ts</span>
               </div>
               <div className="px-2 py-1 flex items-center gap-1.5 hover:bg-white/5 cursor-pointer pl-10">
                 <FileCode size={13} className="text-blue-400" /> <span>useSmoothScroll.ts</span>
               </div>
            </div>
          </div>
        </div>

        {/* Main Center Area (Editor + Terminal) */}
        <div className="flex-1 flex flex-col bg-[#0f0f0f] relative min-w-0">
          
          {/* Editor Tabs */}
          <div className="flex items-center border-b border-white/5 bg-[#121212] overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 px-4 py-2.5 border-r border-white/5 text-xs text-gray-500 hover:text-gray-300 cursor-pointer min-w-max">
              <FileCode size={13} /> og-image.png <X size={12} className="ml-2 hover:bg-white/10 rounded" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f0f0f] border-t-2 border-t-primary text-xs text-white cursor-pointer min-w-max">
              <FileCode size={13} className="text-blue-400" /> useReducedMotion.ts <X size={12} className="ml-2 hover:bg-white/10 rounded" />
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed text-gray-300 no-scrollbar relative selection:bg-primary/30">
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">1</span><span className="text-pink-400">import</span> {'{'} <span className="text-blue-300">useEffect</span>, <span className="text-blue-300">useState</span> {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">2</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">3</span><span className="text-gray-500">/**</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">4</span><span className="text-gray-500"> * Tracks the OS reduced-motion preference and keeps up with live changes</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">5</span><span className="text-gray-500"> */</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">6</span><span className="text-pink-400">export function</span> <span className="text-yellow-200">useReducedMotion</span>(): <span className="text-blue-400">boolean</span> {'{'}</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">7</span>  <span className="text-pink-400">const</span> [reduced, setReduced] = <span className="text-yellow-200">useState</span>(() <span className="text-pink-400">{'=>'}</span> {'{'}</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">8</span>    <span className="text-pink-400">if</span> (<span className="text-blue-400">typeof</span> window <span className="text-pink-400">===</span> <span className="text-green-300">'undefined'</span> || !window.<span className="text-blue-300">matchMedia</span>) <span className="text-pink-400">return false</span>;</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">9</span>    <span className="text-pink-400">return</span> window.<span className="text-blue-300">matchMedia</span>(<span className="text-green-300">'(prefers-reduced-motion: reduce)'</span>).matches;</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">10</span>  {'}'});</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">11</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">12</span>  <span className="text-yellow-200">useEffect</span>(() <span className="text-pink-400">{'=>'}</span> {'{'}</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">13</span>    <span className="text-pink-400">if</span> (!window.<span className="text-blue-300">matchMedia</span>) <span className="text-pink-400">return</span>;</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">14</span>    <span className="text-pink-400">const</span> query = window.<span className="text-blue-300">matchMedia</span>(<span className="text-green-300">'(prefers-reduced-motion: reduce)'</span>);</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">15</span>    <span className="text-pink-400">const</span> onChange = (e: <span className="text-blue-400">MediaQueryListEvent</span>) <span className="text-pink-400">{'=>'}</span> <span className="text-yellow-200">setReduced</span>(e.matches);</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">16</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">17</span>    query.<span className="text-yellow-200">addEventListener</span>(<span className="text-green-300">'change'</span>, onChange);</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">18</span>    <span className="text-pink-400">return</span> () <span className="text-pink-400">{'=>'}</span> query.<span className="text-yellow-200">removeEventListener</span>(<span className="text-green-300">'change'</span>, onChange);</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">19</span>  {'}'}, []);</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">20</span></div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">21</span>  <span className="text-pink-400">return</span> reduced;</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">22</span>{'}'}</div>
            <div className="flex"><span className="w-8 text-right pr-4 text-gray-600 select-none">23</span></div>
          </div>

          {/* Bottom Terminal */}
          <div className="h-56 bg-[#0c0c0c] border-t border-white/5 flex flex-col">
             <div className="flex items-center gap-4 px-4 py-2 border-b border-white/5 text-xs">
               <div className="text-white border-b border-primary pb-1 flex items-center gap-2">
                 <Terminal size={13} /> bash (Async) <X size={12} className="ml-1 opacity-50 hover:opacity-100 cursor-pointer" />
               </div>
               <div className="text-gray-500 hover:text-white cursor-pointer"><Plus size={13} /></div>
             </div>
             <div className="flex-1 p-3 font-mono text-[11px] text-gray-300 overflow-y-auto no-scrollbar">
               <div className="text-gray-400 mb-2">- bash [/home/usman/Music/Async] -</div>
               <div className="flex">
                 <span className="text-green-400 mr-2">usman@OptiPlex:~/Music/Async$</span>
                 <input type="text" className="flex-1 bg-transparent border-none outline-none text-gray-300" />
               </div>
             </div>
          </div>
        </div>

        {/* Far Right Sidebar (AI Assistant) */}
        <div className="w-64 bg-[#121212] border-l border-white/5 flex flex-col shrink-0">
           <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
             <div className="flex items-center gap-2 text-xs font-bold text-primary">
               <Bot size={14} /> AI ASSISTANT
             </div>
             <div className="flex gap-2">
               <Minus size={13} className="text-gray-500 hover:text-white cursor-pointer" />
               <X size={13} className="text-gray-500 hover:text-white cursor-pointer" />
             </div>
           </div>
           
           <div className="p-3">
             <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-lg p-1 border border-white/5">
               <button className="flex-1 text-[10px] py-1.5 text-white bg-white/10 rounded-md font-medium">Explain File</button>
               <button className="flex-1 text-[10px] py-1.5 text-gray-400 hover:text-white rounded-md transition-colors">Write Tests</button>
               <button className="flex-1 text-[10px] py-1.5 text-gray-400 hover:text-white rounded-md transition-colors">Review Code</button>
             </div>
           </div>
           
           <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Bot size={24} className="text-gray-500" />
              </div>
              <div className="text-sm text-white font-medium mb-2">AI Code Assistant</div>
              <div className="text-xs text-gray-500 leading-relaxed">
                Ask questions about your code, generate components, or debug issues while viewing your files.
              </div>
           </div>
           
           <div className="p-3 border-t border-white/5 bg-[#121212]">
             <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-2.5 flex items-center focus-within:border-primary/50 transition-colors">
               <input type="text" placeholder="Ask about code..." className="w-full bg-transparent border-none outline-none text-xs text-white placeholder-gray-600" />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
