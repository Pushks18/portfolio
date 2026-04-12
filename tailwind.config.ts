import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          deep: "#0A0E1A",
          panel: "#111827",
          console: "#1E293B",
        },
        amber: {
          primary: "#F59E0B",
        },
        cyan: {
          accent: "#06B6D4",
        },
        status: {
          green: "#22C55E",
        },
        text: {
          light: "#E2E8F0",
          muted: "#94A3B8",
          dim: "#475569",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
