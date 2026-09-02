'use client';

import React, { useState, useRef } from 'react';
import { 
  Search, MessageSquare, Folder, Layout, Code2, Settings, Moon, 
  Terminal, Bot, Minus, Square, X, ChevronRight, ChevronDown, 
  FileCode, Plus, FolderOpen, Send, Sparkles, UploadCloud, Check
} from 'lucide-react';

const DEFAULT_PROJECT_NAME = 'frontend';

const DEFAULT_FILES: Record<string, string> = {
  'src/App.jsx': `import React, { useState } from 'react';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/About';
import { TerminalWorkspace } from './components/Terminal';

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutSection />
      <TerminalWorkspace />
    </main>
  );
}`,
  'src/About.jsx': `import React from 'react';

export function AboutSection() {
  return (
    <section className="py-20 border-t border-border">
      <h2 className="text-3xl font-bold">About AetherSync</h2>
      <p className="text-text-secondary mt-2">
        The autonomous AI IDE engineered for local & cloud models with zero latency.
      </p>
    </section>
  );
}`,
  'src/index.css': `@import "tailwindcss";

@theme {
  --color-border: rgba(255, 255, 255, 0.1);
}

@layer base {
  :root {
    --primary: #cbd5e1;
    --secondary: #94a3b8;
    --accent: #ffffff;
    --glow: #e2e8f0;
    --bg-dark: #020202;
    --bg-card: rgba(15, 15, 15, 0.6);
    --border: rgba(255, 255, 255, 0.1);
    --text: #ffffff;
    --text-muted: #a1a1aa;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}`
};

// Syntax highlighter engine
function renderSyntaxHighlightedLine(line: string, filename: string): React.ReactNode {
  if (!line) return <span>&nbsp;</span>;

  const ext = filename.split('.').pop()?.toLowerCase() || '';
  const trimmed = line.trim();

  // Comments
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || (trimmed.startsWith('#') && ext !== 'css')) {
    return <span className="text-gray-500 italic">{line}</span>;
  }

  // CSS
  if (ext === 'css' || ext === 'scss') {
    if (trimmed.startsWith('@import') || trimmed.startsWith('@theme') || trimmed.startsWith('@layer')) {
      const parts = line.split(/(@\w+|"[^"]*"|'[^']*')/g);
      return (
        <span>
          {parts.map((p, idx) => {
            if (p.startsWith('@')) return <span key={idx} className="text-purple-400 font-bold">{p}</span>;
            if (p.startsWith('"') || p.startsWith("'")) return <span key={idx} className="text-emerald-400">{p}</span>;
            return <span key={idx} className="text-[var(--ide-text-bright)]">{p}</span>;
          })}
        </span>
      );
    }

    if (line.includes(':') && !line.includes('{') && !line.includes('(') && !trimmed.startsWith(':')) {
      const colonIdx = line.indexOf(':');
      const prop = line.slice(0, colonIdx);
      const val = line.slice(colonIdx + 1);
      return (
        <span>
          <span className="text-sky-400 font-medium">{prop}</span>
          <span className="text-gray-400">:</span>
          <span className="text-emerald-300">{val.replace(';', '')}</span>
          {val.includes(';') && <span className="text-gray-400">;</span>}
        </span>
      );
    }

    if (line.includes('{') || line.includes('::') || line.includes(':root') || line.includes('*') || line.includes('}')) {
      const parts = line.split(/([{}():,*]+)/g);
      return (
        <span>
          {parts.map((p, idx) => {
            if (['{', '}', '(', ')', ':root', '*', '::before', '::after', ','].includes(p)) {
              return <span key={idx} className="text-amber-400 font-bold">{p}</span>;
            }
            if (p.startsWith('--')) {
              return <span key={idx} className="text-sky-400">{p}</span>;
            }
            return <span key={idx} className="text-[var(--ide-text-bright)]">{p}</span>;
          })}
        </span>
      );
    }
  }

  // JS / JSX / TS / TSX
  const tokens = line.split(/(".*?"|'.*?'|`.*?`|\/\/.*|\b[a-zA-Z_$][a-zA-Z0-9_$]*\b|[{}()[\]<>=!+\-*/&|:;,])/g);
  
  return (
    <span>
      {tokens.map((token, idx) => {
        if (!token) return null;
        if (token.startsWith('//')) {
          return <span key={idx} className="text-gray-500 italic">{token}</span>;
        }
        if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
          return <span key={idx} className="text-emerald-400">{token}</span>;
        }
        if (['import', 'export', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'default'].includes(token)) {
          return <span key={idx} className="text-amber-500 font-bold">{token}</span>;
        }
        if (['React', 'useState', 'useEffect', 'Hero', 'AboutSection', 'TerminalWorkspace', 'App'].includes(token)) {
          return <span key={idx} className="text-amber-400 font-semibold">{token}</span>;
        }
        if (['className', 'min-h-screen', 'bg-background', 'text-foreground'].includes(token)) {
          return <span key={idx} className="text-emerald-300">{token}</span>;
        }
        if (['<', '>', '</', '/>'].includes(token)) {
          return <span key={idx} className="text-sky-400">{token}</span>;
        }
        if (['main', 'div', 'section', 'h2', 'p'].includes(token)) {
          return <span key={idx} className="text-sky-400 font-medium">{token}</span>;
        }
        if (['{', '}', '(', ')', '[', ']'].includes(token)) {
          return <span key={idx} className="text-amber-400">{token}</span>;
        }
        if (['=', ':', ';', ','].includes(token)) {
          return <span key={idx} className="text-cyan-400">{token}</span>;
        }
        return <span key={idx} className="text-[var(--ide-text-bright)]">{token}</span>;
      })}
    </span>
  );
}

