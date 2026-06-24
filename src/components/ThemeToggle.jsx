export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="theme-toggle fixed top-2 right-2 z-[600] flex flex-col items-center justify-center gap-[5px] rounded-l-xl border border-r-0 p-[9px_7px] cursor-pointer transition-colors duration-300 max-[480px]:scale-90 max-[480px]:origin-right"
      style={{
        background: 'rgba(192,132,252,0.13)',
        borderColor: 'rgba(192,132,252,0.28)',
        paddingRight: 'max(7px, env(safe-area-inset-right))',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(192,132,252,0.24)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(192,132,252,0.13)')}
    >
      {/* track */}
      <div
        className="w-5 h-10 rounded-xl relative"
        style={{ background: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.3)' }}
      >
        <div
          className={`t-knob absolute left-[2px] top-[2px] w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isDark ? '' : 't-knob-light'}`}
        >
          {isDark ? '🌙' : '☀️'}
        </div>
      </div>
      <span
        className="font-orbitron text-[7px] font-bold tracking-widest"
        style={{
          color: 'var(--acc2)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          letterSpacing: '1px',
        }}
      >
        {isDark ? 'DARK' : 'LIGHT'}
      </span>
    </button>
  )
}
