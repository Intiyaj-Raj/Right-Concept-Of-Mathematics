'use client';

import { motion } from 'framer-motion';

/* Animated aurora blob background */
export function AuroraBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="aurora-blob bg-primary"
        style={{ width: 400, height: 400, top: '5%', left: '5%' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob bg-secondary"
        style={{ width: 350, height: 350, top: '40%', right: '5%' }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob bg-accent"
        style={{ width: 300, height: 300, bottom: '5%', left: '30%' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* Floating math symbols */
const symbols = ['\u03c0', '\u222b', '\u2211', '\u221a', '\u221e', '\u03b8', '\u0394', '\u2202', '\u2248', '\u00d7'];

export function FloatingMathSymbols({ count = 8 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const sym = symbols[i % symbols.length];
        const left = (i * 13 + 8) % 95;
        const top = (i * 17 + 10) % 85;
        const size = 1 + (i % 3) * 0.6;
        const duration = 8 + (i % 4) * 3;
        return (
          <motion.span
            key={i}
            className="absolute font-display font-bold text-primary/15 dark:text-primary/20 select-none"
            style={{ left: `${left}%`, top: `${top}%`, fontSize: `${size}rem` }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          >
            {sym}
          </motion.span>
        );
      })}
    </div>
  );
}

/* SVG wave divider */
export function WaveDivider({ flip = false, className = '', color = 'hsl(var(--background))' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ transform: flip ? 'rotate(180deg)' : '' }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[60px]"
      >
        <path
          fill={color}
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

/* Gradient blob (decorative) */
export function GradientBlob({ className = '', from = 'bg-primary', to = 'bg-secondary' }) {
  return (
    <div className={`absolute -z-10 rounded-full blur-3xl opacity-30 ${className} ${from}`} />
  );
}

/* Animated marquee row */
export function Marquee({ items = [], speed = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-max animate-marquee gap-12"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-lg font-semibold tracking-wide text-muted-foreground/70 whitespace-nowrap font-display"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
