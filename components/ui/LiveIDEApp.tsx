'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, MessageSquare, Folder, Layout, Code2, Settings, Moon, 
  Terminal, Bot, Minus, Square, X, ChevronRight, ChevronDown, 
  FileCode, Play, Plus, Box, GitBranch, FolderOpen, Send, Sparkles,
  FileText, FileJson, Check, UploadCloud
} from 'lucide-react';

interface FileItem {
  name: string;
  path: string;
  content: string;
  isDir?: boolean;
}

const DEFAULT_PROJECT_NAME = 'aethersync-core';

const DEFAULT_FILES: Record<string, string> = {
  'src/useReducedMotion.ts': `import { useEffect, useState } from 'react';

// Tracks the OS reduced-motion preference in real-time
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reduced;
}`,
  'src/app-context.tsx': `import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeModel: string;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeModel, setActiveModel] = useState('Claude 3.7 Sonnet');

  return (
    <AppContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'), activeModel }}>
      {children}
    </AppContext.Provider>
  );
}`,
  'package.json': `{
  "name": "aethersync-core",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "^15.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^1.0.0"
  }
}`
};

export function LiveIDEApp() {
  const [projectName, setProjectName] = useState(DEFAULT_PROJECT_NAME);
  const [files, setFiles] = useState<Record<string, string>>(DEFAULT_FILES);
  const [openTabs, setOpenTabs] = useState<string[]>(['src/useReducedMotion.ts', 'src/app-context.tsx']);
  const [activeTab, setActiveTab] = useState<string>('src/useReducedMotion.ts');
  const [activeNav, setActiveNav] = useState<'ide' | 'chat' | 'agent'>('ide');
  const [activeModel, setActiveModel] = useState('Claude 3.7 Sonnet');
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ text: string; color?: string }>>([
    { text: `- bash [/home/usman/Music/Async/${DEFAULT_PROJECT_NAME}] -`, color: 'dim' },
    { text: 'usman@OptiPlex:~/aethersync$ npm run build:agent', color: 'cmd' },
    { text: '✓ Agent core runtime compiled successfully (2.1s)', color: 'success' },
    { text: 'usman@OptiPlex:~/aethersync$', color: 'prompt' }
  ]);

  // AI Assistant state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiMessages, setAiMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'I am your AetherSync AI Assistant. Ask me to refactor code, generate types, or inspect your open repository files!' }
  ]);

  const folderInputRef = useRef<HTMLInputElement>(null);

  // Handle folder opening via real file picker
  const handleOpenFolderClick = () => {
    if (folderInputRef.current) {
      folderInputRef.current.click();
    }
  };

  const handleFolderSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles: Record<string, string> = {};
    const firstRelPath = selectedFiles[0].webkitRelativePath;
    const rootName = firstRelPath ? firstRelPath.split('/')[0] : 'workspace';
    
    setProjectName(rootName);

    // Read files (limit to first 30 readable text files to avoid memory exhaustion)
    let loadedCount = 0;
    for (let i = 0; i < selectedFiles.length && loadedCount < 30; i++) {
      const file = selectedFiles[i];
      // Skip heavy binary formats
      if (file.name.match(/\.(png|jpg|jpeg|gif|mp4|zip|tar|gz|deb|exe|pdf|woff|ttf)$/i)) continue;
      
      const relPath = file.webkitRelativePath 
        ? file.webkitRelativePath.split('/').slice(1).join('/') 
        : file.name;
      
      try {
        const text = await file.text();
        newFiles[relPath || file.name] = text;
        loadedCount++;
      } catch {
        // ignore unreadable binary
      }
    }

    if (Object.keys(newFiles).length > 0) {
      setFiles(newFiles);
      const firstFile = Object.keys(newFiles)[0];
      setOpenTabs([firstFile]);
      setActiveTab(firstFile);

      setTerminalLogs(prev => [
        ...prev,
        { text: `\n[Workspace] Pinned sandbox to folder: /home/usman/Projects/${rootName}`, color: 'success' },
        { text: `[Workspace] Loaded ${Object.keys(newFiles).length} project files into Explorer.`, color: 'dim' },
        { text: `usman@OptiPlex:~/${rootName}$`, color: 'prompt' }
      ]);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setFiles(prev => ({
      ...prev,
      [activeTab]: newContent
    }));
  };

  const handleFileClick = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
    setActiveTab(path);
  };

  const handleCloseTab = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = openTabs.filter(t => t !== path);
    setOpenTabs(remaining);
    if (activeTab === path && remaining.length > 0) {
      setActiveTab(remaining[0]);
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim();
    setTerminalInput('');

    let output = '';
    if (cmd === 'ls') {
      output = Object.keys(files).join('   ');
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      return;
    } else if (cmd.startsWith('cat ')) {
      const target = cmd.slice(4).trim();
      output = files[target] || `cat: ${target}: No such file or directory`;
    } else if (cmd.includes('npm run') || cmd.includes('build')) {
      output = `✓ Built ${Object.keys(files).length} modules in 1.4s. Ready for deployment.`;
    } else if (cmd === 'git status') {
      output = `On branch main\nChanges modified: ${activeTab}\nEverything up to date with origin/main.`;
    } else {
      output = `aethersync-sh: ${cmd}: command executed successfully (exit code 0)`;
    }

    setTerminalLogs(prev => [
      ...prev,
      { text: `usman@OptiPlex:~/${projectName}$ ${cmd}`, color: 'cmd' },
      { text: output, color: 'dim' },
      { text: `usman@OptiPlex:~/${projectName}$`, color: 'prompt' }
    ]);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    const query = aiPrompt.trim();
    setAiPrompt('');

    setAiMessages(prev => [
      ...prev,
      { role: 'user', text: query },
      { 
        role: 'assistant', 
        text: `I inspected "${activeTab}". I can refactor and write the proposed code directly to your workspace!` 
      }
    ]);
  };

  const activeContent = files[activeTab] || '';
  const linesCount = Math.max(12, activeContent.split('\n').length);

  return (
    <div className="w-[1250px] h-[750px] bg-[var(--ide-bg)] rounded-xl shadow-2xl flex flex-col font-sans text-[var(--ide-text)] border border-[var(--ide-border)] overflow-hidden cursor-auto select-none transition-colors duration-200 relative">
      
      {/* Hidden input for real directory picking */}
      <input 
        ref={folderInputRef}
        type="file"
        // @ts-ignore
        webkitdirectory="true"
        directory="true"
        multiple
        onChange={handleFolderSelect}
        className="hidden"
      />

      {/* 1. Top Electron Title Bar */}
      <div className="h-10 w-full bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 select-none shrink-0">
        
        {/* Left: Brand & Nav Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
             <div className="w-5 h-5 bg-primary text-black rounded flex items-center justify-center text-xs">A</div>
             <span className="text-[var(--ide-text-bright)]">Aether Sync</span>
          </div>
          <div className="flex items-center text-xs">
            <button 
              onClick={() => setActiveNav('chat')}
              className={`flex items-center gap-1.5 px-3 py-1 transition-colors border-r border-[var(--ide-border)] ${
                activeNav === 'chat' ? 'text-primary bg-primary/10 font-bold' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
              }`}
            >
              <MessageSquare size={13} /> Chat
            </button>
            <button 
              onClick={() => setActiveNav('ide')}
              className={`flex items-center gap-1.5 px-3 py-1 transition-colors border-r border-[var(--ide-border)] ${
                activeNav === 'ide' ? 'text-primary bg-primary/10 font-bold' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
              }`}
            >
              <Layout size={13} /> IDE
            </button>
            <button 
              onClick={() => setActiveNav('agent')}
              className={`flex items-center gap-1.5 px-3 py-1 transition-colors ${
                activeNav === 'agent' ? 'text-primary bg-primary/10 font-bold' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
              }`}
            >
              <Bot size={13} /> Agent
            </button>
          </div>
        </div>
        
        {/* Center: Search Bar / Quick Open */}
        <div 
          onClick={handleOpenFolderClick}
          className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[var(--ide-sidebar)] border border-[var(--ide-border)] hover:border-primary/40 rounded-md px-3 py-1 w-96 text-xs text-[var(--ide-text-dim)] cursor-pointer shadow-sm transition-colors"
        >
          <Search size={13} className="mr-2 opacity-50 text-primary" />
          <span className="flex-1">Click to Open Folder or search files...</span>
          <span className="opacity-40 text-[10px]">Ctrl+P</span>
        </div>
        
        {/* Right: Model Picker & Window Controls */}
        <div className="flex items-center gap-4 text-xs text-[var(--ide-text-dim)] relative">
          <div 
            onClick={() => setShowModelDropdown(!showModelDropdown)}
            className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer bg-black/5 px-2 py-1 rounded"
          >
            Model: <span className="text-[var(--ide-text-bright)] font-semibold">{activeModel}</span> <ChevronDown size={12} />
          </div>

          {showModelDropdown && (
            <div className="absolute top-8 right-24 w-48 bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-xl shadow-2xl p-1 z-50 flex flex-col text-xs">
              {['Claude 3.7 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Ollama (Local)'].map(m => (
                <button 
                  key={m}
                  onClick={() => { setActiveModel(m); setShowModelDropdown(false); }}
                  className={`px-3 py-2 text-left rounded-lg transition-colors flex items-center justify-between ${
                    activeModel === m ? 'bg-primary/15 text-primary font-bold' : 'hover:bg-black/10 text-[var(--ide-text-bright)]'
                  }`}
                >
                  <span>{m}</span>
                  {activeModel === m && <Check size={12} className="text-primary" />}
                </button>
              ))}
            </div>
          )}

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

      {/* 2. Main App Body */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Far Left Sidebar (App Nav) */}
        <div className="w-56 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col shrink-0 p-3 justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 pl-1 mt-1">
              <div className="w-7 h-7 bg-primary text-black rounded-md flex items-center justify-center font-bold text-sm shadow-md shadow-primary/20">A</div>
              <div className="leading-tight">
                <div className="text-[var(--ide-text-bright)] font-bold text-sm tracking-tight">aethersync</div>
                <div className="text-[9px] text-primary font-bold tracking-widest uppercase">Desktop</div>
              </div>
            </div>

            <button 
              onClick={() => {
                const newName = `src/component-${Object.keys(files).length + 1}.tsx`;
                setFiles({ ...files, [newName]: `// New File created in AetherSync\nexport default function Component() {\n  return <div>Hello from AetherSync</div>;\n}\n` });
                setOpenTabs([...openTabs, newName]);
                setActiveTab(newName);
              }}
              className="w-full bg-primary hover:bg-[#ff8642] text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1.5 mb-4 transition-all shadow-sm active:scale-95"
            >
              <Plus size={14} /> New File / Chat
            </button>

            <div className="flex flex-col gap-1 mb-4">
              <div 
                onClick={() => setActiveNav('chat')}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors text-xs ${
                  activeNav === 'chat' ? 'bg-primary/10 text-primary font-bold border border-primary/20' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5'
                }`}
              >
                <MessageSquare size={14} /> Simple Chat
              </div>
              <div 
                onClick={() => setActiveNav('ide')}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors text-xs ${
                  activeNav === 'ide' ? 'bg-primary/10 text-primary font-bold border border-primary/20' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5'
                }`}
              >
                <Layout size={14} className="text-primary" /> IDE Workspace
              </div>
              <div 
                onClick={() => setActiveNav('agent')}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors text-xs ${
                  activeNav === 'agent' ? 'bg-primary/10 text-primary font-bold border border-primary/20' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5'
                }`}
              >
                <Code2 size={14} /> Coding Agent
              </div>
            </div>

            <div className="text-[10px] font-bold text-[var(--ide-text-dim)] uppercase tracking-widest px-2 mb-1.5">Project</div>
            <div className="px-2 py-1.5 bg-[var(--ide-bg)] rounded-lg border border-[var(--ide-border)] flex items-center gap-2 text-xs text-[var(--ide-text-bright)] font-semibold truncate">
              <Folder size={13} className="text-primary shrink-0" />
              <span className="truncate">{projectName}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t border-[var(--ide-border)] pt-2 text-xs">
            {/* Open Project Folder Button */}
            <button 
              onClick={handleOpenFolderClick}
              className="flex items-center gap-2 px-3 py-2 text-primary hover:bg-primary/10 rounded-lg cursor-pointer font-bold transition-colors w-full text-left"
            >
              <FolderOpen size={15} /> Open Project Folder
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] rounded-lg cursor-pointer">
              <Settings size={14} /> Settings
            </div>
            <div className="flex items-center justify-between px-3 py-1.5 text-[var(--ide-text-dim)]">
              <span className="flex items-center gap-1.5"><Moon size={13} /> Theme</span>
              <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded text-[var(--ide-text-bright)] font-mono">Auto</span>
            </div>
          </div>
        </div>

        {/* Explorer Sidebar */}
        <div className="w-56 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col shrink-0">
          <div className="h-9 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs font-bold text-[var(--ide-text-bright)]">
            <span className="uppercase tracking-wider text-[10px] text-[var(--ide-text-dim)]">Explorer</span>
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)]">
              <button onClick={handleOpenFolderClick} title="Open Folder">
                <FolderOpen size={13} className="hover:text-primary cursor-pointer text-primary" />
              </button>
              <button 
                onClick={() => {
                  const newName = `file-${Object.keys(files).length + 1}.ts`;
                  setFiles({ ...files, [newName]: `// ${newName}\n` });
                  setOpenTabs([...openTabs, newName]);
                  setActiveTab(newName);
                }}
                title="New File"
              >
                <Plus size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Explorer Tree */}
          <div className="p-2 flex flex-col gap-1 text-xs overflow-y-auto flex-1 no-scrollbar">
            <div className="flex items-center justify-between font-bold text-[var(--ide-text-bright)] px-1 py-1 cursor-pointer">
              <div className="flex items-center gap-1.5 truncate">
                <ChevronDown size={14} className="shrink-0" />
                <Folder size={14} className="text-primary fill-primary/20 shrink-0" />
                <span className="truncate">{projectName}</span>
              </div>
              <span className="text-[9px] text-[var(--ide-text-dim)] px-1 font-mono">
                {Object.keys(files).length} files
              </span>
            </div>
            
            <div className="pl-3 flex flex-col gap-0.5 text-[var(--ide-text)] text-[11.5px]">
              {Object.keys(files).map((filePath) => {
                const isActive = activeTab === filePath;
                return (
                  <div 
                    key={filePath}
                    onClick={() => handleFileClick(filePath)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors truncate ${
                      isActive 
                        ? 'bg-primary/15 text-primary font-semibold border border-primary/30' 
                        : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5'
                    }`}
                  >
                    <FileCode size={13} className={isActive ? 'text-primary shrink-0' : 'opacity-70 shrink-0'} />
                    <span className="truncate">{filePath}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick import helper */}
            <div 
              onClick={handleOpenFolderClick}
              className="mt-4 p-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 cursor-pointer flex flex-col items-center justify-center text-center gap-1 transition-colors"
            >
              <UploadCloud size={16} className="text-primary" />
              <span className="text-[11px] font-bold text-primary">Add Local Folder</span>
              <span className="text-[9px] text-[var(--ide-text-dim)]">Inspect & edit your real codebase</span>
            </div>
          </div>
        </div>

        {/* Center Monaco Editor & Terminal */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[var(--ide-code-bg)]">
          
          {/* Editor Tab Bar */}
          <div className="h-9 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center px-2 gap-1 shrink-0 overflow-x-auto no-scrollbar">
            {openTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-3 h-full text-xs cursor-pointer border-t-2 transition-colors ${
                    isActive 
                      ? 'bg-[var(--ide-code-bg)] border-primary font-bold text-[var(--ide-text-bright)]' 
                      : 'border-transparent text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
                  }`}
                >
                  <FileCode size={13} className={isActive ? 'text-primary' : 'opacity-70'} />
                  <span className="truncate max-w-[130px]">{tab.split('/').pop()}</span>
                  <X 
                    size={12} 
                    onClick={(e) => handleCloseTab(tab, e)}
                    className="opacity-40 hover:opacity-100 hover:text-red-400 cursor-pointer ml-1" 
                  />
                </div>
              );
            })}
          </div>

          {/* Editable Live Code Body */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* Line Numbers */}
            <div className="select-none text-[var(--ide-text-dim)] opacity-40 text-right pr-2 pl-3 py-4 border-r border-[var(--ide-border)] font-mono text-[11.5px] leading-relaxed shrink-0">
              {Array.from({ length: linesCount }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Live Editable Textarea */}
            <textarea 
              value={activeContent}
              onChange={handleCodeChange}
              spellCheck={false}
              className="flex-1 w-full h-full bg-transparent border-none outline-none resize-none p-4 font-mono text-[11.5px] leading-relaxed text-[var(--ide-text)] focus:text-[var(--ide-text-bright)] selection:bg-primary/30"
              placeholder="// Type or edit code in this file directly..."
            />
          </div>

          {/* Integrated Interactive PTY Terminal */}
          <div className="h-44 bg-[var(--ide-bg)] border-t border-[var(--ide-border)] flex flex-col shrink-0">
            <div className="h-8 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs text-[var(--ide-text-dim)] bg-[var(--ide-header)]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--ide-text-bright)] flex items-center gap-1.5">
                  <Terminal size={12} className="text-primary" /> bash ({projectName})
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              </div>
              <span className="text-[10px] text-[var(--ide-text-dim)]">Type 'ls', 'cat &lt;file&gt;', 'npm run dev', 'clear'</span>
            </div>

            {/* Terminal output log */}
            <div className="flex-1 p-3 font-mono text-[11px] text-[var(--ide-text)] overflow-y-auto no-scrollbar flex flex-col justify-end">
              {terminalLogs.slice(-8).map((log, idx) => (
                <div 
                  key={idx} 
                  className={
                    log.color === 'success' ? 'text-emerald-500 font-semibold' :
                    log.color === 'cmd' ? 'text-primary font-bold' :
                    log.color === 'dim' ? 'text-[var(--ide-text-dim)]' :
                    'text-[var(--ide-text)]'
                  }
                >
                  {log.text}
                </div>
              ))}

              {/* Terminal command line input */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 mt-1">
                <span className="text-emerald-500 font-semibold">usman@OptiPlex:~/{projectName}$</span>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command..."
                  className="flex-1 bg-transparent border-none outline-none text-[var(--ide-text-bright)] font-mono text-[11px]"
                />
              </form>
            </div>
          </div>

        </div>

        {/* Right AI Assistant Dock */}
        <div className="w-64 bg-[var(--ide-sidebar)] border-l border-[var(--ide-border)] flex flex-col justify-between p-3 shrink-0">
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--ide-border)] pb-2 text-xs shrink-0">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <Bot size={14} /> AI ASSISTANT
              </span>
              <span className="text-[10px] font-mono text-[var(--ide-text-dim)]">{activeModel.split(' ')[0]}</span>
            </div>

            {/* AI Messages list */}
            <div className="flex-1 overflow-y-auto p-1 py-3 flex flex-col gap-2.5 no-scrollbar text-xs">
              {aiMessages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`p-2.5 rounded-xl text-[11px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-black font-semibold ml-2' 
                      : 'bg-[var(--ide-bg)] border border-[var(--ide-border)] text-[var(--ide-text-bright)] mr-2'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Prompt input */}
          <form onSubmit={handleAiSubmit} className="bg-[var(--ide-bg)] border border-[var(--ide-border)] focus-within:border-primary/50 rounded-xl p-2 flex items-center gap-2 text-xs shadow-sm shrink-0">
            <input 
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Ask about open file..."
              className="flex-1 bg-transparent border-none outline-none text-[var(--ide-text-bright)] placeholder-[var(--ide-text-dim)] text-[11px]"
            />
            <button type="submit" className="p-1 rounded-lg bg-primary text-black hover:bg-[#ff8642]">
              <Send size={12} />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
