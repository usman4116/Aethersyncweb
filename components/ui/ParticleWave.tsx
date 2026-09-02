'use client';

import { useEffect, useRef } from 'react';

export function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: { x: number; y: number; baseX: number; baseY: number; size: number; phase: number; speed: number }[] = [];
    const spacing = 12; // grid spacing (decreased for more particles)
    const rows = Math.floor(height / spacing);
    const cols = Math.floor(width / spacing);

    // Create particle grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Only spawn particles in a wave-like band to match the screenshot
        const x = i * spacing;
        const y = j * spacing;
        
        // create a shape band (y = sin(x))
        const bandCenter = height / 2 + Math.sin(x * 0.005) * 200;
        const distance = Math.abs(y - bandCenter);
        
        // Increased distance and spawn probability for many more particles
        if (distance < 350 && Math.random() > 0.15) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 0.5,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.01
          });
        }
      }
    }

    let time = 0;
    let animationFrameId: number;

    const render = () => {
      time += 0.01;
      
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Move them slightly based on sine waves
        const waveX = Math.sin(p.phase + time * 1.5) * 15;
        const waveY = Math.cos(p.phase + time) * 15;
        
        // Calculate distance to a moving point to create a highlight effect
        const highlightX = width / 2 + Math.sin(time) * 400;
        const highlightY = height / 2 + Math.cos(time * 0.8) * 200;
        
        const dx = (p.baseX + waveX) - highlightX;
        const dy = (p.baseY + waveY) - highlightY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Draw particle (square like in TRAE)
        const alpha = Math.max(0.15, 1 - dist / 800); // fade out much slower and keep a higher base alpha
        
        // Some particles randomly get the orange accent color
        if (p.phase < 0.5) {
          ctx.fillStyle = `rgba(255, 108, 26, ${alpha * 0.8})`; // AetherSync Orange
        } else {
          ctx.fillStyle = `rgba(150, 150, 150, ${alpha * 0.4})`; // Greyish
        }
        
        ctx.fillRect(p.baseX + waveX, p.baseY + waveY, p.size, p.size);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
