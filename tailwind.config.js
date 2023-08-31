/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "pastel",
      "dracula",
      "night",
      "coffee",
      "dark",
      "halloween",
      "black",
    ],
    darkTheme: "dark",
  },
  theme: {
    extend: {
      backgroundImage: {
        'profile-photo-bw': "url('/JoshBW.jpeg')",
        'computer-background': "url('/computerBackground.jpg')",
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 2s ease infinite alternate',
      },
    },
  }
};
