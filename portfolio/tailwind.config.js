/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        doto: ["Doto", "sans-serif"],
      },
      colors: {
        // Theme Colors - Use these in your components
        theme: {
          primary: "hsl(var(--color-primary))",
          "primary-light": "hsl(var(--color-primary-light))",
          "primary-lighter": "hsl(var(--color-primary-lighter))",
          "primary-dark": "hsl(var(--color-primary-dark))",
          "primary-darker": "hsl(var(--color-primary-darker))",
          "primary-darkest": "hsl(var(--color-primary-darkest))",
          bg: {
            primary: "hsl(var(--color-bg-primary))",
            secondary: "hsl(var(--color-bg-secondary))",
            black: "hsl(var(--color-bg-black))",
          },
          text: {
            primary: "hsl(var(--color-text-primary))",
            secondary: "hsl(var(--color-text-secondary))",
            muted: "hsl(var(--color-text-muted))",
            tertiary: "hsl(var(--color-text-tertiary))",
          },
          border: {
            primary: "hsl(var(--color-border-primary))",
            secondary: "hsl(var(--color-border-secondary))",
          },
          overlay: {
            light: "hsl(var(--color-overlay-light))",
            medium: "hsl(var(--color-overlay-medium))",
          },
          success: "hsl(var(--color-success))",
          cyan: "hsl(var(--color-cyan))",
          teal: {
            300: "hsl(var(--color-teal-300))",
            400: "hsl(var(--color-teal-400))",
            500: "hsl(var(--color-teal-500))",
          },
        },
        // Shadcn UI Colors (existing)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};