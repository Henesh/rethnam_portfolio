import { useId } from 'react';
import type { ProjectArt as ArtKind } from '../../data/portfolio';

const RED = '#E51B32';
const INK = '#171717';

type P = { className?: string };

/* 01 — Cybersecurity research: banking app, shield, transactions, research chart */
function CyberArt({ className }: P) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 480 300" className={className} role="img" aria-label="Illustration: digital banking app protected by a security shield, with transaction list and research chart">
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f1f22" />
          <stop offset="1" stopColor="#0f0f10" />
        </linearGradient>
        <linearGradient id={`sh${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff3a50" />
          <stop offset="1" stopColor={RED} />
        </linearGradient>
        <pattern id={`grid${id}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#ffffff" strokeOpacity="0.04" />
        </pattern>
      </defs>
      <rect width="480" height="300" fill={`url(#bg${id})`} />
      <rect width="480" height="300" fill={`url(#grid${id})`} />
      <circle cx="350" cy="150" r="120" fill={RED} opacity="0.10" />

      {/* Research chart card */}
      <g transform="translate(28 40)">
        <rect width="150" height="104" rx="12" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="14" y="14" width="60" height="6" rx="3" fill="#fff" opacity="0.5" />
        <rect x="14" y="26" width="38" height="5" rx="2.5" fill="#fff" opacity="0.2" />
        {[34, 52, 28, 62, 44].map((h, i) => (
          <rect key={i} x={18 + i * 24} y={92 - h} width="14" height={h} rx="3" fill={i === 3 ? RED : '#ffffff'} opacity={i === 3 ? 1 : 0.22} />
        ))}
        <polyline points="25,62 49,48 73,66 97,36 121,52" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>

      {/* Transactions card */}
      <g transform="translate(28 160)">
        <rect width="150" height="104" rx="12" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.1" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12 ${14 + i * 30})`}>
            <circle cx="10" cy="10" r="10" fill={i === 1 ? RED : '#fff'} opacity={i === 1 ? 0.95 : 0.15} />
            {i === 1 && <path d="M10 5v6M10 14v1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />}
            <rect x="28" y="4" width="54" height="5" rx="2.5" fill="#fff" opacity="0.45" />
            <rect x="28" y="13" width="34" height="4" rx="2" fill="#fff" opacity="0.18" />
            <rect x="96" y="6" width="30" height="6" rx="3" fill={i === 1 ? RED : '#fff'} opacity={i === 1 ? 0.9 : 0.35} />
          </g>
        ))}
      </g>

      {/* Phone with banking app */}
      <g transform="translate(222 26)">
        <rect width="132" height="250" rx="22" fill="#2a2a2e" stroke="#ffffff" strokeOpacity="0.14" />
        <rect x="8" y="8" width="116" height="234" rx="16" fill="#f8f8fa" />
        <rect x="48" y="14" width="36" height="6" rx="3" fill="#d8d8dc" />
        <rect x="18" y="32" width="96" height="58" rx="10" fill={INK} />
        <rect x="26" y="42" width="36" height="4" rx="2" fill="#fff" opacity="0.45" />
        <rect x="26" y="52" width="58" height="9" rx="3" fill="#fff" />
        <rect x="26" y="72" width="22" height="8" rx="2" fill={RED} />
        <circle cx="100" cy="76" r="5" fill="#fff" opacity="0.3" />
        <circle cx="94" cy="76" r="5" fill="#fff" opacity="0.6" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${18 + i * 25} 100)`}>
            <rect width="20" height="20" rx="6" fill={i === 0 ? '#fdecee' : '#ececef'} />
            <rect x="6" y="6" width="8" height="8" rx="2" fill={i === 0 ? RED : '#b9b9bf'} />
          </g>
        ))}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(18 ${134 + i * 24})`}>
            <rect width="96" height="18" rx="6" fill="#fff" stroke="#eeeeee" />
            <rect x="8" y="6" width="34" height="5" rx="2.5" fill="#c9c9cf" />
            <rect x="66" y="6" width="22" height="5" rx="2.5" fill={i === 2 ? RED : '#9a9aa2'} />
          </g>
        ))}
        <rect x="18" y="232" width="96" height="2" rx="1" fill="#d8d8dc" />
      </g>

      {/* Shield */}
      <g transform="translate(318 70)">
        <ellipse cx="62" cy="168" rx="52" ry="8" fill="#000" opacity="0.35" />
        <path d="M62 0 L118 20 V72 C118 112 94 138 62 152 C30 138 6 112 6 72 V20 Z" fill={`url(#sh${id})`} />
        <path d="M62 12 L106 28 V72 C106 104 87 125 62 138 C37 125 18 104 18 72 V28 Z" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="42" y="62" width="40" height="32" rx="6" fill="#fff" />
        <path d="M50 62 V52 a12 12 0 0 1 24 0 V62" fill="none" stroke="#fff" strokeWidth="6" />
        <circle cx="62" cy="76" r="4" fill={RED} />
        <rect x="60.5" y="77" width="3" height="9" rx="1.5" fill={RED} />
      </g>

      {/* Floating MFA / alert chips */}
      <g transform="translate(372 30)">
        <rect width="88" height="30" rx="15" fill="#fff" />
        <circle cx="16" cy="15" r="7" fill={RED} />
        <path d="M13 15 l2 2 l4 -4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="19.5" fontFamily="Plus Jakarta Sans, Arial" fontSize="11" fontWeight="700" fill={INK}>MFA on</text>
      </g>
      <g transform="translate(380 250)">
        <rect width="80" height="28" rx="14" fill="#ffffff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.2" />
        <text x="14" y="18" fontFamily="Plus Jakarta Sans, Arial" fontSize="10.5" fontWeight="600" fill="#fff" opacity="0.85">Phishing ✕</text>
      </g>
    </svg>
  );
}

