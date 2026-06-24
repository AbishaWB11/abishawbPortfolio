import { Laptop, Cpu, Rocket, Phone, BatteryFull, ArrowLeft } from 'lucide-react'

import avatarFallback from '../assets/avatar.js'
const avatarUrl = avatarFallback


// ─── POD INTRO SCREEN ───
export function PodIntroScreen({ onTap }) {
  return (
    <div
      id="sc-podintro"
      className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2 py-2"
    >
      <div className="scanline absolute inset-0 pointer-events-none z-10" />
      <div
        className="animate-pixelGlide flex items-center justify-center rounded-full"
        style={{ width: 80, height: 80, border: '2px solid var(--acc2)' }}
      >
        <img
          className="w-17 h-17 rounded-full object-cover object-top"
          style={{ border: '2px solid var(--acc)' }}
          src={avatarUrl}
          alt="Abisha"
          onError={e => (e.target.style.display = 'none')}
        />
      </div>
      <div
        className="animate-typing animate-blink whitespace-nowrap font-orbitron text-[10px] font-black tracking-[2px] leading-[1.05] justify-center items-center text-center p-2 leading-normal"
        style={{ color: '#fff8ef', textShadow: '0 0 24px rgba(192,132,252,0.65), 0 0 10px rgba(112,214,199,0.35)' }}
      >
        HELLO, I&apos;M ABISHA WINSLET<br></br> (FULLSTACK DEVELOPER)
      </div>
    </div>
  )
}

// ─── MENU SCREEN ───
const MENU_ITEMS = [
  { key: 'about', icon: <Laptop size={18} />, label: 'About Me' },

  { key: 'skills', icon: <Cpu size={18} />, label: 'Skills' },
  { key: 'projects', icon: <Rocket size={18} />, label: 'Projects' },
  { key: 'contact', icon: <Phone size={18} />, label: 'Contact Me' },
]

export function MenuScreen({ selectedIdx, onSelect }) {
  return (
    <div className="absolute inset-0 overflow-y-auto thin-scroll flex flex-col" style={{ background: '#0a0812' }}>
      {/* header */}
      <div
        className="flex justify-between items-center px-3 py-[6px] flex-shrink-0"
        style={{ background: 'var(--acc2)' }}
      >
        <span
          className="font-orbitron text-[9px] font-bold tracking-[1px]"
          style={{ color: '#fff' }}
        >
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        <span>
          <BatteryFull
            size={16}
            style={{ color: '#fff' }}
          />
        </span>
      </div>
      {/* items */}
      {MENU_ITEMS.map((item, i) => {
        const isSelected = i === selectedIdx
        return (
          <div
            key={item.key}
            className={`mi-item flex items-center gap-[8px] px-3 py-[8px] cursor-pointer transition-all duration-150 flex-shrink-0 ${isSelected ? 'hl active' : ''}`}
            style={{ borderBottom: '1px solid rgba(192,132,252,0.08)' }}
            onClick={() => onSelect(item.key, i)}
            onMouseEnter={e => e.currentTarget.classList.add('hl')}
            onMouseLeave={e => !isSelected && e.currentTarget.classList.remove('hl')}
          >
            <div className="mi-icon w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[13px] flex-shrink-0 transition-all duration-150">
              {item.icon}
            </div>
            <div className="mi-text font-inter text-[12px] font-medium flex-1 transition-all duration-150">
              {item.label}
            </div>
            <div className="mi-chevron text-[14px] transition-colors duration-150">›</div>
          </div>
        )
      })}
    </div>
  )
}

// ─── SHARED INNER NAV ───
function InnerNav({ title, onBack }) {
  return (
    <div
      className="sticky top-0 flex items-center gap-2 px-3 py-[7px] z-10"
      style={{
        background: 'rgba(10,8,18,0.96)',
        borderBottom: '1px solid rgba(192,132,252,0.2)',
      }}
    >
      <button
        onClick={onBack}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center rounded-full"
        style={{
          width: '32px',
          height: '32px',
          background: 'rgba(124,92,255,.15)',
          border: '1px solid rgba(124,92,255,.25)',
          color: '#7c5cff'
        }}
      >
        <ArrowLeft size={18} strokeWidth={2.5} />
      </button>
    </div>
  )
}

