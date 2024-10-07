import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
// precompile dynamic color classes
import colors from './node_modules/tailwindcss/colors';
const safelist = [];
const extendedColors: { [key: string]: string | { [key: number]: string } } = {};
const colorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

for (const key in colors) {
  if (
    // avoid deprecated color warnings && non custom colors
    ![
      'lightBlue',
      'warmGray',
      'trueGray',
      'coolGray',
      'blueGray',
      'inherit',
      'current',
      'transparent',
      'black',
      'white',
    ].includes(key)
  ) {
    extendedColors[key] = colors[key as keyof typeof colors];

    for (const value of colorValues) {
      safelist.push(`bg-${key}-${value}`);
      safelist.push(`text-${key}-${value}`);
    }
  }
}

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'up-down': 'up-down 2s linear infinite',
      },
      screens: {
        xs: '475px',
      },
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
        spacing: 'margin, padding',
      },
      colors: extendedColors,
    },
  },
  safelist,
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  darkMode: 'class',
} satisfies Config;
