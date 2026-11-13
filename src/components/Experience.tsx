import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal } from './ui';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">My Experience</p>
            <h2 id="experience-title" className="section-title mt-3">
              Professional <span className="text-brand">Experience</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Practical exposure across accounting administration, events and retail — building accuracy, responsibility and people skills that transfer directly into
              financial services.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 hidden rounded-2xl bg-ink p-6 text-white lg:block">
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-brand">Transferable strengths</p>
            <ul className="mt-4 space-y-3 text-[14.5px] text-white/80">
              {['Accurate record & cash handling', 'Accounting software exposure', 'Customer-facing communication', 'Teamwork under live operations'].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ol className="relative space-y-6 border-l-2 border-line pl-7 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.08} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[38px] top-7 grid h-5 w-5 place-items-center rounded-full border-4 border-white sm:-left-[51px] ${
                  i === 0 ? 'bg-brand ring-4 ring-brand/15' : 'bg-ink'
                }`}
              />
              <article className="card group p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand sm:grid">
                      <Briefcase size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[19px] font-bold">{job.role}</h3>
                      <p className="mt-0.5 font-display text-[15px] font-semibold text-brand">{job.company}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} aria-hidden /> {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden /> {job.location}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{job.summary}</p>
                {job.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills used">
                  {job.tags.map((t) => (
                    <li key={t} className="chip !bg-surface">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