// ─── ABOUT ───
export function AboutScreen({ onBack }) {
  return (
    <div className="absolute inset-0 overflow-y-auto thin-scroll" style={{ background: '#0a0812' }}>
      <InnerNav title="ABOUT ME" onBack={onBack} />
      <div className="p-[10px]">
        <div className="flex gap-[10px] items-start mb-3">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover object-top flex-shrink-0"
            style={{ border: '2px solid var(--acc2)' }}
            src={avatarUrl}
            alt="Abisha"
            onError={e => (e.target.style.display = 'none')}
          />
          <div>
            <div className="font-mono text-[9px] tracking-[2px] mb-[2px]" style={{ color: 'var(--acc2)' }}>HI, I'M</div>
            <div className="font-orbitron text-[15px] font-black mb-[2px]" style={{ color: '#f0e6ff' }}>Abisha ♥</div>
            <div className="font-mono text-[9px] tracking-[1px] mb-[5px]" style={{ color: 'var(--acc2)' }}>Full Stack Developer</div>
            <div className="font-inter text-[10px] leading-[1.6]" style={{ color: '#a090c0' }}>
              I build modern, responsive and user-focused web apps with a love for clean UI/UX.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6px] mt-[10px]">
          {['India', 'hello@abisha.dev', 'Singing', 'Reading'].map(info => (
            <div key={info} className="flex items-center gap-2 font-mono text-[10px]" style={{ color: '#a090c0' }}>
              <div className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: 'var(--acc2)' }} />
              {info}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SKILLS ───
const TECH_STACK = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🅴', name: 'Express' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🐬', name: 'MySQL' },
  { icon: '🌊', name: 'Tailwind' },
]

const OTHER_SKILLS = ['JavaScript', 'TypeScript', 'Git & GitHub', 'REST APIs', 'HTML5', 'CSS3', 'Vite', 'Figma']

