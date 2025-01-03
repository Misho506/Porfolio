import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shared: {
          success: "#48bb78",
          error: "#f56565",
          warning: "#ed8936",
          info: "#4299e1",
          highlight: "cyan",
        },
        primary: {
          500: "#0E70ED",
          600: "#0552b3"
        },
        background: {
          dark: {
            primary: "#1a202c",
            secondary: "#2d3748",
            tertiary: "#4a5568"
          },
          primary: "#ffffff",
          secondary: "#e5e9f0",
          tertiary: "#f7fafc"
        },
        foreground: {
          dark: {
            primary: "#ffffff",
            secondary: "#e5e9f0",
            tertiary: "#f7fafc"
          },
          primary: "#1a202c",
          secondary: "#2d3748",
          tertiary: "#4a5568"
        },
        text: {
          dark: {
            primary: "#ccd6f6",
            secondary: "#8892b0",
            tertiary: "#a8b2d1"
          },
          primary: "#2d3748",
          secondary: "#8892b0",
          tertiary: "#a8b2d1"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
