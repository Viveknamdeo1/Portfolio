import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: { primary: "#F7F5F0", secondary: "#FFFFFF", tertiary: "#EFEEE9", inverse: "#0F1115" },
        foreground: { primary: "#111318", secondary: "#4B5563", tertiary: "#6B7280", inverse: "#F8FAFC" },
        border: { subtle: "#E5E1D8", strong: "#D6D1C7", inverse: "#2A2D34" },
        accent: { primary: "#1F3A5F", secondary: "#375F8C", muted: "#E8EEF5" }
      },
      fontFamily: { sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 24px 80px rgba(17, 19, 24, 0.08)" }
    }
  },
  plugins: []
};

export default config;
