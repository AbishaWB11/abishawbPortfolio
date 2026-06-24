import avatarFallback from '../assets/avatar.js'
import { ArrowLeft } from 'lucide-react'
const avatarUrl = avatarFallback


const TECH_STACK = [
  { icon: '⚛️', name: 'React' }, { icon: '🟩', name: 'Node.js' }, { icon: '🅴', name: 'Express.js' },
  { icon: '🍃', name: 'MongoDB' }, { icon: '🐬', name: 'MySQL' }, { icon: '🌊', name: 'Tailwind' },
]
const OTHER_SKILLS = ['JavaScript', 'TypeScript', 'Git & GitHub', 'REST APIs', 'HTML5', 'CSS3', 'Vite', 'Next.js', 'Redux']
const PROJECTS = [
  {
    name: '🎬 CineBinge',
    desc: 'Movie discovery based on mood, watchlist & ratings. Real-time search via TMDB API.',
    tags: ['React', 'Tailwind CSS', 'TMDB API'],
    liveUrl: 'https://cinebinge1.vercel.app/',
    githubUrl: 'https://github.com/AbishaWB11/cinebinge',
  },
  {
    name: '🧮 Tip Claculator',
    desc: 'Tip Calculator that instantly calculates tip amounts,total bills and helps users divide expenses',
    tags: ['React', 'Tailwind CSS'],
    liveUrl: 'https://react-tip-calculator-nu.vercel.app/',
    githubUrl: 'https://github.com/AbishaWB11/react-tip-calculator',
  },
  {
    name: '🛒 Crunchlab-ecommerce',
    desc: 'Snack E-commerce with cart management',
    tags: ['React', 'Tailwind CSS'],
    liveUrl: 'https://crunchlab-ecommerce.vercel.app/',
    githubUrl: 'https://github.com/AbishaWB11/crunchlab-ecommerce',
  },
]


function SectionHeader({ title, onBack }) {
  return (
    <div
      className="flex items-center gap-4 sm:gap-[10px] px-3 sm:px-4 py-3"
      style={{ background: 'rgba(192,132,252,0.1)', borderBottom: '1px solid var(--full-border)' }}
    >
      <button
        className="full-acc2 font-orbitron text-[8px] sm:text-[9px] font-bold tracking-[1px] cursor-pointer rounded-full px-2 sm:px-3 py-[6px] transition-all duration-200 flex-shrink-0"
        style={{
          background: 'rgba(192,132,252,0.1)',
          border: '1px solid rgba(192,132,252,0.25)'
        }}
        onClick={onBack}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(192,132,252,0.22)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(192,132,252,0.1)')}
      >
        <ArrowLeft size={18} />
      </button>
      <div className="full-txt font-orbitron text-[11px] sm:text-[12px] font-black flex-1 text-center tracking-[1px] sm:tracking-[2px] min-w-0 truncate">
        {title}
      </div>
    </div>
  )
}

