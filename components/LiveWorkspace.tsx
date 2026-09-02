'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LiveIDEApp } from '@/components/ui/LiveIDEApp';

export function LiveWorkspace() {
  const constraintsRef = useRef(null);

  return (
    <Section id="live-workspace" className="border-b border-border overflow-hidden" container={false}>
      <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive desktop simulator"
          title="Experience the AetherSync workspace live."
          description="This is the real interface, running in the page. Browse the file tree, switch tabs, run terminal commands and prompt the agent."
        />
      </div>
      
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 mt-14 relative flex items-center justify-center">
        {/* Darker Orange Box */}
        <div 
          ref={constraintsRef}
          className="w-full relative h-[950px] bg-[#ff6c1a]/25 rounded-[2.5rem] border border-[#ff6c1a]/40 shadow-2xl flex items-center justify-center overflow-hidden"
        >
          {/* Background Atmosphere inside the box */}
          <div className="cine-field w-full h-full opacity-50" />
          <div className="cine-field w-full h-full top-1/2 left-1/4 scale-150 opacity-50" data-tone="cool" />
          
          {/* Inner App Window (Draggable) */}
          <motion.div 
            drag 
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            className="rounded-xl shadow-lift z-10 overflow-hidden relative cursor-grab active:cursor-grabbing pointer-events-auto"
          >
            <LiveIDEApp />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
