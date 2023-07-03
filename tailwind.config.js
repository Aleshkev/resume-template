/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      screens: {
        'screen': { 'raw': 'screen' },
        'print': { 'raw': 'print' },
      }
    },
    fontFamily: {
      "sans": '"Alegreya Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      "sans-sc": '"Alegreya Sans SC", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      "serif": '"Alegreya", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      "serif-sc": '"Alegreya SC", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      "mono": 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }
  },

  plugins: [],
}

