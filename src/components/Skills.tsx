import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Check, Landmark, NotebookTabs, ShieldCheck, type LucideIcon } from 'lucide-react';
import { skillGroups, languages, type SkillIcon } from '../data/portfolio';
import { Reveal } from './ui';

const icons: Record<SkillIcon, LucideIcon> = {
  chart: BarChart3,
  ledger: NotebookTabs,
  bank: Landmark,
  shield: ShieldCheck,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">My Expertise</p>
            <h2 id="skills-title" className="section-title mt-3">
              Skills That Connect <span className="text-brand">Finance, Data</span> &amp; Technology
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-muted">
              Combining financial knowledge, analytical thinking, and digital tools to understand business operations and support better financial decisions.
            </p>
            <a href="#portfolio" className="btn btn-outline mt-5 !min-h-[42px] !border-brand/40 !text-brand hover:!bg-brand-soft">
              See skills in action <ArrowRight size={16} aria-hidden />
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal as="li" key={g.title} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="card group relative flex h-full flex-col overflow-hidden p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition-colors duration-300 group-hover:bg-brand">
                      <Icon size={22} aria-hidden />
                    </span>
                    <span className="font-display text-[13px] font-bold text-ink/15">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold">{g.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{g.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {g.items.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[14px] font-medium text-ink-2">
                        <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                          <Check size={11} strokeWidth={3} aria-hidden />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.1} className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[16px] font-bold">Languages</h3>
            <p className="text-[13.5px] text-muted">Comfortable communicating across Malaysia's multilingual workplace.</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Languages spoken">
            {languages.map((l) => (
              <li key={l} className="rounded-full border border-ink/10 bg-white px-4 py-2 font-display text-[13.5px] font-semibold text-ink">
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