function AboutFull() {
  return (
    <>
      <div
        className="full-card flex flex-col sm:flex-row gap-[14px] items-center sm:items-start mb-4 p-[14px] rounded-[14px] border text-center sm:text-left"
      >
        <img
          className="w-[70px] h-[70px] rounded-full object-cover object-top flex-shrink-0"
          style={{ border: '3px solid var(--acc2)' }}
          src={avatarUrl}
          alt="Abisha"
          onError={e => (e.target.style.display = 'none')}
        />
        <div>
          <div className="full-acc2 font-mono text-[10px] tracking-[3px] mb-[3px]">HELLO, I'M</div>
          <div className="full-txt font-orbitron text-[18px] font-black tracking-[2px] mb-[3px]">Abisha Winslet Beri ♥</div>
          <div className="full-acc2 font-mono text-[10px] tracking-[2px] mb-2">Full Stack Developer</div>
          <div className="full-sub font-inter text-[12px] leading-[1.7]">
            I build modern, responsive and user-focused web applications with a love for clean UI/UX and efficient code.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-2 mb-4">
        {['India', 'B.Tech (CSE)', 'Web Designer'].map(info => (
          <div key={info} className="full-card border rounded-[10px] p-[9px_12px] flex items-center gap-[9px]">
            <div className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: 'var(--acc2)' }} />
            <span className="full-sub font-mono text-[10px]">{info}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function SkillsFull() {
  return (
    <>
      <div className="full-acc2 font-orbitron text-[10px] tracking-[2px] mb-[9px]">+ TECH STACK</div>
      <div className="grid grid-cols-3 max-[480px]:grid-cols-2 gap-[7px] mb-[14px]">
        {TECH_STACK.map(s => (
          <div key={s.name} className="full-card border rounded-[10px] p-[10px_7px] text-center flex flex-col items-center gap-[6px]">
            <div className="text-[22px] leading-none">{s.icon}</div>
            <div className="full-sub font-inter text-[11px] font-medium">{s.name}</div>
          </div>
        ))}
      </div>
      <div className="full-acc2 font-orbitron text-[10px] tracking-[2px] mb-[9px]">OTHER SKILLS</div>
      <div className="flex flex-wrap gap-[6px] mb-4">
        {OTHER_SKILLS.map(s => (
          <div
            key={s}
            className="full-acc2 font-mono text-[10px] rounded-full px-[11px] py-1"
            style={{ border: '1px solid rgba(192,132,252,0.3)', background: 'rgba(192,132,252,0.07)' }}
          >
            {s}
          </div>
        ))}
      </div>
    </>
  )
}

function ProjectsFull() {
  return (
    <>
      {PROJECTS.map(p => (
        <div key={p.name} className="full-card border rounded-[12px] p-[14px] mb-[9px]">
          <div className="full-txt font-orbitron text-[13px] font-bold mb-[6px]">{p.name}</div>
          <div className="full-sub font-inter text-[12px] leading-[1.6] mb-[9px]">{p.desc}</div>

          <div className="flex flex-wrap gap-[8px] mb-[9px]">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-orbitron text-[10px] font-bold tracking-[1px] rounded px-2 py-[6px] transition-colors"
              style={{ background: 'var(--acc2)', color: '#1a0030' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#d4a8ff')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--acc2)')}
            >
              LIVE
            </a>
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-orbitron text-[10px] font-bold tracking-[1px] rounded px-2 py-[6px]"
              style={{ background: 'rgba(192,132,252,0.08)', border: '1px solid rgba(192,132,252,0.25)', color: 'var(--acc2)' }}
            >
              GITHUB
            </a>
          </div>

          <div className="flex flex-wrap gap-[5px]">

            {p.tags.map(t => (
              <span
                key={t}
                className="full-acc2 font-mono text-[10px] rounded px-2 py-[3px]"
                style={{ background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.25)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function ContactFull() {
  return (
    <div className="grid grid-cols-2 gap-[14px] max-[480px]:grid-cols-1">
      <div>
        {['text', 'email'].map((type, i) => (
          <input
            key={i}
            type={type}
            placeholder={type === 'text' ? 'Your Name' : 'Your Email'}
            className="full-cinp w-full rounded-lg px-3 py-[10px] font-mono text-[11px] block mb-2"
            style={{ border: '1px solid' }}
          />
        ))}
        <textarea
          id="fullContactMsg"
          placeholder="Your Message"
          className="full-cinp w-full rounded-lg px-3 py-[10px] font-mono text-[11px] block mb-2 resize-none"
          style={{ minHeight: 80, border: '1px solid' }}
        />
        <button
          className="w-full rounded-lg py-[11px] font-orbitron text-[10px] font-bold tracking-[1px] cursor-pointer transition-colors duration-200 border-0"
          style={{ background: 'var(--acc2)', color: '#1a0030' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d4a8ff')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--acc2)')}
          onClick={() => {
            const name =
              document.querySelector('input[type="text"]')?.value || ''

            const email =
              document.querySelector('input[type="email"]')?.value || ''

            const message =
              document.getElementById('fullContactMsg')?.value || ''

            const subject = encodeURIComponent(
              `Portfolio Contact from ${name}`
            )

            const body = encodeURIComponent(
              `Name: ${name}

              Email: ${email}

              Message:
              ${message}`
            )

            window.location.href =
              `mailto:abishawinslet@gmail.com?subject=${subject}&body=${body}`

            setTimeout(() => {
              alert(
                'Your email app has been opened. Click Send to deliver your message.'
              )
            }, 500)
          }}
        >
          SEND MESSAGE ✦
        </button>
      </div>
      <div className="flex flex-col gap-[7px]">
        {[
          {
            ic: 'GH',
            name: 'GitHub',
            handle: 'github.com/AbishaWB11',
            url: 'https://github.com/AbishaWB11',
          },
          {
            ic: 'in',
            name: 'LinkedIn',
            handle: 'linkedin.com/in/abisha-winslet',
            url: 'https://www.linkedin.com/in/abisha-winslet',
          },
        ].map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="full-card border flex items-center gap-[10px] px-3 py-[10px] rounded-[10px] cursor-pointer transition-all duration-200 hover:scale-[1.02]"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="w-[27px] h-[27px] rounded-lg flex items-center justify-center text-[12px] flex-shrink-0 font-mono full-acc2"
              style={{ background: 'rgba(192,132,252,0.15)' }}
            >
              {s.ic}
            </div>

            <div>
              <div className="full-txt font-inter text-[12px] font-medium">
                {s.name}
              </div>

              <div className="full-dim font-mono text-[9px]">
                {s.handle}
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="/AbishaWinsletBeri.pdf"
        download
        className="full-card border flex items-center gap-[10px] px-3 py-[10px] rounded-[10px] cursor-pointer transition-all duration-200 hover:scale-[1.02]"
        style={{ textDecoration: 'none' }}
      >
        <div
          className="w-[27px] h-[27px] rounded-lg flex items-center justify-center text-[12px] flex-shrink-0 font-mono full-acc2"
          style={{ background: 'rgba(192,132,252,0.15)' }}
        >
          PDF
        </div>

        <div>
          <div className="full-txt font-inter text-[12px] font-medium">
            Resume
          </div>

          <div className="full-dim font-mono text-[9px]">
            Download PDF
          </div>
        </div>
      </a>
    </div>
  )
}

const LABELS = { about: 'ABOUT ME', skills: 'SKILLS', projects: 'PROJECTS', contact: 'CONTACT ME' }

export default function FullPage({ section, visible, onBack }) {
  if (!visible) return null
  return (
    <div className="col-start-1 row-start-1 w-full max-w-[600px]">
      <div
        className="full-page animate-fullPageIn rounded-[18px] overflow-hidden border"
        style={{ minHeight: 'min(480px, 75vh)' }}
      >
        <SectionHeader title={LABELS[section] || ''} onBack={onBack} />
        <div className="full-body p-[14px] sm:p-[18px] overflow-y-auto thin-scroll" style={{ maxHeight: 'min(70vh, calc(100dvh - 160px))' }}>
          {section === 'about' && <AboutFull />}
          {section === 'skills' && <SkillsFull />}
          {section === 'projects' && <ProjectsFull />}
          {section === 'contact' && <ContactFull />}
        </div>
      </div>
    </div>
  )
}
