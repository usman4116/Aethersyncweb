'use client';

import { useState } from 'react';
import {
  Bot,
  ChevronDown,
  ChevronRight,
  CornerDownLeft,
  FileCode,
  Folder,
  Search,
  Sparkles,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

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
      '          <span className="text-primary font-mono text-sm tracking-wider uppercase">',
      '            // Engineering Philosophy',
      '          </span>',
      '          <h2 className="text-3xl font-bold mt-2 text-foreground">',
      '            Local-First Precision AI Engineering',
      '          </h2>',
      '          <p className="mt-4 text-text-secondary leading-relaxed">',
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
      '    <main className="min-h-screen bg-background text-foreground">',
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
    <Section id="live-preview" className="border-b border-border">
      <SectionHeader
        eyebrow="Interactive desktop simulator"
        title="Experience the AetherSync workspace live."
        description="This is the real interface, running in the page. Browse the file tree, switch tabs, run terminal commands and prompt the agent."
      />

      {/* Interactive desktop frame */}
      <div className="relative mt-14 overflow-hidden rounded-xl border border-border bg-background shadow-panel">
        {/* Antigravity Custom TitleBar */}
        <div className="flex h-10 w-full items-center justify-between border-b border-border bg-background px-3.5 text-xs select-none">
          {/* Left: Brand + Breadcrumbs */}
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center font-bold text-foreground text-micro shadow-sm">
              A
            </div>
            <span className="font-bold text-foreground tracking-tight hidden sm:inline">
              Aether<span className="text-primary">Sync</span>
            </span>

            <div className="h-3.5 w-[1px] bg-border-strong mx-1 hidden sm:block" />

            {/* Mode Pills */}
            <div className="flex items-center gap-1 bg-surface-elevated p-0.5 rounded-lg border border-border">
              <button
                onClick={() => setActiveMode('chat')}
                className={`px-2 py-0.5 rounded text-micro font-medium transition-all ${
                  activeMode === 'chat' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-foreground'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveMode('ide')}
                className={`px-2 py-0.5 rounded text-micro font-medium transition-all ${
                  activeMode === 'ide' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-foreground'
                }`}
              >
                IDE
              </button>
              <button
                onClick={() => setActiveMode('code')}
                className={`px-2 py-0.5 rounded text-micro font-medium transition-all ${
                  activeMode === 'code' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-foreground'
                }`}
              >
                Agent
              </button>
            </div>

            <span className="text-muted hidden md:inline">/</span>
            <span className="text-text-secondary font-medium text-micro hidden md:inline">frontend</span>
          </div>

          {/* Center: Command Palette Pill */}
          <div className="hidden lg:flex items-center justify-between w-72 rounded-full border border-border bg-surface-elevated px-3 py-1 text-micro text-text-secondary shadow-inner">
            <div className="flex items-center gap-1.5 truncate">
              <Search size={11} className="text-muted" />
              <span className="truncate">Search files, symbols & commands...</span>
            </div>
            <kbd className="rounded bg-background px-1 py-0.2 font-mono text-[0.5625rem] text-muted border border-border">
              Ctrl+P
            </kbd>
          </div>

          {/* Right: Model selector & Window buttons */}
          <div className="flex items-center gap-2">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-surface-elevated border border-border text-primary text-micro font-medium rounded-lg px-2 py-0.5 outline-none cursor-pointer"
            >
              <option>Claude 3.7 Sonnet</option>
              <option>GPT-4o (OpenAI)</option>
              <option>DeepSeek R1</option>
              <option>Ollama (Local)</option>
            </select>

            <button
              onClick={() => setCopilotOpen(!copilotOpen)}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                copilotOpen ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-foreground'
              }`}
              title="Toggle AI Copilot Drawer"
            >
              <Bot size={13} />
            </button>

            {/* Window control dots */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-surface-hover hover:bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-surface-hover hover:bg-muted" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/80 hover:bg-primary" />
            </div>
          </div>
        </div>

        {/* IDE Workspace Body */}
        <div className="flex h-[520px] w-full overflow-hidden text-xs">
          {/* Left Project Explorer Tree */}
          <div className="w-48 sm:w-56 shrink-0 border-r border-border bg-surface p-2 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[0.625rem] font-bold text-muted uppercase tracking-wider">
                <span>Explorer: FRONTEND</span>
              </div>

              {/* Tree */}
              <div className="mt-1 space-y-0.5">
                <div className="flex items-center gap-1 px-2 py-1 text-text-secondary font-semibold text-label">
                  <ChevronDown size={12} className="text-muted" />
                  <Folder size={13} className="text-primary" />
                  <span>frontend</span>
                </div>

                <div className="pl-4 space-y-0.5">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-text-secondary text-micro">
                    <ChevronRight size={11} className="text-muted" />
                    <Folder size={12} className="text-muted" />
                    <span>public</span>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-1 text-text-secondary font-medium text-label">
                    <ChevronDown size={12} className="text-muted" />
                    <Folder size={12} className="text-primary/90" />
                    <span>src</span>
                  </div>

                  <div className="pl-4 space-y-0.5">
                    {/* File items */}
                    {(['index.css', 'About.jsx', 'App.jsx'] as const).map((file) => (
                      <button
                        key={file}
                        onClick={() => setActiveFile(file)}
                        className={`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-label transition-colors ${
                          activeFile === file
                            ? 'bg-surface-elevated text-primary font-semibold'
                            : 'text-text-secondary hover:bg-surface-hover hover:text-foreground'
                        }`}
                      >
                        <FileCode size={12} className={activeFile === file ? 'text-primary' : 'text-muted'} />
                        <span className="truncate">{file}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="px-2 py-2 border-t border-border text-[0.625rem] text-muted flex items-center justify-between">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success" /> Git: main
              </span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Center: Editor + Bottom Terminal */}
          <div className="flex flex-1 flex-col min-w-0 bg-surface">
            {/* Editor Tabs Bar */}
            <div className="flex h-9 items-center border-b border-border bg-surface px-2 gap-1 overflow-x-auto">
              {(['index.css', 'About.jsx', 'App.jsx'] as const).map((file) => (
                <button
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2 rounded-t px-3 py-1.5 text-label border-b-2 transition-all ${
                    activeFile === file
                      ? 'border-primary bg-surface text-foreground font-semibold'
                      : 'border-transparent text-text-secondary hover:text-foreground'
                  }`}
                >
                  <FileCode size={11} className={activeFile === file ? 'text-primary' : 'text-muted'} />
                  <span>{file}</span>
                </button>
              ))}
            </div>

            {/* Monaco-style Code Viewer */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-label leading-relaxed text-text-secondary selection:bg-primary/30">
              {filesData[activeFile].lines.map((line, idx) => (
                <div key={idx} className="flex gap-4 rounded px-1 hover:bg-surface-hover/60">
                  <span className="w-6 shrink-0 text-right text-muted select-none text-micro">{idx + 1}</span>
                  <span
                    className={
                      line.startsWith('/*') || line.startsWith('//') || line.startsWith('   ') || line.endsWith('*/')
                        ? 'text-muted italic'
                        : line.startsWith('@') || line.startsWith('import') || line.startsWith('export')
                        ? 'text-primary font-medium'
                        : line.includes('function') || line.includes('return')
                        ? 'text-primary'
                        : line.includes('<') || line.includes('>')
                        ? 'text-accent'
                        : 'text-foreground'
                    }
                  >
                    {line || ' '}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Integrated Terminal */}
            <div className="h-40 border-t border-border bg-background flex flex-col">
              <div className="flex h-7 items-center justify-between border-b border-border bg-surface px-3 text-[0.625rem] text-text-secondary font-mono">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={11} className="text-primary" />
                  <span className="text-foreground font-semibold">CMD (frontend)</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span>PowerShell / CMD Active</span>
                </div>
              </div>

              {/* Terminal Output */}
              <div className="flex-1 overflow-y-auto p-2.5 font-mono text-micro text-text-secondary space-y-1">
                {terminalLines.map((l, i) => (
                  <div key={i} className={l.startsWith('$') ? 'text-primary font-semibold' : 'text-text-secondary'}>
                    {l}
                  </div>
                ))}

                {/* Command Input Prompt */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 pt-1">
                  <span className="text-primary font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type command (e.g. npm run dev, git status)..."
                    className="flex-1 bg-transparent text-foreground outline-none font-mono text-micro"
                  />
                  <button type="submit" className="text-muted hover:text-primary">
                    <CornerDownLeft size={11} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right: AI Copilot Drawer */}
          {copilotOpen && (
            <div className="w-64 sm:w-72 shrink-0 border-l border-border bg-surface-elevated flex flex-col justify-between">
              {/* Copilot Header */}
              <div className="flex h-9 items-center justify-between border-b border-border bg-surface px-3">
                <div className="flex items-center gap-1.5 font-bold text-micro text-primary">
                  <Bot size={13} />
                  <span>AI ASSISTANT</span>
                </div>
                <span className="rounded bg-primary/20 text-primary text-[0.5625rem] px-1.5 py-0.5 font-mono">
                  ACTIVE
                </span>
              </div>

              {/* Chat Feed */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {copilotMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-2.5 text-micro leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary/15 border border-primary/30 text-foreground ml-3'
                        : 'bg-surface-elevated border border-border text-text-secondary mr-1'
                    }`}
                  >
                    <div className="font-semibold text-[0.625rem] text-muted mb-1 uppercase tracking-wider">
                      {msg.role === 'user' ? 'Developer' : 'AetherSync Agent'}
                    </div>
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Copilot Prompt Input */}
              <form onSubmit={handleCopilotSubmit} className="p-2.5 border-t border-border bg-surface">
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-elevated px-2.5 py-1.5">
                  <input
                    type="text"
                    value={copilotInput}
                    onChange={(e) => setCopilotInput(e.target.value)}
                    placeholder="Ask about this file or agent task..."
                    className="flex-1 bg-transparent text-foreground outline-none text-micro"
                  />
                  <button type="submit" className="text-primary hover:text-primary/80">
                    <Sparkles size={13} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
