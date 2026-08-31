'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Folder,
  FileCode,
  Terminal as TerminalIcon,
  Sparkles,
  Bot,
  Play,
  Check,
  Search,
  Layers,
  Code2,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  Sun,
  Moon,
  Copy,
  CheckCircle2,
  Globe,
  CornerDownLeft,
} from 'lucide-react';

const filesData: Record<string, { name: string; lang: string; lines: string[] }> = {
  'index.css': {
    name: 'index.css',
    lang: 'css',
    lines: [
      '@tailwind base;',
      '@tailwind components;',
      '@tailwind utilities;',
      '',
      '/* ===================================================',
      '   GLOBAL RESETS & AETHERSYNC BASE STYLES',
      '   =================================================== */',
      '',
      '*, ::before, ::after {',
      '  box-sizing: border-box;',
      '  margin: 0;',
      '  padding: 0;',
      '}',
      '',
      'html, body {',
      '  width: 100%;',
      '  min-height: 100vh;',
      '  overflow-x: hidden;',
      '  background: #0a0a0a;',
      '  color: #f5f5f0;',
      "  font-family: 'Inter', sans-serif;",
      '  -webkit-font-smoothing: antialiased;',
      '  -moz-osx-font-smoothing: grayscale;',
      '}',
      '',
      '#root {',
      '  display: flex;',
      '  flex-direction: column;',
      '}',
    ],
  },
  'About.jsx': {
    name: 'About.jsx',
    lang: 'javascript',
    lines: [
      "import React from 'react';",
      "import { motion } from 'framer-motion';",
      "import { Code2, Sparkles, Terminal } from 'lucide-react';",
      '',
      'export function AboutSection() {',
      '  return (',
      '    <section className="relative py-24 px-6 max-w-6xl mx-auto">',
      '      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">',
      '        <div>',
      '          <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">',
      '            // Engineering Philosophy',
      '          </span>',
      '          <h2 className="text-3xl font-bold mt-2 text-white">',
      '            Local-First Precision AI Engineering',
      '          </h2>',
      '          <p className="mt-4 text-slate-400 leading-relaxed">',
      '            AetherSync Desktop pairs with autonomous agent routines that analyze,',
      '            refactor, and verify codebases with sub-second responsiveness.',
      '          </p>',
      '        </div>',
      '      </div>',
      '    </section>',
      '  );',
      '}',
    ],
  },
  'App.jsx': {
    name: 'App.jsx',
    lang: 'javascript',
    lines: [
      "import React, { useState } from 'react';",
      "import { Hero } from './sections/Hero';",
      "import { AboutSection } from './sections/About';",
      "import { TerminalWorkspace } from './components/Terminal';",
      '',
      'export default function App() {',
      '  return (',
      '    <main className="min-h-screen bg-[#070709] text-white">',
      '      <Hero />',
      '      <AboutSection />',
      '      <TerminalWorkspace />',
      '    </main>',
      '  );',
      '}',
    ],
  },
};