export function LiveIDEApp() {
  const [projectName, setProjectName] = useState(DEFAULT_PROJECT_NAME);
  const [files, setFiles] = useState<Record<string, string>>(DEFAULT_FILES);
  const [openTabs, setOpenTabs] = useState<string[]>(['src/index.css', 'src/About.jsx', 'src/App.jsx']);
  const [activeTab, setActiveTab] = useState<string>('src/App.jsx');
  const [activeView, setActiveView] = useState<'ide' | 'chat' | 'agent' | 'settings'>('ide');
  const [activeModel, setActiveModel] = useState('Claude 3.7 Sonnet');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTerminal, setShowTerminal] = useState(true);

  // Settings State
  const [selectedPreset, setSelectedPreset] = useState('OpenAI');
  const [baseUrl, setBaseUrl] = useState('https://api.openai.com/v1');

  // Terminal state matching exact screenshot
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ text: string; color?: string }>>([
    { text: '- CMD [E:\\DSA\\New folder\\portfolio\\frontend] -', color: 'dim' },
    { text: 'E:\\DSA\\New folder\\portfolio\\frontend> npm run dev', color: 'cmd' },
    { text: 'VITE v6.0.3 ready in 248 ms', color: 'success' },
    { text: '-> Local:   http://localhost:5173/', color: 'success' },
    { text: '-> Network: use --host to expose', color: 'dim' }
  ]);

  // AI Assistant state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiMessages, setAiMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Hello! I am your AetherSync Autonomous Coding Agent. Ask me to refactor components, execute builds, or generate test suites.' }
  ]);

  // Coding Agent State
  const [agentActivity, setAgentActivity] = useState<string[]>([]);

  // Simple Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Hello! I am AetherSync Chat. Ask anything or discuss your codebase architecture.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const folderInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightPreRef = useRef<HTMLPreElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (highlightPreRef.current) {
      highlightPreRef.current.scrollTop = e.currentTarget.scrollTop;
      highlightPreRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  const handleOpenFolderClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
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

    let loadedCount = 0;
    for (let i = 0; i < selectedFiles.length && loadedCount < 40; i++) {
      const file = selectedFiles[i];
      if (file.name.match(/\.(png|jpg|jpeg|gif|mp4|zip|tar|gz|deb|exe|pdf|woff|ttf|ico)$/i)) continue;
      
      const relPath = file.webkitRelativePath 
        ? file.webkitRelativePath.split('/').slice(1).join('/') 
        : file.name;
      
      try {
        const text = await file.text();
        newFiles[relPath || file.name] = text;
        loadedCount++;
      } catch {
        // ignore binary
      }
    }

    if (Object.keys(newFiles).length > 0) {
      setFiles(newFiles);
      const firstFile = Object.keys(newFiles)[0];
      setOpenTabs([firstFile]);
      setActiveTab(firstFile);
      setActiveView('ide');

      setTerminalLogs(prev => [
        ...prev,
        { text: `\n[Workspace] Connected to: /home/usman/Projects/${rootName}`, color: 'success' },
        { text: `[Workspace] Loaded ${Object.keys(newFiles).length} files into Explorer tree.`, color: 'dim' },
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
    setActiveView('ide');
  };

  const handleCloseTab = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = openTabs.filter(t => t !== path);
    setOpenTabs(remaining);
    if (activeTab === path && remaining.length > 0) {
      setActiveTab(remaining[0]);
    }
  };

  const handleCreateNewFile = () => {
    const fileName = prompt('Enter new file path (e.g. src/Hero.jsx):', `src/Component-${Object.keys(files).length + 1}.jsx`);
    if (!fileName) return;

    const trimmed = fileName.trim();
    setFiles(prev => ({
      ...prev,
      [trimmed]: `import React from 'react';\n\nexport function Component() {\n  return <div>New Component</div>;\n}\n`
    }));
    setOpenTabs(prev => [...prev, trimmed]);
    setActiveTab(trimmed);
    setActiveView('ide');
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
    } else if (cmd.includes('npm run') || cmd.includes('build') || cmd.includes('dev')) {
      output = `VITE v6.0.3 ready in 210 ms\n-> Local: http://localhost:5173/`;
    } else if (cmd === 'git status') {
      output = `On branch main\nChanges modified: ${activeTab}\nEverything up to date with origin/main.`;
    } else {
      output = `cmd: ${cmd}: command executed successfully (exit code 0)`;
    }

    setTerminalLogs(prev => [
      ...prev,
      { text: `E:\\DSA\\New folder\\portfolio\\${projectName}> ${cmd}`, color: 'cmd' },
      { text: output, color: 'dim' }
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
        text: `I inspected "${activeTab}" with ${activeModel}. I can refactor and write the proposed code directly to your workspace!` 
      }
    ]);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const q = chatInput.trim();
    setChatInput('');

    setChatMessages(prev => [
      ...prev,
      { role: 'user', text: q },
      { role: 'assistant', text: `Understood! In ${projectName}, we can easily structure this.` }
    ]);
  };

  const handleAgentRun = (promptText: string) => {
    setAgentActivity(prev => [
      ...prev,
      `[Task started]: "${promptText}"`,
      `[Agent]: Inspecting ${Object.keys(files).length} workspace files...`,
      `[Agent]: Verification complete: 0 errors.`
    ]);
  };

  const activeContent = files[activeTab] || '';
  const linesArray = activeContent.split('\n');
  const linesCount = Math.max(14, linesArray.length);

  const filteredFiles = Object.keys(files).filter(f => 
    f.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* 1. Top Window Bar matching screenshot */}
      <div className="h-10 w-full bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center justify-between px-3 select-none shrink-0 z-20">
        
        {/* Left: Brand & Navigation */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-[var(--ide-border)]">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-black font-bold text-[11px]">
              A
            </div>
            <span className="font-semibold text-[var(--ide-text-bright)] tracking-tight text-[12px]">AetherSync</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <button 
              onClick={() => setActiveView('chat')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                activeView === 'chat' ? 'bg-primary/10 text-primary font-bold border border-primary/20' : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
              }`}
            >
              Chat
            </button>
            <button 
              onClick={() => setActiveView('ide')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                activeView === 'ide' ? 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]' : 'text-[var(--ide-text-dim)]'
              }`}
            >
              IDE
            </button>
            <button 
              onClick={() => setActiveView('agent')}
              className="px-2.5 py-1 rounded bg-primary/20 text-primary font-bold flex items-center gap-1 border border-primary/30"
            >
              Agent
            </button>
            <span className="text-[var(--ide-text-dim)] opacity-40 mx-1">/</span>
            <span className="text-[var(--ide-text-dim)] flex items-center gap-1 cursor-pointer" onClick={handleOpenFolderClick}>
              {projectName}
            </span>
          </div>
        </div>
        
        {/* Center: Search Bar */}
        <div 
          onClick={() => setShowSearchModal(true)}
          className="flex items-center bg-[var(--ide-sidebar)] border border-[var(--ide-border)] hover:border-primary/50 rounded-md px-3 py-1 w-80 text-xs text-[var(--ide-text-dim)] cursor-pointer shadow-sm transition-colors"
        >
          <Search size={12} className="mr-2 opacity-50 text-primary" />
          <span className="flex-1 text-[11px]">Search files, symbols & commands...</span>
          <span className="opacity-40 text-[10px]">Ctrl+P</span>
        </div>
        
        {/* Right: Model Dropdown & macOS Traffic Lights */}
        <div className="flex items-center gap-3 text-xs text-[var(--ide-text-dim)] relative">
          <div 
            onClick={() => setShowModelDropdown(!showModelDropdown)}
            className="flex items-center gap-1.5 hover:text-[var(--ide-text-bright)] cursor-pointer bg-black/5 hover:bg-black/10 px-2.5 py-1 rounded border border-[var(--ide-border)] transition-colors text-[11px]"
          >
            <span className="text-[var(--ide-text-bright)] font-semibold">{activeModel}</span>
            <ChevronDown size={12} className="text-primary" />
          </div>

          {showModelDropdown && (
            <div className="absolute top-9 right-24 w-48 bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-xl shadow-2xl p-1.5 z-50 flex flex-col text-xs">
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

          {/* Quick upload / open folder button */}
          <button 
            onClick={handleOpenFolderClick}
            title="Open local folder on your computer"
            className="p-1 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
          >
            <FolderOpen size={13} />
          </button>

          {/* macOS Traffic Lights */}
          <div className="flex items-center gap-2 pl-2 border-l border-[var(--ide-border)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] cursor-pointer" onClick={() => { setFiles(DEFAULT_FILES); setProjectName(DEFAULT_PROJECT_NAME); }} title="Reset" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] cursor-pointer" onClick={() => setShowTerminal(false)} title="Minimize" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] cursor-pointer" onClick={() => setShowTerminal(true)} title="Expand" />
          </div>
        </div>
      </div>

      {/* 2. Main App Body */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Explorer Sidebar */}
        <div className="w-56 bg-[var(--ide-sidebar)] border-r border-[var(--ide-border)] flex flex-col shrink-0">
          <div className="h-9 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs font-bold text-[var(--ide-text-bright)]">
            <span className="uppercase tracking-wider text-[10px] text-[var(--ide-text-dim)]">Explorer: {projectName.toUpperCase()}</span>
            <div className="flex items-center gap-2 text-[var(--ide-text-dim)]">
              <button onClick={handleOpenFolderClick} title="Open Folder">
                <FolderOpen size={13} className="hover:text-primary cursor-pointer text-primary" />
              </button>
              <button onClick={handleCreateNewFile} title="Create New File">
                <Plus size={13} className="hover:text-[var(--ide-text-bright)] cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="p-2 flex flex-col gap-1 text-xs overflow-y-auto flex-1 no-scrollbar">
            {/* Root folder tree */}
            <div className="flex items-center gap-1.5 font-bold text-[var(--ide-text-bright)] px-1 py-1 cursor-pointer">
              <ChevronDown size={13} className="shrink-0 text-primary" />
              <Folder size={13} className="text-primary fill-primary/20 shrink-0" />
              <span className="truncate">{projectName}</span>
            </div>
            
            <div className="pl-3 flex flex-col gap-1 text-[11.5px]">
              <div className="flex items-center gap-1.5 px-2 py-0.5 text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] cursor-pointer">
                <ChevronRight size={11} /> <Folder size={12} className="text-amber-500/80" /> public
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 text-[var(--ide-text-bright)] font-semibold cursor-pointer">
                <ChevronDown size={11} className="text-primary" /> <Folder size={12} className="text-primary" /> src
              </div>

              {/* Sub-files */}
              <div className="pl-4 flex flex-col gap-0.5">
                {Object.keys(files).map((filePath) => {
                  const isActive = activeTab === filePath;
                  const displayShort = filePath.replace(/^src\//, '');
                  return (
                    <div 
                      key={filePath}
                      onClick={() => handleFileClick(filePath)}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors truncate ${
                        isActive 
                          ? 'bg-primary/20 text-primary font-semibold border border-primary/30' 
                          : 'text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)] hover:bg-black/5'
                      }`}
                    >
                      <FileCode size={12} className={isActive ? 'text-primary shrink-0' : 'opacity-70 shrink-0'} />
                      <span className="truncate">{displayShort}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div 
              onClick={handleOpenFolderClick}
              className="mt-4 p-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 cursor-pointer flex flex-col items-center justify-center text-center gap-1 transition-colors"
            >
              <UploadCloud size={16} className="text-primary" />
              <span className="text-[11px] font-bold text-primary">Open Folder</span>
              <span className="text-[9px] text-[var(--ide-text-dim)]">Select project directory</span>
            </div>
          </div>

          <div className="p-2 border-t border-[var(--ide-border)] flex items-center justify-between text-[10px] text-[var(--ide-text-dim)]">
            <span className="flex items-center gap-1 text-emerald-400 font-mono">● Git: main</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Center Code Editor & Terminal */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[var(--ide-code-bg)]">
          
          {/* Editor Tabs matching screenshot */}
          <div className="h-9 bg-[var(--ide-header)] border-b border-[var(--ide-border)] flex items-center px-2 gap-1 shrink-0 overflow-x-auto no-scrollbar">
            {openTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-3 h-full text-xs cursor-pointer border-b-2 transition-colors ${
                    isActive 
                      ? 'bg-[var(--ide-code-bg)] border-primary font-bold text-[var(--ide-text-bright)]' 
                      : 'border-transparent text-[var(--ide-text-dim)] hover:text-[var(--ide-text-bright)]'
                  }`}
                >
                  <FileCode size={12} className={isActive ? 'text-primary' : 'opacity-60'} />
                  <span className="truncate max-w-[130px]">{tab.split('/').pop()}</span>
                  <X 
                    size={11} 
                    onClick={(e) => handleCloseTab(tab, e)}
                    className="opacity-40 hover:opacity-100 hover:text-red-400 cursor-pointer ml-1" 
                  />
                </div>
              );
            })}
          </div>

          {/* Live Syntax Highlighted & Editable Code Canvas */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* Line Numbers */}
            <div className="select-none text-[var(--ide-text-dim)] opacity-40 text-right pr-3 pl-3 py-4 border-r border-[var(--ide-border)] font-mono text-[11.5px] leading-relaxed shrink-0">
              {Array.from({ length: linesCount }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code Body Container */}
            <div className="flex-1 h-full relative overflow-hidden">
              <pre 
                ref={highlightPreRef}
                aria-hidden="true"
                className="absolute inset-0 p-4 font-mono text-[11.5px] leading-relaxed overflow-hidden pointer-events-none select-none m-0 whitespace-pre"
              >
                {linesArray.map((line, idx) => (
                  <div key={idx}>
                    {renderSyntaxHighlightedLine(line, activeTab)}
                  </div>
                ))}
              </pre>

              <textarea 
                ref={textareaRef}
                value={activeContent}
                onChange={handleCodeChange}
                onScroll={handleScroll}
                spellCheck={false}
                className="absolute inset-0 w-full h-full p-4 font-mono text-[11.5px] leading-relaxed text-transparent caret-[var(--ide-text-bright)] bg-transparent resize-none outline-none border-none whitespace-pre overflow-auto focus:outline-none selection:bg-primary/30 z-10"
                placeholder="// Type or edit code directly in this file..."
              />
            </div>
          </div>

          {/* Terminal matching exact CMD / PowerShell screenshot */}
          {showTerminal && (
            <div className="h-44 bg-[var(--ide-bg)] border-t border-[var(--ide-border)] flex flex-col shrink-0">
              <div className="h-7 px-3 border-b border-[var(--ide-border)] flex items-center justify-between text-xs text-[var(--ide-text-dim)] bg-[var(--ide-header)]">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-semibold text-primary flex items-center gap-1">
                    <Terminal size={12} /> CMD ({projectName})
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                </div>
                <span className="text-[10px] text-[var(--ide-text-dim)]">PowerShell / CMD Active</span>
              </div>

              <div className="flex-1 p-3 font-mono text-[11px] text-[var(--ide-text)] overflow-y-auto no-scrollbar flex flex-col justify-end">
                {terminalLogs.slice(-6).map((log, idx) => (
                  <div 
                    key={idx} 
                    className={
                      log.color === 'success' ? 'text-emerald-400 font-semibold' :
                      log.color === 'cmd' ? 'text-primary font-bold' :
                      log.color === 'dim' ? 'text-[var(--ide-text-dim)]' :
                      'text-[var(--ide-text)]'
                    }
                  >
                    {log.text}
                  </div>
                ))}

                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 mt-1">
                  <span className="text-primary font-bold">$</span>
                  <input 
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type command (e.g. npm run dev, git status)..."
                    className="flex-1 bg-transparent border-none outline-none text-[var(--ide-text-bright)] font-mono text-[11px] placeholder:text-gray-500"
                  />
                </form>
              </div>
            </div>
          )}

        </div>

        {/* Right AI Assistant Dock matching screenshot */}
        <div className="w-64 bg-[var(--ide-sidebar)] border-l border-[var(--ide-border)] flex flex-col justify-between p-3 shrink-0">
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Header with ACTIVE badge */}
            <div className="flex items-center justify-between border-b border-[var(--ide-border)] pb-2 text-xs shrink-0">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <Bot size={13} /> AI ASSISTANT
              </span>
              <span className="text-[9px] font-bold bg-primary/20 text-primary px-1.5 py-0.5 rounded tracking-widest uppercase">
                ACTIVE
              </span>
            </div>

            {/* Agent Message Card */}
            <div className="mt-3 p-3 rounded-xl bg-[var(--ide-bg)] border border-[var(--ide-border)] flex flex-col gap-1.5 shadow-sm">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                AETHERSYNC AGENT
              </span>
              <p className="text-[11px] text-[var(--ide-text-dim)] leading-relaxed">
                Hello! I am your AetherSync Autonomous Coding Agent. Ask me to refactor components, execute builds, or generate test suites.
              </p>
            </div>

            {/* Messages list */}
            <div className="flex-1 overflow-y-auto p-1 py-3 flex flex-col gap-2 no-scrollbar text-xs">
              {aiMessages.slice(1).map((msg, i) => (
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

          <form onSubmit={handleAiSubmit} className="bg-[var(--ide-bg)] border border-[var(--ide-border)] focus-within:border-primary/50 rounded-xl p-2 flex items-center gap-2 text-xs shadow-sm shrink-0">
            <input 
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Ask about this file or agent task..."
              className="flex-1 bg-transparent border-none outline-none text-[var(--ide-text-bright)] placeholder-[var(--ide-text-dim)] text-[11px]"
            />
            <button type="submit" className="p-1 rounded-lg text-primary hover:bg-primary/10">
              <Sparkles size={13} />
            </button>
          </form>
        </div>

      </div>

      {/* Quick Search Modal */}
      {showSearchModal && (
        <div 
          onClick={() => setShowSearchModal(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[var(--ide-sidebar)] border border-[var(--ide-border)] rounded-2xl shadow-2xl p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-[var(--ide-border)]">
              <Search size={16} className="text-primary" />
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type file name to open..."
                className="flex-1 bg-transparent border-none outline-none text-xs text-[var(--ide-text-bright)]"
              />
              <button onClick={() => setShowSearchModal(false)} className="text-[var(--ide-text-dim)] hover:text-white">
                <X size={15} />
              </button>
            </div>

            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto no-scrollbar">
              {filteredFiles.map(filePath => (
                <div 
                  key={filePath}
                  onClick={() => {
                    handleFileClick(filePath);
                    setShowSearchModal(false);
                    setSearchQuery('');
                  }}
                  className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary text-xs cursor-pointer flex items-center justify-between text-[var(--ide-text-bright)]"
                >
                  <span className="truncate">{filePath}</span>
                  <span className="text-[10px] text-[var(--ide-text-dim)]">Open File</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
