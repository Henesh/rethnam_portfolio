import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Download } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: 'div' | 'li';
}) {
  const reduce = useReducedMotion();
  const Comp = as === 'li' ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}) {
  const center = align === 'center';
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title mt-3">
        {title}
      </h2>
      {description && <p className="mt-4 text-[16px] leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}

export function ResumeButton({ variant = 'outline', label = 'Download Resume', className = '' }: { variant?: 'primary' | 'outline' | 'ghost-light'; label?: string; className?: string }) {
  return (
    <a href={profile.resume} download={profile.resumeFileName} className={`btn btn-${variant} ${className}`} aria-label={`${label} (PDF)`}>
      {label}
      <Download size={16} aria-hidden />
    </a>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-[17px] font-extrabold tracking-tight ${light ? 'bg-white text-ink' : 'bg-ink text-white'}`}
        aria-hidden
      >
        K<span className="text-brand">R</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-bold ${light ? 'text-white' : 'text-ink'}`}>Kanaga Rethnam</span>
        <span className={`block text-[12px] ${light ? 'text-white/60' : 'text-muted'}`}>FinTech Graduate</span>
      </span>
    </span>
  );
}