export function LivePreview() {
  const [activeFile, setActiveFile] = useState<'index.css' | 'About.jsx' | 'App.jsx'>('index.css');
  const [activeMode, setActiveMode] = useState<'ide' | 'chat' | 'code'>('ide');
  const [selectedModel, setSelectedModel] = useState('Claude 3.7 Sonnet');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '- CMD [E:\\DSA\\New folder\\portfolio\\frontend] -',
    'E:\\DSA\\New folder\\portfolio\\frontend> npm run dev',
    '  VITE v6.0.3  ready in 240 ms',
    '',
    '  ➜  Local:   http://localhost:5173/',
    '  ➜  Network: use --host to expose',
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [copilotOpen, setCopilotOpen] = useState(true);
  const [copilotInput, setCopilotInput] = useState('');
  const [copilotMessages, setCopilotMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am your AetherSync Autonomous Coding Agent. Ask me to refactor components, execute builds, or generate test suites.',
    },
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd = terminalInput.trim();
    let response = '';

    if (cmd === 'npm run dev') {
      response = '  ➜  Local: http://localhost:5173/ [Server Running]';
    } else if (cmd === 'git status') {
      response = 'On branch main\nChanges to be committed: modified src/sections/About.jsx';
    } else if (cmd === 'cls' || cmd === 'clear') {
      setTerminalLines([]);
      setTerminalInput('');
      return;
    } else {
      response = `[AetherSync Terminal]: Executed "${cmd}" successfully (exit code 0)`;
    }

    setTerminalLines((prev) => [...prev, `$ ${cmd}`, response]);
    setTerminalInput('');
  };

  const handleCopilotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!copilotInput.trim()) return;
    const q = copilotInput.trim();
    setCopilotMessages((prev) => [
      ...prev,
      { role: 'user', text: q },
      {
        role: 'assistant',
        text: `I inspected your workspace (${activeFile}) and resolved your request. Applied intelligent changes and synced with local PTY session.`,
      },
    ]);
    setCopilotInput('');
  };

  return (
    <section id="live-preview" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold mb-3">
          <Sparkles size={12} />
          <span>Interactive Desktop Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Experience the <span className="neon-gradient-text">AetherSync Workspace</span> Live
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Click around to explore the file tree, change tabs, run terminal commands, and prompt the AI Agent.
        </p>
      </div>

      {/* Main Interactive Desktop Mockup Frame */}
      <div className="relative rounded-2xl border border-white/[0.12] bg-[#070709] shadow-2xl shadow-orange-950/20 overflow-hidden backdrop-blur-2xl">
        {/* Antigravity Custom TitleBar */}
        <div className="flex h-10 w-full items-center justify-between border-b border-white/[0.08] bg-[#070709] px-3.5 text-xs select-none">
          {/* Left: Brand + Breadcrumbs */}
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white text-[11px] shadow-sm">
              A
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:inline">
              Aether<span className="text-orange-500">Sync</span>
            </span>

            <div className="h-3.5 w-[1px] bg-slate-800 mx-1 hidden sm:block" />

            {/* Mode Pills */}
            <div className="flex items-center gap-1 bg-[#111116] p-0.5 rounded-lg border border-white/[0.06]">
              <button
                onClick={() => setActiveMode('chat')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  activeMode === 'chat' ? 'bg-orange-500/20 text-orange-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveMode('ide')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  activeMode === 'ide' ? 'bg-orange-500/20 text-orange-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                IDE
              </button>
              <button
                onClick={() => setActiveMode('code')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  activeMode === 'code' ? 'bg-orange-500/20 text-orange-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Agent
              </button>
            </div>

            <span className="text-slate-600 hidden md:inline">/</span>
            <span className="text-slate-300 font-medium text-[11px] hidden md:inline">frontend</span>
          </div>

          {/* Center: Command Palette Pill */}
          <div className="hidden lg:flex items-center justify-between w-72 rounded-full border border-white/[0.08] bg-[#111116] px-3 py-1 text-[11px] text-slate-400 shadow-inner">
            <div className="flex items-center gap-1.5 truncate">
              <Search size={11} className="text-slate-500" />
              <span className="truncate">Search files, symbols & commands...</span>
            </div>
            <kbd className="rounded bg-black/40 px-1 py-0.2 font-mono text-[9px] text-slate-500 border border-white/[0.06]">
              Ctrl+P
            </kbd>
          </div>

          {/* Right: Model selector & Window buttons */}
          <div className="flex items-center gap-2">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-[#121217] border border-white/[0.08] text-orange-400 text-[11px] font-medium rounded-lg px-2 py-0.5 outline-none cursor-pointer"
            >
              <option>Claude 3.7 Sonnet</option>
              <option>GPT-4o (OpenAI)</option>
              <option>DeepSeek R1</option>
              <option>Ollama (Local)</option>
            </select>

            <button
              onClick={() => setCopilotOpen(!copilotOpen)}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                copilotOpen ? 'bg-orange-500/20 text-orange-400' : 'text-slate-400 hover:text-white'
              }`}
              title="Toggle AI Copilot Drawer"
            >
              <Bot size={13} />
            </button>

            {/* Window control dots */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500/80 hover:bg-orange-500" />
            </div>
          </div>
        </div>

        {/* IDE Workspace Body */}
        <div className="flex h-[520px] w-full overflow-hidden text-xs">
          {/* Left Project Explorer Tree */}
          <div className="w-48 sm:w-56 shrink-0 border-r border-white/[0.06] bg-[#09090c] p-2 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                <span>Explorer: FRONTEND</span>
              </div>

              {/* Tree */}
              <div className="mt-1 space-y-0.5">
                <div className="flex items-center gap-1 px-2 py-1 text-slate-300 font-semibold text-[11.5px]">
                  <ChevronDown size={12} className="text-slate-500" />
                  <Folder size={13} className="text-orange-400" />
                  <span>frontend</span>
                </div>

                <div className="pl-4 space-y-0.5">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-slate-400 text-[11px]">
                    <ChevronRight size={11} className="text-slate-600" />
                    <Folder size={12} className="text-slate-500" />
                    <span>public</span>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-1 text-slate-300 font-medium text-[11.5px]">
                    <ChevronDown size={12} className="text-slate-500" />
                    <Folder size={12} className="text-orange-400/90" />
                    <span>src</span>
                  </div>

                  <div className="pl-4 space-y-0.5">
                    {/* File items */}
                    {(['index.css', 'About.jsx', 'App.jsx'] as const).map((file) => (
                      <button
                        key={file}
                        onClick={() => setActiveFile(file)}
                        className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-[11.5px] transition-colors ${
                          activeFile === file
                            ? 'bg-[#181820] text-orange-400 font-semibold'
                            : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
                        }`}
                      >
                        <FileCode size={12} className={activeFile === file ? 'text-orange-400' : 'text-slate-500'} />
                        <span className="truncate">{file}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="px-2 py-2 border-t border-white/[0.05] text-[10px] text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Git: main
              </span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Center: Editor + Bottom Terminal */}
          <div className="flex flex-1 flex-col min-w-0 bg-[#0c0c10]">
            {/* Editor Tabs Bar */}
            <div className="flex h-9 items-center border-b border-white/[0.06] bg-[#09090d] px-2 gap-1 overflow-x-auto">
              {(['index.css', 'About.jsx', 'App.jsx'] as const).map((file) => (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2 rounded-t px-3 py-1.5 text-[11.5px] border-b-2 transition-all ${
                    activeFile === file
                      ? 'border-orange-500 bg-[#0c0c10] text-slate-100 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode size={11} className={activeFile === file ? 'text-orange-400' : 'text-slate-500'} />
                  <span>{file}</span>
                </button>
              ))}
            </div>

            {/* Monaco-style Code Viewer */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-[11.5px] leading-relaxed text-slate-300 selection:bg-orange-500/30">
              {filesData[activeFile].lines.map((line, idx) => (
                <div key={idx} className="flex gap-4 hover:bg-white/[0.02] px-1 rounded">
                  <span className="w-6 shrink-0 text-right text-slate-600 select-none text-[11px]">{idx + 1}</span>
                  <span
                    className={
                      line.startsWith('/*') || line.startsWith('//') || line.startsWith('   ') || line.endsWith('*/')
                        ? 'text-slate-500 italic'
                        : line.startsWith('@') || line.startsWith('import') || line.startsWith('export')
                        ? 'text-orange-400 font-medium'
                        : line.includes('function') || line.includes('return')
                        ? 'text-purple-400'
                        : line.includes('<') || line.includes('>')
                        ? 'text-sky-300'
                        : 'text-slate-200'
                    }
                  >
                    {line || ' '}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Integrated Terminal */}
            <div className="h-40 border-t border-white/[0.08] bg-[#070709] flex flex-col">
              <div className="flex h-7 items-center justify-between border-b border-white/[0.06] bg-[#09090d] px-3 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={11} className="text-orange-400" />
                  <span className="text-slate-200 font-semibold">CMD (frontend)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span>PowerShell / CMD Active</span>
                </div>
              </div>

              {/* Terminal Output */}
              <div className="flex-1 overflow-y-auto p-2.5 font-mono text-[11px] text-slate-300 space-y-1">
                {terminalLines.map((l, i) => (
                  <div key={i} className={l.startsWith('$') ? 'text-orange-400 font-semibold' : 'text-slate-300'}>
                    {l}
                  </div>
                ))}

                {/* Command Input Prompt */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 pt-1">
                  <span className="text-orange-400 font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type command (e.g. npm run dev, git status)..."
                    className="flex-1 bg-transparent text-slate-200 outline-none font-mono text-[11px]"
                  />
                  <button type="submit" className="text-slate-500 hover:text-orange-400">
                    <CornerDownLeft size={11} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right: AI Copilot Drawer */}
          {copilotOpen && (
            <div className="w-64 sm:w-72 shrink-0 border-l border-white/[0.06] bg-[#08080c] flex flex-col justify-between">
              {/* Copilot Header */}
              <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#09090d] px-3">
                <div className="flex items-center gap-1.5 font-bold text-[11px] text-orange-400">
                  <Bot size={13} />
                  <span>AI ASSISTANT</span>
                </div>
                <span className="rounded bg-orange-500/20 text-orange-400 text-[9px] px-1.5 py-0.5 font-mono">
                  ACTIVE
                </span>
              </div>

              {/* Chat Feed */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {copilotMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-2.5 text-[11px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-orange-500/15 border border-orange-500/30 text-orange-200 ml-3'
                        : 'bg-[#121218] border border-white/[0.06] text-slate-300 mr-1'
                    }`}
                  >
                    <div className="font-semibold text-[10px] text-slate-500 mb-1 uppercase tracking-wider">
                      {msg.role === 'user' ? 'Developer' : 'AetherSync Agent'}
                    </div>
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Copilot Prompt Input */}
              <form onSubmit={handleCopilotSubmit} className="p-2.5 border-t border-white/[0.06] bg-[#09090d]">
                <div className="flex items-center gap-1.5 rounded-xl bg-[#131319] border border-white/[0.08] px-2.5 py-1.5">
                  <input
                    type="text"
                    value={copilotInput}
                    onChange={(e) => setCopilotInput(e.target.value)}
                    placeholder="Ask about this file or agent task..."
                    className="flex-1 bg-transparent text-slate-200 outline-none text-[11px]"
                  />
                  <button type="submit" className="text-orange-400 hover:text-orange-300">
                    <Sparkles size={13} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
