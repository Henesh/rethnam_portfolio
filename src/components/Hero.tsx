import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, GraduationCap, Mail, ShieldCheck } from 'lucide-react';
import { profile } from '../data/portfolio';
import { LinkedInIcon, ResumeButton } from './ui';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-surface to-white pt-[72px]">
      {/* soft background geometry */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rotate-12 rounded-[120px] bg-ink/[0.025]" />
      <div aria-hidden className="dot-grid pointer-events-none absolute left-[46%] top-[18%] hidden h-24 w-24 opacity-20 lg:block" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-12">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.p {...fade(0.05)} className="font-display text-[13px] font-bold uppercase tracking-[0.28em] text-ink-2">
            Hello, I'm
          </motion.p>

          <motion.h1 {...fade(0.12)} id="hero-title" className="mt-4 text-[46px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[76px]">
            {profile.firstName} <span className="text-brand">{profile.lastName}</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-4 font-display text-[22px] font-medium text-ink-2 sm:text-[28px]">
            {profile.title}
          </motion.p>

          <motion.ul {...fade(0.26)} className="mt-5 flex flex-wrap gap-2" aria-label="Areas of focus">
            {profile.positioning.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[12.5px] font-medium text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.32)} className="mt-6 max-w-[540px] space-y-3 text-[15.5px] leading-[1.75] text-muted">
            {profile.heroIntro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="btn btn-primary">
              Explore My Work <ArrowRight size={16} aria-hidden />
            </a>
            <ResumeButton variant="outline" />
          </motion.div>

          <motion.div {...fade(0.48)} className="mt-8 flex items-center gap-3">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Connect</span>
            <span className="h-px w-8 bg-line" aria-hidden />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink-2 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink-2 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 mx-auto w-full max-w-[400px] sm:max-w-[440px] lg:order-2 lg:max-w-[480px]">
          <motion.div
            aria-hidden
            initial={reduce ? false : { opacity: 0, rotate: 0, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 8, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="absolute left-[18%] right-[-4%] top-[4%] bottom-[10%] rounded-[44px] bg-brand"
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative ml-[2%] mr-[8%] overflow-hidden rounded-[36px] bg-[#3a3b3e] shadow-[0_40px_80px_-30px_rgba(23,23,23,0.55)]"
          >
            <picture>
              <source srcSet={profile.portrait.webp} type="image/webp" />
              <img
                src={profile.portrait.jpg}
                alt="Portrait of Kanaga Rethnam wearing a black suit and striped tie"
                width={1000}
                height={947}
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
                fetchPriority="high"
              />
            </picture>
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
          </motion.div>

          {/* floating credential cards */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="card absolute -left-2 bottom-[14%] flex items-center gap-3 px-4 py-3 sm:-left-8"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand">
              <GraduationCap size={20} aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[14px] font-bold">UTAR Graduate</span>
              <span className="block text-[12px] text-muted">B.Fin (FinTech) Hons</span>
            </span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="card absolute right-0 top-[10%] hidden items-center gap-2.5 px-4 py-2.5 sm:flex"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-display text-[13px] font-semibold">Open to opportunities</span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease }}
            className="card absolute -bottom-4 right-[4%] flex items-center gap-2.5 px-4 py-2.5"
          >
            <ShieldCheck size={18} className="text-brand" aria-hidden />
            <span className="font-display text-[13px] font-semibold">Finance · Data · Risk</span>
          </motion.div>
        </div>
      </div>

      {/* decorative tagline + scroll cue */}
      <div aria-hidden className="pointer-events-none absolute right-6 top-[120px] hidden -rotate-6 text-right font-script text-[30px] leading-[0.95] text-ink xl:block 2xl:right-16">
        Finance meets
        <br />
        Technology
        <svg className="ml-auto mt-1 block" width="120" height="12" viewBox="0 0 120 12">
          <path d="M2 9 C 30 2, 70 2, 118 6" stroke="#E51B32" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <a
        href="#skills"
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted hover:text-brand xl:flex 2xl:right-16"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
