/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require('tailwindcss/plugin')

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        unica: ['Unica One', ...defaultTheme.fontFamily.sans],
        clash: ['Clash Display', ...defaultTheme.fontFamily.sans],
        typo: ['Typo Hoop Demo', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradImg': "url('/src/assets/images/Purple-Lens-Flare-PNG.png')",
        'heroImg': "url('/src/assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png')",
        'policyImg': "url('/src/assets/images/Vector.png')",
      },
      gradientColorStopPositions: {
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%',
        30: '30%',
        35: '35%',
        40: '40%',
        45: '45%',
        50: '50%',
        55: '55%',
        60: '60%',
        70: '70%',
      },
      // custom user configuration
      bgGradientDeg: {
        75: '75deg',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFF',
      'darkWhite': 'rgba(255, 255, 255, 0.75)',
      'color1': '#150E28',
      'color2': '#903AFF',
      'color3': '#D434FE',
      'color4': '#FE34B9',
      'color5': 'rgba(144, 58, 255, 0.12)',
      'color6': 'rgba(212, 52, 254, 0.12)',
      'color7': '#2DE100',
      'navline': 'rgba(255, 255, 255, 0.18)',
    }
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      35: '35deg',
                      40: '40deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      345: '315deg',
                  }
              )
          }
       )
    })
  ],
})

