import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { LinkedInIcon, Reveal, ResumeButton } from './ui';

export default function Contact() {
  const items = [
    { icon: <Mail size={18} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18} />, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: <MapPin size={18} />, label: 'Location', value: profile.location },
    { icon: <LinkedInIcon size={17} />, label: 'LinkedIn', value: 'kanaga-rethnam', href: profile.linkedin, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            {/* red decorative shapes */}
            <div aria-hidden className="absolute -left-24 -top-28 h-48 w-48 rotate-[25deg] rounded-[52px] bg-brand" />
            <div aria-hidden className="absolute -left-12 top-24 h-20 w-20 rotate-[25deg] rounded-[24px] border-2 border-brand/50" />
            <div aria-hidden className="absolute -bottom-36 -right-24 h-64 w-64 rotate-[20deg] rounded-[64px] bg-brand" />
            <div aria-hidden className="absolute -bottom-10 right-44 h-28 w-28 rotate-[20deg] rounded-[30px] bg-white/[0.04]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="lg:pl-10">
                <p className="font-display text-[12.5px] font-bold uppercase tracking-[0.24em] text-brand">Let's Connect</p>
                <h2 id="contact-title" className="mt-3 text-[32px] font-extrabold !text-white sm:text-[44px]">
                  Have an Opportunity in Mind?
                </h2>
                <div className="mt-5 max-w-[560px] space-y-3 text-[15.5px] leading-relaxed text-white/70">
                  <p>I'm actively looking for opportunities to begin and grow my career in the financial services and technology industry.</p>
                  <p>
                    Whether it's financial analysis, digital banking, risk management, or digital transformation, I'd love to connect and explore how I can contribute.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for Kanaga Rethnam')}`} className="btn btn-primary">
                    Get In Touch <ArrowRight size={16} aria-hidden />
                  </a>
                  <ResumeButton variant="ghost-light" />
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {items.map((it) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-white transition group-hover:bg-brand" aria-hidden>
                        {it.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[12px] uppercase tracking-wider text-white/50">{it.label}</span>
                        <span className="block truncate font-display text-[15px] font-semibold text-white">{it.value}</span>
                      </span>
                    </>
                  );
                  const cls =
                    'group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.07]';
                  return (
                    <li key={it.label}>
                      {it.href ? (
                        <a
                          href={it.href}
                          className={cls}
                          {...(it.external ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'LinkedIn profile (opens in a new tab)' } : {})}
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
