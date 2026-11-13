import { ArrowRight, BarChart3, Landmark, Microscope, ShieldAlert, Workflow } from 'lucide-react';
import { about, profile } from '../data/portfolio';
import { Reveal } from './ui';

const interestIcons = [Landmark, BarChart3, ShieldAlert, Workflow];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Photo composition */}
        <Reveal className="relative mx-auto w-full max-w-[460px]">
          <div aria-hidden className="absolute -right-4 top-10 bottom-6 w-[70%] rounded-[48px_120px_48px_48px] bg-brand sm:-right-8" />
          <div aria-hidden className="dot-grid absolute -left-3 -top-5 h-24 w-28 opacity-30" />
          <div className="relative overflow-hidden rounded-[40px_40px_40px_110px] bg-[#3a3b3e] shadow-[0_40px_80px_-35px_rgba(23,23,23,0.6)]">
            <picture>
              <source srcSet={profile.aboutPhoto.webp} type="image/webp" />
              <img
                src={profile.aboutPhoto.jpg}
                alt="Kanaga Rethnam, head-and-shoulders portrait"
                width={800}
                height={839}
                loading="lazy"
                className="aspect-[5/5.4] w-full object-cover object-top"
              />
            </picture>
          </div>

          <div className="card absolute -bottom-6 left-4 flex max-w-[260px] items-center gap-3 px-4 py-3.5 sm:-left-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
              <Microscope size={20} aria-hidden />
            </span>
            <span className="leading-snug">
              <span className="block font-display text-[14px] font-bold">Final Year Research</span>
              <span className="block text-[12px] text-muted">Cybersecurity &amp; trust in banking</span>
            </span>
          </div>

          <p aria-hidden className="absolute -top-8 right-2 rotate-[-8deg] font-script text-[26px] text-ink sm:-left-6 sm:right-auto">
            Analytical thinker
            <svg className="ml-10 mt-0.5" width="44" height="26" viewBox="0 0 44 26">
              <path d="M2 2 C 10 18, 26 22, 40 18" stroke="#E51B32" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M33 13 L 40 18 L 33 22" stroke="#E51B32" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">About Me</p>
            <h2 id="about-title" className="section-title mt-3">
              Building My Career at the Intersection of <span className="text-brand">Finance &amp; Technology</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 space-y-4 text-[15.5px] leading-[1.8] text-muted">
            <p className="text-[17px] font-medium text-ink-2">{about.paragraphs[0]}</p>
            {about.paragraphs.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12} className="mt-8">
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-ink">Professional interests</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.interests.map((it, i) => {
                const Icon = interestIcons[i];
                return (
                  <li key={it} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-brand/30">
                    <Icon size={20} className="text-brand" aria-hidden />
                    <span className="font-display text-[13.5px] font-semibold leading-snug text-ink">{it}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 flex flex-col gap-6 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <dl className="flex flex-wrap gap-x-8 gap-y-3">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[12px] uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="font-display text-[15px] font-bold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className="btn btn-primary shrink-0">
              Let's Connect <ArrowRight size={16} aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
