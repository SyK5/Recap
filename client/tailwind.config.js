export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html,css}',
  ],
  theme: {
    extend: {
      colors: {
        lightMain: "#ffffff",
        lightSecondary: "#e0e0e5",
        lightAccent: "#5865F2",
        lightText: "#2E3338",
        lightBorder: "#D1D5DB",
        darkMain: "#36393F",
        darkSecondary: "#2F3136",
        darkAccent: "#5865F2",
        darkText: "#FFFFFF",
        darkBorder: "#4F545C",
        grau: {
          1: '#f2f3f5',
          2: '#2E3338',
          3: '#D1D5DB',
          4: '#36393F',
          5: '#2F3136',
          6: '#4F545C',
        },
      },
    },
  },
  plugins: [],
};
