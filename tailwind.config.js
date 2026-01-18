/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
        "pulse-fast-short": {
          "0%, 100%": { opacity: "0", transform: "translateX(0)" },
          "25%": { opacity: "0.3", transform: "translateX(5px)" },
          "75%": { opacity: "0.3", transform: "translateX(-5px)" },
        },
        shine: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "100%" },
        },

        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px) translateX(5px) rotate(-90deg)",
            color: "#ff5569",
            filter: "blur(5px)",
          },
          "30%": {
            opacity: "1",
            transform: "translateY(4px) translateX(0) rotate(0)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateX(0) rotate(0)",
          },
        },
        wave: {
          "30%, 100%": { opacity: "1", transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)", color: "#ff5569" },
        },
        takeOff: {
          "0%": { opacity: "1" },
          "60%": {
            opacity: "1",
            transform: "translateX(70px) rotate(45deg) scale(2)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(160px) rotate(45deg) scale(0)",
          },
        },
        land: {
          "0%": {
            transform:
              "translateX(-60px) translateY(30px) rotate(-50deg) scale(2)",
            opacity: "0",
            filter: "blur(3px)",
          },
          "100%": {
            transform: "translateX(0) translateY(0) rotate(0)",
            opacity: "1",
            filter: "blur(0)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(4) rotate(-40deg)",
            color: "#ff5569",
            filter: "blur(4px)",
          },
          "100%": { opacity: "1", transform: "scale(1)", filter: "blur(0)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "pulse-fast-short": "pulse-fast-short 0.8s ease-out 1",
        shine: "shine 1.5s ease-in-out infinite",

        "spin-slow": "spin 2s linear infinite",
        slideDown: "slideDown 0.8s ease forwards",
        wave: "wave 0.5s ease forwards",
        takeOff: "takeOff 0.8s linear forwards",
        land: "land 0.6s ease forwards",
        appear: "appear 1.2s ease forwards 0.8s",
      },
    },
  },
  plugins: [],
};
