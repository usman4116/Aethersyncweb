'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    id: '00',
    title: 'Autonomous Multi-file Agent',
    description: 'AetherSync pairs you with an autonomous coding agent capable of multi-file refactors, new file scaffolding, and syntax repair across large repositories, staged as a real-time diff you approve before anything is written.',
    image: '/shots/aethersync_agent.jpg'
  },
  {
    id: '01',
    title: '100% Local-First Privacy',
    description: 'Your codebase, terminal sessions and workspace state never leave your computer. AetherSync runs entirely on your local machine with absolute privacy. We collect zero telemetry on your proprietary source code.',
    image: '/shots/aethersync_privacy.jpg'
  },
  {
    id: '02',
    title: 'Universal AI Providers',
    description: 'Instantly switch between industry-leading models like Claude 3.7 Sonnet, GPT-4o, DeepSeek R1, or run a completely offline open-source model via Ollama. No markup, no proxies, no vendor lock-in.',
    image: '/shots/aethersync_providers.jpg'
  }
];

export function FeaturesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0c0c0c] border-b border-border">
      
      {/* Sticky container that stays in view during scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Left side fixed content with frosted glass card */}
        <div className="w-[35%] pl-8 md:pl-20 shrink-0 z-10">
          <div className="p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl inline-block max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.2]">
              What You'll Unlock <br />
              with <span className="text-primary">AetherSync</span>
            </h2>
          </div>
        </div>

        {/* Right side scrolling content */}
        <motion.div 
          style={{ x }} 
          className="flex gap-8 pl-12 pr-[40vw] items-center"
        >
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="w-[580px] shrink-0 flex flex-col gap-6 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-primary/40 transition-colors"
            >
              
              {/* Card Header */}
              <div>
                <span className="font-mono text-primary font-bold text-lg mb-2 block">
                  [{feature.id}]
                </span>
                <h3 className="text-2xl font-semibold text-foreground mb-3 leading-snug">
                  {feature.title}
                </h3>
              </div>

              {/* Image Box */}
              <div className="w-full aspect-video bg-[#111111] rounded-2xl border border-white/10 overflow-hidden p-2">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
