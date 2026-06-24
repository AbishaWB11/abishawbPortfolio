import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'

function hexRgb(h) {
  return `${ parseInt(h.slice(1, 3), 16) },${ parseInt(h.slice(3, 5), 16) },${ parseInt(h.slice(5, 7), 16) }`;
}

const WarpCanvas = forwardRef(function WarpCanvas(_, ref) {
  const canvasRef = useRef(null)
  const busyRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }

  }, [])

  useImperativeHandle(ref, () => ({
    runWarp(color, midCb) {
      if (busyRef.current) return

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      busyRef.current = true

      const canvas = canvasRef.current

      if (!canvas) {
        busyRef.current = false
        return
      }

      canvas.style.pointerEvents = 'all'

      const ctx = canvas.getContext('2d')

      const W = canvas.width
      const H = canvas.height

      const cx = W / 2
      const cy = H / 2

      let frame = 0
      const DURATION = 50

      function draw() {
        ctx.clearRect(0, 0, W, H)

        const progress = frame / DURATION

        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2

        // Soft background fade
        ctx.fillStyle = `rgba(8,6,15,${ease * 0.55})`
        ctx.fillRect(0, 0, W, H)

        // Expanding glow ring
        const radius = ease * Math.max(W, H) * 0.65

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)

        ctx.strokeStyle = `rgba(${hexRgb(color)},${0.35 * (1 - progress)})`
        ctx.lineWidth = 10

        ctx.shadowBlur = 60
        ctx.shadowColor = color

        ctx.stroke()

        // Soft center glow
        const glow = ctx.createRadialGradient(
          cx,
          cy,
          0,
          cx,
          cy,
          radius * 0.8
        )

        glow.addColorStop(
          0,
          `rgba(${hexRgb(color)},0.15)`
        )

        glow.addColorStop(
          0.5,
          `rgba(${hexRgb(color)},0.05)`
        )

        glow.addColorStop(
          1,
          'rgba(0,0,0,0)'
        )

        ctx.fillStyle = glow
        ctx.fillRect(0, 0, W, H)

        // Switch page at midpoint
        if (frame === Math.floor(DURATION / 2)) {
          midCb?.()
        }

        frame++

        if (frame >= DURATION) {
          ctx.clearRect(0, 0, W, H)
          canvas.style.pointerEvents = 'none'
          busyRef.current = false
          return
        }

        rafRef.current = requestAnimationFrame(draw)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

  }))

  return <canvas ref={canvasRef} id="warpCanvas" />
})

export default WarpCanvas