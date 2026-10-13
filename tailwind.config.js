export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#060A13',
        panel: '#0C1322',
        edge: '#1B2540',
        cyan: '#4FD8FF',
        amber: '#FFAE34',
        mist: '#8C9AB8',
        snow: '#E9EEF8',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
}
