'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Terminal, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Closing conversion band matching the vibrant, rounded Kiro style. */
export function CtaBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  
  // Track scroll position of this container specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'] // starts animating when top of container enters bottom of screen
  });

  // Slide the logo up from 250px below to 0 as user scrolls
  const logoY = useTransform(scrollYProgress, [0.3, 1], [300, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText('curl -fsSL https://aethersync.dev/install | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 py-8 md:px-8 md:py-16 w-full">
      <div 
        ref={containerRef}
        className="relative overflow-hidden bg-primary rounded-[3rem] pt-24 pb-56 w-full max-w-[1400px] mx-auto shadow-[0_0_80px_rgba(255,108,26,0.2)]"
      >
        
        {/* Glow Effects inside the vibrant container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/20 blur-[120px] rounded-full mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center px-5">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Build something<br />real in minutes
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12">
            Get started for free
          </p>

          {/* Action Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto">
            
            {/* CLI Snippet Left */}
            <div className="flex items-center bg-[#111111] text-gray-300 rounded-2xl p-1.5 shadow-2xl h-16 w-full md:w-auto ring-1 ring-white/10 hover:ring-white/20 transition-all">
              <div className="px-5 text-xs font-semibold tracking-wider flex items-center gap-2 border-r border-white/10 h-full text-white">
                <Terminal size={14} /> Install CLI
              </div>
              <div className="px-5 font-mono text-[12px] text-gray-400">
                <span className="text-primary">curl</span> -fsSL https://... | bash
              </div>
              <button 
                onClick={handleCopy} 
                className="p-3 hover:bg-white/10 rounded-xl transition-colors mr-1"
                aria-label="Copy install command"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Main Button */}
            <Link 
              href="/download" 
              className="flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-100 font-bold px-8 h-16 rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95 w-full md:w-auto shrink-0 text-sm tracking-wide"
            >
              <Download size={18} /> Download IDE
            </Link>

          </div>
        </div>

        {/* The Animated "A" Logo Character */}
        <motion.div 
          style={{ y: logoY }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-0"
        >
          <div className="w-56 h-64 bg-white rounded-t-[4rem] shadow-2xl flex items-start pt-10 justify-center relative">
             <span className="text-[10rem] font-black text-primary leading-none tracking-tighter drop-shadow-sm">A</span>
             
             {/* Decorative 'eyes' to mimic a mascot, if desired, or just pure branding */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-t-[4rem] shadow-[inset_0_10px_20px_rgba(0,0,0,0.05)] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
