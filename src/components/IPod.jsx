import { useState, useEffect } from 'react'
import { PodIntroScreen, MenuScreen} from './PodScreens'

const MENU_ITEMS = ['about', 'skills', 'projects', 'contact']

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    function update() {
      const n = new Date(), h = n.getHours(), m = n.getMinutes(), ap = h >= 12 ? 'PM' : 'AM'
      setTime(`${h % 12 || 12}:${m < 10 ? '0' : ''}${m} ${ap}`)
    }
    update()
    const msToNextMinute = (60 - new Date().getSeconds()) * 1000
    let intervalId = null
    const boot = setTimeout(() => {
      update()
      intervalId = setInterval(update, 60000)
    }, msToNextMinute)
    return () => {
      clearTimeout(boot)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])
  return time
}

export default function IPod({ onOpenFull, hidden }) {
  const [screen, setScreen] = useState('podintro') // podintro | menu | about | skills | projects | contact
  const [selIdx, setSelIdx] = useState(0)
  const clock = useClock()

  const chgText = 'CHG'


  function goMenu() { setScreen('menu') }

  function handleWheelMenu() {
    if (screen !== 'podintro') setScreen('menu')
  }
  function handleSelect() {
    if (screen === 'podintro') setScreen('menu')
    else if (screen === 'menu') onOpenFull(MENU_ITEMS[selIdx])
  }
  function handlePrev() {
    if (screen === 'menu') setSelIdx(i => (i - 1 + MENU_ITEMS.length) % MENU_ITEMS.length)
  }
  function handleNext() {
    if (screen === 'menu') setSelIdx(i => (i + 1) % MENU_ITEMS.length)
  }

  return (
    <div
      id="ipodWrap"
      className={`col-start-1 row-start-1 flex justify-center items-center transition-[opacity,transform] duration-[350ms] ease-out ${hidden ? 'opacity-0 scale-[0.82] pointer-events-none' : ''
        }`}
    >
      <div
        className="ipod-body animate-activatePod rounded-[38px] border"
        style={{
          width: 'min(300px,88vw)',
          padding: '16px 16px 26px',
          borderColor: 'rgba(180,160,220,0.4)',
        }}
      >
      {/* top bar */}
        <div className="flex justify-between items-center mb-2 px-2 overflow-hidden">
          <div className="font-orbitron text-[9px] tracking-[1px]" style={{ color: 'var(--acc2)' }}>
          </div>
          <div className="font-orbitron text-[9px] tracking-[1px]" style={{ color: 'var(--acc2)' }}>
          </div>
        </div>


        {/* screen */}
        <div
          className="pod-screen w-full rounded-[14px] overflow-hidden relative"
          style={{ height: 232, border: '2px solid rgba(100,60,160,0.35)' }}
        >
          {screen === 'podintro' && <PodIntroScreen onTap={goMenu} />} 

          {screen === 'menu' && (
            <MenuScreen
              selectedIdx={selIdx}
              onSelect={(key, idx) => {
                setSelIdx(idx)
                onOpenFull(key)
              }}
            />
          )}
        </div>

        {/* wheel */}
        <div className="mt-[14px] flex flex-col items-center">
          <div
            className="wheel-outer relative flex items-center justify-center rounded-full"
            style={{ width: 'min(148px,44vw)', height: 'min(148px,44vw)' }}
          >
            <button
              className="wb absolute top-[13px] left-1/2 -translate-x-1/2 font-orbitron text-[8px] font-extrabold tracking-[1px] cursor-pointer transition-colors duration-100 bg-transparent border-0"

              style={{ color: '#9a7ad0' }}
              onClick={() => setScreen('podintro')}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--acc)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6a4a90')}
            >
              HOME
            </button>
            {/* ▶ II bottom */}
            <span
              className="absolute bottom-[13px] left-1/2 -translate-x-1/2 font-orbitron text-[8px] font-extrabold tracking-[1px]"
              style={{ color: '#fff8ef', textShadow: '0 0 14px rgba(192,132,252,0.55)' }}
            >
              ▶ II
            </span>
            {/* ⏮ left */}
            <button
              className="absolute left-[11px] top-1/2 -translate-y-1/2 text-[14px] font-black cursor-pointer bg-transparent border-0 transition-colors duration-100"
              style={{ color: '#fff8ef', textShadow: '0 0 14px rgba(192,132,252,0.55)' }}

              onClick={handlePrev}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--acc)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9a7ad0')}
            >
              ⏮
            </button>
            {/* ⏭ right */}
            <button
              className="absolute right-[11px] top-1/2 -translate-y-1/2 text-[14px] font-black cursor-pointer bg-transparent border-0 transition-colors duration-100"
              style={{ color: '#fff8ef', textShadow: '0 0 14px rgba(192,132,252,0.55)' }}

              onClick={handleNext}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--acc)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9a7ad0')}
            >
              ⏭
            </button>
            {/* center SELECT button */}
            <button
              className="wheel-center-btn flex items-center justify-center rounded-full cursor-pointer transition-transform duration-100 active:scale-[0.93] z-10 border-0"
              style={{ width: 'min(64px,19vw)', height: 'min(64px,19vw)' }}
              onClick={handleSelect}
            >
              <span
                className="font-orbitron text-[8px] font-black tracking-[1px]"
                style={{ color: '#fff8ef', textShadow: '0 0 16px rgba(192,132,252,0.65)' }}
              >PLAY</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
