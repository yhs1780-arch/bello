import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Pretendard", "system-ui", "sans-serif"],
      },
      colors: {
        glass: "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.08)",
        neon: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 60%, #1e293b 100%)",
        "gradient-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.25), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.15), transparent)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
