export default function Y2kBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* spinning CDs */}
      <div
        className="disc absolute aspect-square rounded-full"
        style={{ width: 'clamp(120px,22vw,280px)', left: 'max(-80px,-7vw)', bottom: '5vh' }}
      />
      <div
        className="disc disc-r absolute aspect-square rounded-full"
        style={{ width: 'clamp(120px,22vw,280px)', right: 'max(-90px,-8vw)', top: '5vh' }}
      />

      {/* cables */}
      <div
        className="cable absolute rounded-[52%_48%_48%_52%]"
        style={{
          width: 'clamp(200px,45vw,600px)',
          height: 'clamp(100px,18vw,240px)',
          left: '-5vw', top: '10vh',
          transform: 'rotate(-12deg)',
        }}
      />
      <div
        className="cable absolute rounded-[52%_48%_48%_52%]"
        style={{
          width: 'clamp(200px,45vw,600px)',
          height: 'clamp(100px,18vw,240px)',
          right: '-7vw', bottom: '5vh',
          transform: 'rotate(168deg)',
        }}
      />

      {/* EQ bars */}
      <div
        className="absolute flex items-end gap-2 opacity-65"
        style={{ left: 'clamp(14px,5vw,70px)', top: 'clamp(60px,15vh,140px)', height: '90px' }}
      >
        {[0, -0.2, -0.4, -0.1, -0.55, -0.3].map((delay, i) => (
          <span
            key={i}
            className="w-[9px] rounded-full animate-eqBounce"
            style={{
              height: '28px',
              background: 'linear-gradient(180deg,#ffd166,#ff7a6b,#70d6c7)',
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* pixel dots */}
      <div className="ppix absolute inset-0" />
    </div>
  )
}
