import { Award, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

export default function Education() {
  const [degree, ...school] = education;
  return (
    <section id="education" aria-labelledby="education-title" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading id="education-title" eyebrow="Education" title={<>Academic <span className="text-brand">Foundation</span></>} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Featured degree */}
          <Reveal className="h-full">
            <article className="relative h-full overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-10">
              <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-[56px] bg-brand/90 rotate-12" />
              <div aria-hidden className="absolute -right-10 top-24 h-40 w-40 rounded-[40px] border border-white/10 rotate-12" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand">
                  <GraduationCap size={28} aria-hidden />
                </span>
                <p className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-semibold text-white/80">{degree.period}</p>
                <h3 className="mt-4 max-w-[30ch] text-[24px] font-extrabold !text-white sm:text-[28px]">{degree.qualification}</h3>
                <p className="mt-2 font-display text-[16px] font-semibold text-brand-soft">{degree.institution}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px] text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden /> {degree.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award size={14} aria-hidden /> {degree.result}
                  </span>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.16em] text-white/50">
                    <BookOpen size={14} aria-hidden /> Relevant academic areas
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {degree.areas.map((a) => (
                      <li key={a} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/90">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {/* School timeline */}
          <ol className="flex flex-col gap-6">
            {school.map((e, i) => (
              <Reveal as="li" key={e.qualification} delay={0.1 + i * 0.08} className="flex-1">
                <article className="card flex h-full flex-col justify-between p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
                  <div>
                    <p className="text-[13px] font-semibold text-brand">{e.period}</p>
                    <h3 className="mt-2 text-[18px] font-bold leading-snug">{e.qualification}</h3>
                    <p className="mt-1 text-[14.5px] text-muted">{e.institution}</p>
                  </div>
                  <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-surface px-3.5 py-2 font-display text-[14px] font-semibold text-ink">
                    <Award size={15} className="text-brand" aria-hidden />
                    {e.result}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
