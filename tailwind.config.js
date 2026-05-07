/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:     { 50:'#FFFFFF', 100:'#FAFAF7', 200:'#F0EEE8', 300:'#E4E0D5' },
        ink:       { 900:'#1F2937', 700:'#384252', 500:'#5B6573', 400:'#8892A0' },
        mist:      { 100:'#E4ECF2', 300:'#A9BDCE', 500:'#6F8FA8', 700:'#4D6B85' },
        coral:     { 100:'#FBE8DF', 300:'#EFB29B', 500:'#D88B6E', 600:'#C46F50', 700:'#A4593F' },
        champagne: { 200:'#E8DEC4', 400:'#C9B894', 600:'#9F8E68' },
        ember:     { 500:'#C46F50' },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,41,55,0.04), 0 8px 24px -8px rgba(31,41,55,0.08)',
        lift: '0 2px 4px rgba(31,41,55,0.05), 0 20px 40px -16px rgba(31,41,55,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'airy-mesh': 'radial-gradient(at 15% 0%, #E4ECF2 0%, transparent 55%), radial-gradient(at 95% 20%, #FBE8DF 0%, transparent 50%)',
      },
      animation: {
        'fade-up':  'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':  'fadeIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-in': 'slideIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-14px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
