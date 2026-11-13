import { useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, Calendar, Check, PencilLine, Tag, X } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import ProjectArt from './illustrations/ProjectArt';

export default function ProjectDetails({
  project: p,
  onClose,
  onNavigate,
}: {
  project: Project;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  // lock scroll, focus, restore focus on unmount
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [p.slug]);

  // Escape to close + simple focus trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[94vh] w-full max-w-[980px] flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-7">
          <p className="font-display text-[12.5px] font-bold uppercase tracking-[0.16em] text-muted">
            Case Study <span className="text-brand">{p.number}</span> / 0{projects.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition hover:border-brand hover:text-brand"
          >
            <X size={18} />
          </button>
        </div>

        <div ref={scrollRef} className="overflow-y-auto overscroll-contain">
          <div className="relative overflow-hidden bg-ink">
            <ProjectArt kind={p.art} className="mx-auto block w-full max-w-[720px]" />
          </div>

          <div className="px-5 pb-10 pt-8 sm:px-10">
            <ul className="flex flex-wrap gap-2" aria-label="Categories">
              {p.category.map((c) => (
                <li key={c} className="rounded-full bg-brand-soft px-3 py-1 font-display text-[12px] font-bold text-brand">
                  {c}
                </li>
              ))}
            </ul>
            <h2 id="project-dialog-title" className="mt-4 text-[24px] font-extrabold leading-tight sm:text-[32px]">
              {p.title}
            </h2>

            <dl className="mt-6 grid gap-4 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-3">
              <Meta icon={<Calendar size={16} />} label="Period" value={p.period} />
              <Meta icon={<Tag size={16} />} label="Type" value={p.type} />
              <Meta icon={<Building2 size={16} />} label={p.organisation ? 'Organisation' : 'Focus'} value={p.organisation ?? p.category[0]} />
            </dl>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
              <div className="space-y-9">
                <p className="text-[17px] leading-relaxed text-ink-2">{p.description}</p>
                {p.sections.map((s) => (
                  <section key={s.heading} aria-label={s.heading}>
                    <h3 className="flex items-center gap-3 text-[19px] font-bold">
                      <span className="h-5 w-1 rounded-full bg-brand" aria-hidden />
                      {s.heading}
                    </h3>
                    {s.placeholder ? (
                      <div className="mt-4 flex gap-3 rounded-2xl border-2 border-dashed border-ink/15 bg-surface p-5 text-[14.5px] text-muted">
                        <PencilLine size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                        <p>
                          <span className="mb-1 block font-display text-[12px] font-bold uppercase tracking-[0.14em] text-ink">Placeholder</span>
                          {s.body}
                        </p>
                      </div>
                    ) : (
                      <>
                        {s.body && <p className="mt-3 text-[15.5px] leading-[1.8] text-muted">{s.body}</p>}
                        {s.list && (
                          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                            {s.list.map((li) => (
                              <li key={li} className="flex items-start gap-3 rounded-xl border border-line px-4 py-3 text-[14.5px] text-ink-2">
                                <Check size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                                {li}
                              </li>
                            ))}
                          </ul>
                        )}
                        {s.numbered && (
                          <ol className="mt-4 space-y-3">
                            {s.numbered.map((n, i) => (
                              <li key={n.title} className="flex gap-4 rounded-2xl border border-line p-5">
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink font-display text-[14px] font-bold text-white">{i + 1}</span>
                                <div>
                                  <h4 className="text-[16px] font-bold">{n.title}</h4>
                                  <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{n.body}</p>
                                  {n.list && (
                                    <ul className="mt-2 space-y-1">
                                      {n.list.map((x) => (
                                        <li key={x} className="flex items-center gap-2 text-[14px] text-ink-2">
                                          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                                          {x}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ol>
                        )}
                      </>
                    )}
                  </section>
                ))}
              </div>

              <aside className="lg:sticky lg:top-6 lg:self-start">
                <div className="rounded-2xl bg-ink p-6 text-white">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] !text-white/60">Skills demonstrated</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <li key={s} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-white/90">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-2xl border border-line p-6">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-muted">Key contributions</h3>
                  <ul className="mt-3 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-2">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            {/* prev / next */}
            <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Other case studies">
              <button
                type="button"
                onClick={() => onNavigate(prev.slug)}
                className="group flex items-center gap-3 rounded-2xl border border-line p-4 text-left transition hover:border-brand/40"
              >
                <ArrowLeft size={18} className="shrink-0 text-muted transition group-hover:-translate-x-1 group-hover:text-brand" aria-hidden />
                <span>
                  <span className="block text-[12px] uppercase tracking-wider text-muted">Previous</span>
                  <span className="block font-display text-[14.5px] font-semibold">{prev.shortTitle}</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate(next.slug)}
                className="group flex items-center justify-end gap-3 rounded-2xl border border-line p-4 text-right transition hover:border-brand/40"
              >
                <span>
                  <span className="block text-[12px] uppercase tracking-wider text-muted">Next</span>
                  <span className="block font-display text-[14.5px] font-semibold">{next.shortTitle}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand" aria-hidden />
              </button>
            </nav>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Meta({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm" aria-hidden>
        {icon}
      </span>
      <div>
        <dt className="text-[12px] uppercase tracking-wider text-muted">{label}</dt>
        <dd className="font-display text-[14.5px] font-semibold text-ink">{value}</dd>
      </div>
    </div>
  );
}
