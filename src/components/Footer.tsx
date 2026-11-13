import { ArrowUp, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { LinkedInIcon, Logo } from './ui';

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-[13px] text-muted">{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="font-display text-[14px] font-medium text-ink-2 transition hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-2 transition hover:border-brand hover:text-brand"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-2 transition hover:border-brand hover:text-brand"
          >
            <Mail size={17} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-[var(--shadow-brand)] transition hover:-translate-y-1"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-5 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Kanaga Rethnam. All Rights Reserved.</p>
          <p>
            Built with care in <span className="font-semibold text-ink-2">Selangor, Malaysia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
