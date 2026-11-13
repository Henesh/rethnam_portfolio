import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Star } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import ProjectArt from './illustrations/ProjectArt';
import ProjectDetails from './ProjectDetails';
import { Reveal } from './ui';

const HASH_PREFIX = '#project/';

function slugFromHash() {
  const h = window.location.hash;
  return h.startsWith(HASH_PREFIX) ? decodeURIComponent(h.slice(HASH_PREFIX.length)) : null;
}

/** Shared open/close logic so other sections (e.g. Certifications) can open a case study. */
export function openProject(slug: string) {
  window.location.hash = `project/${slug}`;
}

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const openedInApp = useRef(false);

  useEffect(() => {
    const sync = () => {
      const slug = slugFromHash();
      setActiveSlug(slug && projects.some((p) => p.slug === slug) ? slug : null);
    };
    sync();
    if (slugFromHash()) document.getElementById('portfolio')?.scrollIntoView();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const open = useCallback((slug: string) => {
    openedInApp.current = true;
    openProject(slug);
  }, []);

  const close = useCallback(() => {
    if (openedInApp.current) {
      openedInApp.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, '', '#portfolio');
      setActiveSlug(null);
    }
  }, []);

  const navigate = useCallback((slug: string) => {
    // replace so "back" still closes the modal instead of stepping through projects
    window.history.replaceState(null, '', `${HASH_PREFIX}${slug}`);
    setActiveSlug(slug);
  }, []);

  const [featured, ...rest] = projects;
  const active = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">My Portfolio</p>
            <h2 id="portfolio-title" className="section-title mt-3">
              Featured <span className="text-brand">Projects</span> &amp; Case Studies
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Research, certification, business and community work that shows how I think, collaborate and apply what I've learned.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-muted">
              <span className="font-display text-[28px] font-extrabold text-ink">0{projects.length}</span> case studies
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <FeaturedCard project={featured} onOpen={open} />
        </Reveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={p} onOpen={open} />
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>{active && <ProjectDetails key="modal" project={active} onClose={close} onNavigate={navigate} />}</AnimatePresence>
    </section>
  );
}

function FeaturedCard({ project: p, onOpen }: { project: Project; onOpen: (s: string) => void }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-line bg-ink text-white shadow-[var(--shadow-lift)] lg:grid-cols-[1.1fr_1fr]">
      <button
        type="button"
        onClick={() => onOpen(p.slug)}
        className="relative flex items-center p-4 text-left sm:p-6 lg:p-8 lg:pr-0"
        aria-label={`Open case study: ${p.shortTitle}`}
        tabIndex={-1}
      >
        <span className="relative block w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <ProjectArt kind={p.art} className="block w-full transition-transform duration-700 group-hover:scale-[1.03]" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 font-display text-[12px] font-bold text-white">
            <Star size={13} fill="currentColor" aria-hidden /> Featured Research
          </span>
        </span>
      </button>
      <div className="flex flex-col p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-white/60">
          <span className="font-display font-bold text-brand">{p.number}</span>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <span>{p.type}</span>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} aria-hidden /> {p.period}
          </span>
        </div>
        <h3 className="mt-4 text-[22px] font-extrabold leading-snug !text-white sm:text-[26px]">{p.title}</h3>
        <p className="mt-2 text-[13px] font-medium text-white/50">{p.category.join(' · ')}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/75">{p.description}</p>
        <ul className="mt-5 space-y-2.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[14px] leading-relaxed text-white/80">
              <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills demonstrated">
          {p.skills.slice(0, 4).map((s) => (
            <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-[12.5px] text-white/80">
              {s}
            </li>
          ))}
          {p.skills.length > 4 && <li className="rounded-full border border-white/15 px-3 py-1 text-[12.5px] text-white/50">+{p.skills.length - 4}</li>}
        </ul>
        <div className="mt-auto pt-8">
          <button type="button" onClick={() => onOpen(p.slug)} className="btn btn-primary">
            Read the Case Study <ArrowUpRight size={16} aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: (s: string) => void }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <button type="button" tabIndex={-1} onClick={() => onOpen(p.slug)} className="relative block overflow-hidden" aria-label={`Open case study: ${p.shortTitle}`}>
        <ProjectArt kind={p.art} className="block aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.04]" />
      </button>
      <div className="flex flex-1 flex-col border-t border-line p-6">
        <div className="flex items-center justify-between text-[12.5px] text-muted">
          <span className="flex items-center gap-2">
            <span className="font-display font-bold text-brand">{p.number}</span>
            <span className="h-3 w-px bg-line" aria-hidden />
            <span className="font-semibold text-ink-2">{p.type}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} aria-hidden /> {p.period}
          </span>
        </div>
        <h3 className="mt-3 text-[18px] font-bold leading-snug">{p.shortTitle}</h3>
        <p className="mt-1 text-[12.5px] font-medium text-muted">{p.category.join(' · ')}</p>
        <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-2">
              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills demonstrated">
          {p.skills.slice(0, 2).map((s) => (
            <li key={s} className="chip !bg-surface !text-[12px]">
              {s}
            </li>
          ))}
          {p.skills.length > 2 && <li className="chip !bg-surface !text-[12px] !text-muted">+{p.skills.length - 2} more</li>}
        </ul>
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => onOpen(p.slug)}
            className="inline-flex items-center gap-2 font-display text-[14px] font-bold text-ink transition group-hover:text-brand"
          >
            View Details
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight size={16} aria-hidden />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
