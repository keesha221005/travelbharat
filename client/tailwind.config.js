/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F6F1E7',
        'paper-dim': '#EDE6D6',
        ink: '#1B1E3D',
        'ink-soft': '#4A4D6B',
        madder: '#B23A48',
        'madder-dark': '#8C2C38',
        turmeric: '#E3A857',
        teal: '#1F5C56',
        sandstone: '#C97C5D',
        line: '#D8CFB8'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-work-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace']
      },
      letterSpacing: {
        widest2: '0.18em'
      }
    }
  },
  plugins: []
};