export function SkillsScreen({ onBack }) {
  return (
    <div className="absolute inset-0 overflow-y-auto thin-scroll" style={{ background: '#0a0812' }}>
      <InnerNav title="SKILLS" onBack={onBack} />
      <div className="p-[10px]">
        <div className="font-orbitron text-[9px] tracking-[2px] mb-[7px]" style={{ color: 'var(--acc2)' }}>+ TECH STACK</div>
        <div className="grid grid-cols-3 gap-[5px] mb-3">
          {TECH_STACK.map(s => (
            <div
              key={s.name}
              className="rounded-lg p-[7px_5px] text-center flex flex-col items-center gap-1"
              style={{ background: 'rgba(192,132,252,0.07)', border: '1px solid rgba(192,132,252,0.15)' }}
            >
              <div className="text-[16px] leading-none">{s.icon}</div>
              <div className="font-inter text-[9px] font-medium" style={{ color: '#c0a8e8' }}>{s.name}</div>
            </div>
          ))}
        </div>
        <div className="font-orbitron text-[9px] tracking-[2px] mb-[7px]" style={{ color: 'var(--acc2)' }}>OTHER SKILLS</div>
        <div className="flex flex-wrap gap-1">
          {OTHER_SKILLS.map(s => (
            <div
              key={s}
              className="font-mono text-[9px] rounded-full px-2 py-[3px]"
              style={{ color: 'var(--acc2)', border: '1px solid rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.07)' }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── PROJECTS ───
const PROJECTS = [
  {
    name: '🎬 CineBinge',
    desc: 'Movie discovery with reviews, watchlist & ratings. Real-time search via TMDB API.',
    tags: ['React', 'Tailwind CSS', 'TMDB API'],
    liveUrl: 'https://cinebinge1.vercel.app/',
    githubUrl: 'https://github.com/AbishaWB11/cinebinge',
  },
  {
    name: '💼 Job-Sync',
    desc: 'Job management platform with auth, listings & application tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/AbishaWB11/react-tip-calculator',
  },
  {
    name: '🛒 ShopFlow',
    desc: 'E-commerce with cart management, payments & admin panel.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/AbishaWB11/crunchlab-ecommerce',
  },
]


export function ProjectsScreen({ onBack }) {
  return (
    <div className="absolute inset-0 overflow-y-auto thin-scroll" style={{ background: '#0a0812' }}>
      <InnerNav title="PROJECTS" onBack={onBack} />
      <div className="p-[10px]">
        {PROJECTS.map(p => (
          <div
            key={p.name}
            className="rounded-[10px] p-[9px] mb-[7px]"
            style={{ background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.15)' }}
          >
            <div className="font-orbitron text-[11px] font-bold mb-1" style={{ color: '#f0e6ff' }}>{p.name}</div>
            <div className="font-inter text-[10px] leading-[1.5] mb-[6px]" style={{ color: '#a090c0' }}>{p.desc}</div>

            {/* links */}
            <div className="flex flex-wrap gap-2 mb-[6px]">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-orbitron text-[9px] font-bold tracking-[1px] rounded px-2 py-[3px] transition-colors"
                style={{
                  color: '#1a0030',
                  background: 'var(--acc2)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a8ff')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--acc2)')}
              >
                LIVE
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-orbitron text-[9px] font-bold tracking-[1px] rounded px-2 py-[3px]"
                style={{
                  color: 'var(--acc2)',
                  background: 'rgba(192,132,252,0.08)',
                  border: '1px solid rgba(192,132,252,0.25)',
                }}
              >
                GITHUB
              </a>
            </div>

            <div className="flex flex-wrap gap-1">

              {p.tags.map(t => (
                <span
                  key={t}
                  className="font-mono text-[8px] rounded px-[5px] py-[2px]"
                  style={{ color: '#a084cc', background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.2)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── CONTACT ───
export function ContactScreen({ onBack }) {
  return (
    <div className="absolute inset-0 overflow-y-auto thin-scroll" style={{ background: '#0a0812' }}>
      <InnerNav title="CONTACT" onBack={onBack} />
      <div className="p-[10px]">
        <input className="c-inp w-full rounded-lg px-[9px] py-[7px] font-mono text-[10px] mb-[6px] block" placeholder="Your Name" />
        <input className="c-inp w-full rounded-lg px-[9px] py-[7px] font-mono text-[10px] mb-[6px] block" type="email" placeholder="Your Email" />
        <textarea
          id="podContactMsg"
          className="c-inp w-full rounded-lg px-[9px] py-[7px] font-mono text-[10px] mb-[6px] block resize-none"
          style={{ minHeight: 52 }}
          placeholder="Your Message"
        />
        <button
          className="w-full rounded-lg py-2 font-orbitron text-[10px] font-bold tracking-[1px] cursor-pointer transition-colors duration-200"
          style={{ background: 'var(--acc2)', color: '#1a0030', border: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d4a8ff')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--acc2)')}
          onClick={() => {
            const msgEl = document.getElementById('podContactMsg')
            const message = msgEl?.value?.trim() || ''
            const subject = encodeURIComponent('Portfolio Contact Message')
            const body = encodeURIComponent(message)
            window.location.href = `mailto:abishawinslet@gmail.com?subject=${subject}&body=${body}`
          }}
        >
          SEND MESSAGE ✦
        </button>
        <div className="font-orbitron text-[9px] tracking-[2px] mb-[7px]" style={{ color: 'var(--acc2)', margin: '10px 0 7px' }}>FIND ME ON</div>
        {[
          {
            name: 'GitHub',
            href: 'https://github.com/AbishaWB11',
            handle: 'github.com/AbishaWB11',
          },
          {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/abisha-winslet',
            handle: 'www.linkedin.com/in/abisha-winslet',
          },
          {
            name: 'Email',
            href: 'mailto:abishawinslet@gmail.com',
            handle: 'abishawinslet@gmail.com',
          },
        ].map(s => (
          <a
            key={s.name}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 py-[6px]"
            style={{ borderBottom: '1px solid rgba(192,132,252,0.1)' }}
          >
            <div
              className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-[11px] flex-shrink-0 font-mono"
              style={{ background: 'rgba(192,132,252,0.12)', color: 'var(--acc2)' }}
            >
              ✦
            </div>
            <div>
              <div className="font-inter text-[11px] font-medium" style={{ color: '#f0e6ff' }}>{s.name}</div>
              <div className="font-mono text-[9px]" style={{ color: '#5a4878' }}>{s.handle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
