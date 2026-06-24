import { useState, useEffect } from 'react'

const TITLE_TEXT = 'Welcome'
const COPY_TEXT =
  'Portfolio system initialized. Loading projects, skills & experiences.'

export default function IntroScreen({ onEnter, exiting }) {
  const [titleDisplay, setTitleDisplay] = useState('')
  const [copyDisplay, setCopyDisplay] = useState('')
  const [showCopy, setShowCopy] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers = []
    const schedule = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
      return id
    }

    let i = 0
    function typeTitle() {
      if (cancelled) return
      if (i <= TITLE_TEXT.length) {
        setTitleDisplay(TITLE_TEXT.slice(0, i))
        i++
        schedule(typeTitle, 70)
      } else {
        setShowCopy(true)
        let j = 0
        function typeCopy() {
          if (cancelled) return
          if (j <= COPY_TEXT.length) {
            setCopyDisplay(COPY_TEXT.slice(0, j))
            j++
            schedule(typeCopy, 18)
          } else {
            setShowBtn(true)
          }
        }
        typeCopy()
      }
    }
    typeTitle()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  useEffect(() => {
    if (!showBtn || exiting) return
    function onKey(e) {
      if (e.key === 'Enter') onEnter()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showBtn, exiting, onEnter])

  const titleLines = titleDisplay.split('\n')

  return (
    <section
      id="intro"
      className={`relative z-10 flex flex-col justify-center items-start overflow-hidden ${exiting ? 'animate-introFadeOut' : 'animate-introRise'}`}
      style={{
        width: 'min(520px, calc(100% - 24px))',
        minHeight: 'min(520px, 80vh)',
        padding: 'clamp(24px,6vw,52px)',
        border: '1px solid rgba(255,248,239,0.22)',
        borderRadius: 'clamp(24px,6vw,40px)',
        background: 'linear-gradient(150deg,rgba(255,248,239,0.14),rgba(16,24,39,0.7)),rgba(16,24,39,0.72)',
        boxShadow: '0 24px 70px rgba(5,10,20,0.38),inset 0 1px 0 rgba(255,255,255,0.2)',
        backdropFilter: 'blur(22px)',
      }}
    >
      {/* inner border */}
      <div
        className="absolute pointer-events-none rounded-[inherit]"
        style={{ inset: 16, border: '1px solid rgba(112,214,199,0.14)' }}
      />

      {/* orbit decoration */}
      <div
        className="i-orbit absolute"
        style={{
          inset: 'auto -60px -80px auto',
          width: 'min(280px,65vw)',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(255,209,102,0.24),transparent 44%),conic-gradient(from 90deg,rgba(112,214,199,0),rgba(112,214,199,0.7),rgba(255,122,107,0),rgba(124,92,255,0.55),rgba(112,214,199,0))',
          filter: 'blur(0.5px)',
          opacity: 0.8,
        }}
        aria-hidden="true"
      >
        <span
          className="absolute w-[9px] aspect-square rounded-full"
          style={{ top: '18%', left: '24%', background: '#fff8ef', boxShadow: '0 0 16px #ffd166' }}
        />
        <span
          className="absolute w-[9px] aspect-square rounded-full"
          style={{ right: '18%', bottom: '28%', background: '#70d6c7', boxShadow: '0 0 16px #70d6c7' }}
        />
      </div>

      {/* kicker */}
      <p className="relative z-10 mb-[10px] text-[11px] font-bold tracking-[0.5px] uppercase font-grotesk" style={{ color: '#70d6c7' }}>
        portfolio system loading
      </p>

      {/* title */}
      <h2
        className="relative z-10 font-orbitron leading-[0.95] tracking-[-1px]"
        style={{
          fontSize: 'clamp(32px,10vw,58px)',
          color: '#fff8ef',
          textShadow: '0 0 24px rgba(112,214,199,0.26),0 10px 30px rgba(0,0,0,0.22)',
        }}
      >
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 && <br />}
          </span>
        ))}
        <span className="animate-blinkCursor" style={{ color: '#70d6c7' }}>|</span>
      </h2>

      {/* copy */}
      {showCopy && (
        <p
          className="relative z-10 mt-[14px] text-[14px] leading-[1.6] font-inter"
          style={{ maxWidth: 360, color: 'rgba(255,248,239,0.78)' }}
        >
          {copyDisplay}
          {!showBtn && <span className="animate-blinkCursor" style={{ color: '#70d6c7' }}>|</span>}
        </p>
      )}

      {/* loader */}
      <div
        className="relative z-10 mt-7 overflow-hidden rounded-full"
        style={{ width: 'min(320px,100%)', height: 9, background: 'rgba(255,255,255,0.1)' }}
      >
        <div
          className="h-full rounded-full animate-loadingSweep"
          style={{ width: '42%', background: 'linear-gradient(90deg,#ff7a6b,#ffd166,#70d6c7)' }}
        />
      </div>

      {/* enter button */}
      {showBtn && (
        <button
          onClick={onEnter}
          disabled={exiting}
          className="relative z-10 mt-6 font-orbitron font-extrabold text-[12px] tracking-[1px] cursor-pointer rounded-full transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.04] disabled:opacity-60 disabled:pointer-events-none disabled:transform-none"
          style={{
            minWidth: 120,
            minHeight: 42,
            border: 0,
            background: '#fff8ef',
            color: '#0b1020',
            boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f0e6ff')}
          onMouseLeave={e => (e.currentTarget.style.background = '#fff8ef')}
        >
          ENTER ▶
        </button>
      )}
    </section>
  )
}
