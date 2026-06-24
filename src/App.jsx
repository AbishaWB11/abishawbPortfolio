import { useState, useRef, useCallback } from 'react'
import WarpCanvas from './components/WarpCanvas'
import Y2kBg from './components/Y2kBg'
import ThemeToggle from './components/ThemeToggle'
import IntroScreen from './components/IntroScreen'
import IPod from './components/IPod'
import FullPage from './components/FullPage'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [appState, setAppState] = useState('intro') // intro | pod | full
  const [introExiting, setIntroExiting] = useState(false)
  const [fullSection, setFullSection] = useState(null)
  const warpRef = useRef(null)

  const runWarp = useCallback((color, mid) => {
    warpRef.current?.runWarp(color, mid)
  }, [])

  function handleEnterPod() {
    setIntroExiting(true)
    setTimeout(() => setAppState('pod'), 800)
  }

  function handleOpenFull(section) {
    runWarp('#c084fc', () => {
      setFullSection(section)
      setAppState('full')
    })
  }

  function handleCloseFull() {
    runWarp('#c084fc', () => {
      setAppState('pod')
      setFullSection(null)
    })
  }

  function handleToggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    runWarp(next === 'dark' ? '#c084fc' : '#a855f7', () => setTheme(next))
  }

  return (
    <div
      id="shell"
      data-theme={theme}
      className="shell relative min-h-screen w-full flex items-center justify-center font-grotesk overflow-hidden"
      style={{ padding: '20px 12px 24px' }}
    >
      {/* shimmer overlay */}
      <div className="shell-shimmer absolute inset-0 pointer-events-none z-0" />

      {/* Y2K background */}
      <Y2kBg />

      {/* warp canvas */}
      <WarpCanvas ref={warpRef} />

      {/* theme toggle */}
      <ThemeToggle theme={theme} onToggle={handleToggleTheme} />

      {/* INTRO */}
      {(appState === 'intro') && (
        <IntroScreen onEnter={handleEnterPod} exiting={introExiting} />
      )}

      {/* iPOD + FULL PAGE — stacked & centered in same grid cell */}
      {(appState === 'pod' || appState === 'full') && (
        <div className="relative z-10 grid w-full max-w-[640px] mx-auto place-items-center px-3">
          <IPod
            onOpenFull={handleOpenFull}
            hidden={appState === 'full'}
          />
          {appState === 'full' && fullSection && (
            <FullPage
              section={fullSection}
              visible={true}
              onBack={handleCloseFull}
            />
          )}
        </div>
      )}
    </div>
  )
}