/* 02 — Alibaba GDT: global e-commerce, marketplace window, globe, certificate */
function EcommerceArt({ className }: P) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 480 300" className={className} role="img" aria-label="Illustration: online marketplace window, globe with trade routes and a certification badge">
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff4f1" />
          <stop offset="1" stopColor="#fde4e2" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill={`url(#bg${id})`} />
      <circle cx="380" cy="90" r="110" fill="#fff" opacity="0.6" />

      {/* Globe */}
      <g transform="translate(330 30)">
        <circle cx="70" cy="70" r="66" fill="#fff" stroke={INK} strokeOpacity="0.12" />
        <ellipse cx="70" cy="70" rx="28" ry="66" fill="none" stroke={INK} strokeOpacity="0.14" />
        <ellipse cx="70" cy="70" rx="52" ry="66" fill="none" stroke={INK} strokeOpacity="0.08" />
        <line x1="4" y1="70" x2="136" y2="70" stroke={INK} strokeOpacity="0.14" />
        <path d="M12 40 H128 M12 100 H128" stroke={INK} strokeOpacity="0.08" />
        <path d="M30 86 Q70 10 112 52" fill="none" stroke={RED} strokeWidth="2" strokeDasharray="4 4" />
        <path d="M24 56 Q66 120 118 92" fill="none" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 4" />
        {[[30, 86], [112, 52], [24, 56], [118, 92], [70, 34]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="7" fill={i % 2 ? INK : RED} opacity="0.18" />
            <circle cx={x} cy={y} r="3.5" fill={i % 2 ? INK : RED} />
          </g>
        ))}
      </g>

      {/* Marketplace browser window */}
      <g transform="translate(26 52)">
        <rect width="290" height="214" rx="14" fill="#fff" stroke={INK} strokeOpacity="0.08" />
        <rect width="290" height="30" rx="14" fill={INK} />
        <rect y="16" width="290" height="14" fill={INK} />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={16 + i * 13} cy="15" r="4" fill={i === 0 ? RED : '#fff'} opacity={i === 0 ? 1 : 0.35} />
        ))}
        <rect x="64" y="8" width="160" height="14" rx="7" fill="#fff" opacity="0.14" />
        <rect x="14" y="42" width="190" height="24" rx="12" fill="#f3f3f5" />
        <circle cx="30" cy="54" r="5" fill="none" stroke="#9a9aa2" strokeWidth="1.8" />
        <rect x="212" y="42" width="64" height="24" rx="12" fill={RED} />
        <rect x="226" y="51" width="36" height="6" rx="3" fill="#fff" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${14 + i * 90} 78)`}>
            <rect width="82" height="122" rx="10" fill="#f8f8fa" stroke="#eee" />
            <rect x="8" y="8" width="66" height="56" rx="8" fill={i === 1 ? '#fdecee' : '#ececef'} />
            {i === 0 && <rect x="26" y="20" width="30" height="34" rx="6" fill={INK} opacity="0.85" />}
            {i === 1 && <circle cx="41" cy="36" r="16" fill={RED} />}
            {i === 2 && <path d="M22 54 L41 18 L60 54 Z" fill={INK} opacity="0.7" />}
            <rect x="8" y="74" width="54" height="6" rx="3" fill="#c9c9cf" />
            <rect x="8" y="86" width="34" height="5" rx="2.5" fill="#dedee2" />
            <rect x="8" y="100" width="30" height="12" rx="4" fill={i === 1 ? RED : INK} />
            <circle cx="66" cy="106" r="8" fill="#fff" stroke="#e0e0e4" />
            <path d="M62 106 h8 M66 102 v8" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
          </g>
        ))}
      </g>

      {/* Certificate badge */}
      <g transform="translate(332 176)">
        <rect width="124" height="92" rx="14" fill="#fff" stroke={INK} strokeOpacity="0.08" />
        <circle cx="34" cy="40" r="20" fill={RED} />
        <circle cx="34" cy="40" r="14" fill="none" stroke="#fff" strokeOpacity="0.6" strokeDasharray="2 3" />
        <path d="M27 40 l5 5 l9 -10" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 58 L20 80 L30 74 L34 84 L38 60" fill={INK} />
        <rect x="64" y="24" width="46" height="6" rx="3" fill={INK} opacity="0.8" />
        <rect x="64" y="36" width="36" height="5" rx="2.5" fill="#c9c9cf" />
        <rect x="64" y="48" width="42" height="5" rx="2.5" fill="#dedee2" />
        <text x="64" y="76" fontFamily="Plus Jakarta Sans, Arial" fontSize="10" fontWeight="800" fill={RED} letterSpacing="1">CERTIFIED</text>
      </g>

      {/* Cart chip */}
      <g transform="translate(250 22)">
        <rect width="62" height="32" rx="16" fill={INK} />
        <path d="M16 11 h4 l3 11 h12 l3 -8 h-16" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="25" r="1.8" fill="#fff" />
        <circle cx="34" cy="25" r="1.8" fill="#fff" />
        <circle cx="47" cy="16" r="6" fill={RED} />
      </g>
    </svg>
  );
}

/* 03 — High on Health booth campaign: booth with awning, products, people, chat bubbles */
function BoothArt({ className }: P) {
  const id = useId().replace(/:/g, '');
  const stripes = Array.from({ length: 10 });
  return (
    <svg viewBox="0 0 480 300" className={className} role="img" aria-label="Illustration: promotional health product booth with striped awning, products and visitors">
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f6f8" />
          <stop offset="1" stopColor="#ececf0" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill={`url(#bg${id})`} />
      <rect y="248" width="480" height="52" fill="#e2e2e7" />
      <circle cx="240" cy="132" r="120" fill="#fff" opacity="0.7" />

      {/* booth */}
      <g transform="translate(110 34)">
        <rect x="8" y="40" width="8" height="176" fill={INK} />
        <rect x="244" y="40" width="8" height="176" fill={INK} />
        {/* sign */}
        <rect x="60" y="0" width="140" height="34" rx="8" fill={INK} />
        <text x="130" y="22" textAnchor="middle" fontFamily="Plus Jakarta Sans, Arial" fontSize="13" fontWeight="800" fill="#fff" letterSpacing="0.5">
          HIGH ON <tspan fill={RED}>HEALTH</tspan>
        </text>
        {/* awning */}
        {stripes.map((_, i) => (
          <path key={i} d={`M${i * 26} 40 h26 v30 a13 13 0 0 1 -26 0 Z`} fill={i % 2 ? '#fff' : RED} stroke={i % 2 ? '#eee' : 'none'} />
        ))}
        {/* counter */}
        <rect x="0" y="150" width="260" height="66" rx="8" fill="#fff" stroke="#e3e3e7" />
        <rect x="0" y="150" width="260" height="12" rx="6" fill={INK} />
        <rect x="90" y="176" width="80" height="26" rx="6" fill={RED} />
        <text x="130" y="193" textAnchor="middle" fontFamily="Plus Jakarta Sans, Arial" fontSize="11" fontWeight="800" fill="#fff">SucaLess</text>
        {/* products */}
        {[30, 62, 94, 166, 198, 226].map((x, i) => (
          <g key={x} transform={`translate(${x} ${i % 3 === 1 ? 104 : 112})`}>
            <rect width="22" height={i % 3 === 1 ? 46 : 38} rx="5" fill={i % 2 ? '#fff' : INK} stroke="#ddd" />
            <rect x="4" y="-6" width="14" height="8" rx="2" fill={i % 2 ? RED : '#9a9aa2'} />
            <rect x="4" y="14" width="14" height="10" rx="2" fill={i % 2 ? '#fdecee' : RED} opacity="0.9" />
          </g>
        ))}
        {/* leaf */}
        <path d="M128 132 C 118 112, 132 96, 150 96 C 150 116, 140 130, 128 132 Z" fill={RED} opacity="0.85" />
        <path d="M130 130 L 146 102" stroke="#fff" strokeWidth="1.4" />
      </g>

      {/* visitors */}
      {[
        { x: 52, c: INK, s: 1 },
        { x: 400, c: '#4a4a52', s: 0.95 },
        { x: 432, c: RED, s: 0.85 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${256 - 110 * p.s}) scale(${p.s})`}>
          <circle cx="18" cy="16" r="14" fill="#c99a7a" />
          <path d="M4 14 a14 14 0 0 1 28 0 v-2 a14 10 0 0 0 -28 0Z" fill={INK} />
          <rect x="0" y="34" width="36" height="62" rx="16" fill={p.c} />
          <rect x="6" y="88" width="10" height="22" rx="4" fill="#2a2a2e" />
          <rect x="20" y="88" width="10" height="22" rx="4" fill="#2a2a2e" />
        </g>
      ))}

      {/* engagement bubbles */}
      <g transform="translate(28 72)">
        <rect width="72" height="34" rx="12" fill="#fff" stroke="#e6e6ea" />
        <path d="M18 34 l-4 10 l12 -10Z" fill="#fff" />
        <circle cx="22" cy="17" r="3" fill={RED} />
        <circle cx="36" cy="17" r="3" fill={RED} opacity="0.6" />
        <circle cx="50" cy="17" r="3" fill={RED} opacity="0.3" />
      </g>
      <g transform="translate(386 56)">
        <rect width="72" height="34" rx="12" fill={INK} />
        <path d="M50 34 l6 10 l-14 -10Z" fill={INK} />
        <path d="M24 17 l6 6 l12 -12" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* day tag */}
      <g transform="translate(24 236)">
        <rect width="92" height="40" rx="10" fill="#fff" stroke="#e3e3e7" />
        <rect width="92" height="12" rx="6" fill={RED} />
        <text x="46" y="32" textAnchor="middle" fontFamily="Plus Jakarta Sans, Arial" fontSize="12" fontWeight="800" fill={INK}>4 DAYS</text>
      </g>
    </svg>
  );
}

/* 04 — Morib Beach cleanup: coast, sun, volunteers with bags, debris, recycling */
function BeachArt({ className }: P) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 480 300" className={className} role="img" aria-label="Illustration: volunteers collecting plastic waste on a beach beside the sea">
      <defs>
        <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1ee" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={`sea${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3440" />
          <stop offset="1" stopColor="#1b2028" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill={`url(#sky${id})`} />
      <circle cx="372" cy="92" r="46" fill={RED} />
      <circle cx="372" cy="92" r="64" fill={RED} opacity="0.12" />
      {/* birds */}
      <path d="M90 60 q6 -6 12 0 q6 -6 12 0 M130 44 q5 -5 10 0 q5 -5 10 0" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* sea */}
      <path d="M0 140 H480 V204 H0Z" fill={`url(#sea${id})`} />
      <path d="M0 150 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" strokeOpacity="0.2" strokeWidth="2" fill="none" />
      <path d="M20 172 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" strokeOpacity="0.12" strokeWidth="2" fill="none" />
      <rect x="352" y="142" width="40" height="3" rx="1.5" fill={RED} opacity="0.6" />
      <rect x="360" y="150" width="24" height="3" rx="1.5" fill={RED} opacity="0.35" />
      {/* fish */}
      <g transform="translate(96 178)" opacity="0.7">
        <path d="M0 6 q12 -10 24 0 q-12 10 -24 0Z" fill="#fff" />
        <path d="M24 6 l8 -6 v12Z" fill="#fff" />
      </g>
      {/* shore + sand */}
      <path d="M0 200 Q120 186 240 198 T480 194 V300 H0Z" fill="#f3e6d8" />
      <path d="M0 200 Q120 186 240 198 T480 194" stroke="#fff" strokeWidth="4" fill="none" opacity="0.9" />

      {/* debris */}
      <g>
        <g transform="translate(70 240) rotate(-20)">
          <rect width="26" height="10" rx="4" fill="#9fb4c8" />
          <rect x="26" y="2" width="6" height="6" rx="1" fill={RED} />
        </g>
        <path d="M140 262 l10 -8 l12 6 l-6 10 Z" fill="#fff" stroke="#c9c9cf" />
        <circle cx="418" cy="258" r="6" fill="#fff" stroke="#c9c9cf" />
      </g>

      {/* volunteers */}
      {[
        { x: 190, c: RED, bend: false },
        { x: 262, c: INK, bend: true },
        { x: 330, c: '#4a4a52', bend: false },
      ].map((v, i) => (
        <g key={i} transform={`translate(${v.x} ${v.bend ? 186 : 170})`}>
          <g transform={v.bend ? 'rotate(18 18 60)' : undefined}>
            <circle cx="18" cy="14" r="12" fill="#b88566" />
            <path d="M5 12 a13 13 0 0 1 26 0 h-26Z" fill={i === 0 ? INK : RED} />
            <rect x="2" y="28" width="32" height="48" rx="14" fill={v.c} />
          </g>
          <rect x="7" y="72" width="9" height="24" rx="4" fill="#2a2a2e" />
          <rect x="20" y="72" width="9" height="24" rx="4" fill="#2a2a2e" />
          {/* bag */}
          <g transform={`translate(${v.bend ? 38 : 32} ${v.bend ? 54 : 46})`}>
            <path d="M0 6 q10 -8 20 0 l4 30 q-14 6 -28 0Z" fill={i === 1 ? '#fff' : '#3a3b3e'} stroke={i === 1 ? '#d0d0d6' : 'none'} />
            <path d="M6 4 q4 -8 8 0" stroke={i === 1 ? '#9a9aa2' : '#3a3b3e'} strokeWidth="2" fill="none" />
          </g>
          {v.bend && <line x1="46" y1="62" x2="58" y2="96" stroke="#6b6b6b" strokeWidth="2.5" strokeLinecap="round" />}
        </g>
      ))}

      {/* recycle badge */}
      <g transform="translate(26 24)">
        <rect width="112" height="40" rx="20" fill="#fff" stroke="#eee" />
        <circle cx="20" cy="20" r="12" fill={RED} />
        <path d="M14 22 l4 -7 l4 7 M22 22 h-8" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="24.5" fontFamily="Plus Jakarta Sans, Arial" fontSize="11.5" fontWeight="800" fill={INK}>Clean Coast</text>
      </g>
      {/* palm */}
      <g transform="translate(436 120)">
        <path d="M6 100 q-4 -50 4 -92" stroke="#3a3b3e" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M10 8 q-24 -6 -36 12 M10 8 q22 -10 34 8 M10 8 q-8 -20 -26 -18 M10 8 q12 -20 28 -14" stroke="#3a3b3e" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function ProjectArt({ kind, className }: { kind: ArtKind; className?: string }) {
  switch (kind) {
    case 'cyber':
      return <CyberArt className={className} />;
    case 'ecommerce':
      return <EcommerceArt className={className} />;
    case 'booth':
      return <BoothArt className={className} />;
    case 'beach':
      return <BeachArt className={className} />;
  }
}
