import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { certification } from '../data/portfolio';
import { openProject } from './Projects';

export default function Certifications() {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-8" aria-labelledby="cert-title">
      <div aria-hidden className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full border-[28px] border-brand/80" />
      <div aria-hidden className="absolute -bottom-6 right-16 h-16 w-16 rounded-full bg-white/5" />

      <p className="relative font-display text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Certification</p>

      {/* badge */}
      <div className="relative mt-6 flex items-center gap-4">
        <div className="relative grid h-20 w-20 shrink-0 place-items-center">
          <svg viewBox="0 0 80 80" className="absolute inset-0" aria-hidden>
            <path
              d="M40 2 l8 6 l10 -1 l4 9 l9 4 l-1 10 l6 8 l-6 8 l1 10 l-9 4 l-4 9 l-10 -1 l-8 6 l-8 -6 l-10 1 l-4 -9 l-9 -4 l1 -10 l-6 -8 l6 -8 l-1 -10 l9 -4 l4 -9 l10 1 Z"
              fill="#E51B32"
            />
            <circle cx="40" cy="40" r="25" fill="none" stroke="#fff" strokeOpacity="0.45" strokeDasharray="2 3" />
          </svg>
          <BadgeCheck size={30} className="relative text-white" aria-hidden />
        </div>
        <div>
          <p className="font-display text-[13px] font-semibold text-white/60">{certification.issuer}</p>
          <p className="text-[13px] text-white/45">{certification.date}</p>
        </div>
      </div>

      <h3 id="cert-title" className="relative mt-6 text-[20px] font-extrabold leading-snug !text-white">
        {certification.title}
      </h3>
      <p className="relative mt-3 text-[14.5px] leading-relaxed text-white/70">{certification.description}</p>

      <button
        type="button"
        onClick={() => openProject(certification.projectSlug)}
        className="relative mt-auto inline-flex w-fit items-center gap-2 pt-8 font-display text-[14px] font-bold text-white transition hover:text-brand"
      >
        View certification details <ArrowUpRight size={16} aria-hidden />
      </button>
    </article>
  );
}
