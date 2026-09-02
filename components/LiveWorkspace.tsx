'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LiveIDEApp } from '@/components/ui/LiveIDEApp';

export function LiveWorkspace() {
  return (
    <Section id="live-workspace" className="border-b border-border overflow-hidden" container={false}>
      <div className="mx-auto w-full max-w-shell px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive desktop simulator"
          title="Experience the AetherSync workspace live."
          description="This is the real interface, running in the page. Browse the file tree, open local folders, switch views, run terminal commands, and prompt the AI assistant."
        />
      </div>
      
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 mt-14 relative flex items-center justify-center">
        {/* Darker Orange Container Box */}
        <div className="w-full relative py-10 px-4 md:px-8 bg-[#ff6c1a]/15 rounded-[2.5rem] border border-[#ff6c1a]/30 shadow-2xl flex items-center justify-center overflow-x-auto">
          {/* Background Atmosphere inside the box */}
          <div className="cine-field w-full h-full opacity-40 absolute inset-0 pointer-events-none" />
          
          {/* Inner App Window */}
          <div className="rounded-xl shadow-2xl z-10 relative pointer-events-auto">
            <LiveIDEApp />
          </div>
        </div>
      </div>
    </Section>
  );
}
