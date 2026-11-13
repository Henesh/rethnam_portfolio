import { Award, GraduationCap, Medal, Star, Trophy, type LucideIcon } from 'lucide-react';
import { achievements } from '../data/portfolio';
import Certifications from './Certifications';
import { Reveal, SectionHeading } from './ui';

const icons: Record<string, LucideIcon> = { trophy: Trophy, star: Star, graduation: GraduationCap, medal: Medal };

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="bg-surface py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          id="achievements-title"
          eyebrow="Achievements & Recognition"
          title={
            <>
              Awards &amp; <span className="text-brand">Certification</span>
            </>
          }
          description="Recognition earned through competition, academic commitment and active participation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {achievements.map((a, i) => {
              const Icon = icons[a.icon] ?? Award;
              const hl = 'highlight' in a && a.highlight;
              return (
                <Reveal as="li" key={a.title} delay={i * 0.06} className="h-full">
                  <article
                    className={`group relative flex h-full flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                      hl ? 'border-brand/25 bg-white ring-1 ring-brand/10' : 'border-line bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl transition ${
                          hl ? 'bg-brand text-white' : 'bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white'
                        }`}
                      >
                        <Icon size={22} aria-hidden />
                      </span>
                      {hl && <span className="rounded-full bg-ink px-2.5 py-1 font-display text-[11px] font-bold text-white">1st Place</span>}
                    </div>
                    <h3 className="mt-5 text-[16.5px] font-bold leading-snug">{a.title}</h3>
                    <p className="mt-1 font-display text-[13px] font-semibold text-brand">{a.org}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{a.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
          <Reveal delay={0.15} className="h-full">
            <Certifications />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
