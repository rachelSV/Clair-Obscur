/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3EDE3",
          50: "#FBF8F0",
          100: "#F8F3E9",
          200: "#F3EDE3"
        },
        ink: {
          DEFAULT: "#2F3237",
          soft: "#4A4F57"
        },
        mist: "#A2A6AC",
        ivory: "#FAF7F2",
        night: "#111213",
        gold: {
          50: "#FFF8E4",
          200: "#F3DFAC",
          400: "#D8B866",
          500: "#C9A24A",   // base
          600: "#B3873B",
          700: "#8F6B2D"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Satisfy", "cursive"]
      },
      boxShadow: {
        soft: "0 6px 16px rgba(17,18,19,0.06)",
        card: "0 4px 10px rgba(17,18,19,0.05)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      backgroundImage: {
        // dégradé doré réutilisable
        "gold-sheen":
          "linear-gradient(90deg, #B3873B 0%, #E6C98B 22%, #B3873B 45%, #FFF6D8 60%, #CDAF6E 78%, #8F6B2D 100%)",
        // bruit fin (SVG inline)
        "paper-noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)' /></svg>\")"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};