/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        acc: '#a855f7',
        acc2: '#c084fc',
        mint: '#70d6c7',
        coral: '#ff7a6b',
        gold: '#ffd166',
        plum: '#7c5cff',
        screen: '#0a0812',
      },
      keyframes: {
        pulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(192,132,252,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(192,132,252,0)' },
        },
        blinkTap: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        blinkCursor: {
          '50%': { opacity: '0' },
        },
        cdSpin: { '100%': { transform: 'rotate(360deg)' } },
        eqBounce: {
          '0%,100%': { height: '28px' },
          '50%': { height: '90px' },
        },
        pixelGlide: {
          '100%': { backgroundPosition: 'center,center,138px 150px,226px 246px' },
        },
        dreamDrift: {
          '0%': { backgroundPosition: '0 0,center,center', opacity: '0.48' },
          '100%': { backgroundPosition: '46px 30px,center,center', opacity: '0.68' },
        },
        introRise: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        introFadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.1)' },
        },
        activatePod: {
          '0%': { opacity: '0', filter: 'blur(20px) brightness(3)', transform: 'scale(.97)' },
          '40%': { opacity: '.8' },
          '100%': { opacity: '1', filter: 'blur(0) brightness(1)', transform: 'scale(1)' },
        },
        orbitSpin: { '100%': { transform: 'rotate(360deg)' } },
        loadingSweep: {
          '0%': { transform: 'translateX(-105%)' },
          '55%,100%': { transform: 'translateX(245%)' },
        },
        loadingBar: {
          '0%': { width: '0%' },
          '80%': { width: '90%' },
          '100%': { width: '100%' },
        },
        fullPageIn: {
          '0%': { opacity: '0', transform: 'translateY(14px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        blinkTap: 'blinkTap 1.4s ease-in-out infinite',
        blinkCursor: 'blinkCursor 0.9s step-end infinite',
        cdSpin: 'cdSpin 26s linear infinite',
        cdSpinReverse: 'cdSpin 34s linear infinite reverse',
        eqBounce: 'eqBounce 1s ease-in-out infinite',
        pixelGlide: 'pixelGlide 16s linear infinite',
        dreamDrift: 'dreamDrift 14s ease-in-out infinite alternate',
        introRise: 'introRise 0.7s ease both',
        introFadeOut: 'introFadeOut 0.8s ease forwards',
        activatePod: 'activatePod 1.4s ease forwards',
        orbitSpin: 'orbitSpin 12s linear infinite',
        loadingSweep: 'loadingSweep 1.8s ease-in-out infinite',
        fullPageIn: 'fullPageIn 0.35s ease both',
      },
    },
  },
  plugins: [],
}
