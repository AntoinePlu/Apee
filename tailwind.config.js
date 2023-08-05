/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      gray: generateScale("gray"),
      indigo: generateScale("indigo"),
      grass: generateScale("grass"),
      orange: generateScale("orange"),
      tomato: generateScale("tomato"),
      transparent: "transparent",
      apee: {
        black: "hsl(0, 0%, 7%)",
        darkGray: "hsl(0, 0%, 9%)",
        gamingYellow: "#ffac30",
        gamingOrange: "#df5b22",
        gamingPurple: "#8c35fb",
        ctaOrange: "#ea504d",
        ctaYellow: "#d88d20",
        ctaEgg: "#d8b31f",
      },
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
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

function generateScale(color) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;
    return [
      [id, `var(--${color}-${id})`],
      ["background", `var(--${color}-1)`],
      ["surface", `var(--${color}-2)`],
      ["component1", `var(--${color}-3)`],
      ["component2", `var(--${color}-4)`],
      ["component3", `var(--${color}-5)`],
      ["border1", `var(--${color}-6)`],
      ["border2", `var(--${color}-7)`],
      ["border3", `var(--${color}-8)`],
      ["solid", `var(--${color}-9)`],
      ["solid-hover", `var(--${color}-10)`],
      ["text-low", `var(--${color}-11)`],
      ["text-high", `var(--${color}-12)`],
    ];
  }).flat();
  return Object.fromEntries(scale);
}
