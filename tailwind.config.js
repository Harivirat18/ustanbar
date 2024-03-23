/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1280px",
    },
    colors: {
      'purple': 'rgb(162 28 175)',
      'gray-light': 'rgb(100 116 139)',
      'white': '#fff',
      'cyan': 'rgb(236 254 255)',
      'star': 'rgb(250 204 21)',
      'gray': '#D3D3D3',
      'black': '#000',
      'footer-bg':'rgb(129 69 243)'
    },
    extend: {},
  },
  plugins: [],
}

