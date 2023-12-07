import type { Config } from "tailwindcss";
export const BREAKPOINTS = {
  tablet: "1024px",
  "desktop-sm": "1280px",
  "desktop-lg": "1728px",
};

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      maxWidth: {
        limit: "1360px",
        "tablet-limit": "944px",
        "mobile-limit": "390px",
      },
      screens: BREAKPOINTS,
      transitionProperty: {
        left: "left",
      },
      boxShadow: {
        custom: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
        glassy: "0 0 10px 1000px rgba(255,255,255,0.6)",
        menu: "0px 0px 100px 0px rgba(0, 92, 141, 0.20)",
        tooltip: "-1px -1px 1px hsla(0,0%,71%,.102)",
        dropdown: "0px 10px 10px 0px rgba(0, 0, 0, 0.15)",
        input: "2px 4px 11px 5px rgba(23, 124, 186, 0.10)",
        insightCard: "0px 0px 36px 0px rgba(23, 124, 186, 0.10)",
        form: "0px 4px 8px 4px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        sans: [
          "proxima-nova",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      fontSize: {
        "mobile/heading-1": [
          "54px",
          {
            fontWeight: 800,
            lineHeight: "1",
          },
        ],
        "mobile/heading-2": [
          "36px",
          {
            fontWeight: 800,
            lineHeight: "1.1",
          },
        ],
        "mobile/heading-3": [
          "22px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "mobile/heading-4": [
          "20px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "mobile/subhead-l": [
          "18px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "3.6px",
          },
        ],
        "mobile/subhead-m": [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "1.2",
            letterSpacing: "3.2px",
          },
        ],
        "mobile/subhead-s": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "2.8px",
          },
        ],
        "mobile/subhead-s-narrow": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "1.2",
            letterSpacing: "1.4px",
          },
        ],
        "mobile/subhead-xs": [
          "12px",
          {
            fontWeight: 700,
            lineHeight: "1.2",
            letterSpacing: "2.4px",
          },
        ],
        "mobile/body-l": [
          "16px",
          {
            lineHeight: "1.2",
          },
        ],
        "mobile/body-m": [
          "16px",
          {
            lineHeight: "1.5",
          },
        ],
        "mobile/body-m-bold": [
          "16px",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "mobile/body-s": [
          "14px",
          {
            lineHeight: "1.3",
          },
        ],
        "mobile/body-s-bold": [
          "14px",
          {
            fontWeight: 700,
            lineHeight: "1.3",
          },
        ],
        "mobile/body-xs": [
          "13px",
          {
            lineHeight: "1.13",
          },
        ],
        "mobile/cta": [
          "16px",
          {
            fontWeight: 700,
            lineHeight: "1",
          },
        ],
        "mobile/link": [
          "14px",
          {
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "1.12px",
          },
        ],
        "tablet/heading-1": [
          "44px",
          {
            fontWeight: 800,
            lineHeight: "1.1",
          },
        ],
        "tablet/heading-2": [
          "36px",
          {
            fontWeight: 800,
            lineHeight: "1.05",
            letterSpacing: "-0.36px",
          },
        ],
        "tablet/heading-3": [
          "28px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "tablet/heading-4": [
          "20px",
          {
            fontWeight: 700,
            lineHeight: "1.05",
            letterSpacing: "-0.20px",
          },
        ],
        "tablet/heading-5": [
          "18px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "tablet/subhead-l": [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "4.8px",
          },
        ],
        "tablet/subhead-m": [
          "18px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "3.6px",
          },
        ],
        "tablet/subhead-s": [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "3.2px",
          },
        ],
        "tablet/subhead-s-narrow": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "1.4px",
          },
        ],
        "tablet/body-xl": [
          "24px",
          {
            fontWeight: 400,
            lineHeight: "1.2",
          },
        ],
        "tablet/subhead-xs": [
          "12px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "1.2px",
          },
        ],
        "tablet/body-l": [
          "20px",
          {
            lineHeight: "1.2",
          },
        ],
        "tablet/body-m": [
          "18px",
          {
            lineHeight: "1.5",
          },
        ],
        "tablet/body-s": [
          "16px",
          {
            lineHeight: "1.4",
          },
        ],
        "tablet/cta": [
          "18px",
          {
            fontWeight: 700,
            lineHeight: "1",
          },
        ],
        "tablet/link": [
          "16px",
          {
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "1.28px",
          },
        ],
        "desktop/heading-1": [
          "67px",
          {
            fontWeight: 800,
            lineHeight: "1.05",
            letterSpacing: "-0.67px",
          },
        ],
        "desktop/heading-2": [
          "50px",
          {
            fontWeight: 800,
            lineHeight: "1.1",
          },
        ],
        "desktop/heading-3": [
          "34px",
          {
            fontWeight: 800,
            lineHeight: "1.05",
            letterSpacing: "-0.34px",
          },
        ],
        "desktop/heading-4": [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "desktop/heading-5": [
          "20px",
          {
            fontWeight: 700,
            letterSpacing: "-0.20px",
          },
        ],
        "desktop/heading-6": [
          "18px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
            letterSpacing: "normal",
          },
        ],
        "desktop/heading-7": [
          "16px",
          {
            fontWeight: 700,
            lineHeight: "1.1",
          },
        ],
        "desktop/subhead-xl": [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "4.8px",
          },
        ],
        "desktop/subhead-l": [
          "18px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "3.6px",
          },
        ],
        "desktop/subhead-m": [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "1.2",
            letterSpacing: "3.2px",
          },
        ],
        "desktop/subhead-s": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "2.8px",
          },
        ],
        "desktop/subhead-s-narrow": [
          "14px",
          {
            fontWeight: 600,
            lineHeight: "1",
            letterSpacing: "1.4px",
          },
        ],
        "desktop/subhead-xs": [
          "12px",
          {
            fontWeight: 700,
            lineHeight: "1.2",
            letterSpacing: "2.4px",
          },
        ],
        "desktop/body-xl": [
          "32px",
          {
            lineHeight: "1.2",
          },
        ],
        "desktop/body-l": [
          "24px",
          {
            lineHeight: "1.2",
          },
        ],
        "desktop/body-m": [
          "18px",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "desktop/body-m-bold": [
          "18px",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "desktop/body-s": [
          "16px",
          {
            lineHeight: "1.4",
          },
        ],
        "desktop/body-xs": [
          "14px",
          {
            lineHeight: "1.4",
          },
        ],
        "desktop/cta": [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "1",
          },
        ],
        "desktop/link": [
          "20px",
          {
            fontWeight: 700,
            lineHeight: "1",
            letterSpacing: "1.6px",
          },
        ],
      },
      letterSpacing: {
        tightest: "0.4px",
        wide: "1.6px",
        wider: "2.5px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        menuBorder: "rgba(1, 1, 1, 0.10)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        glass: "#ffffff99",
        primaryEarthGreen: "rgba(112, 191, 84, <alpha-value>)",
        primarySunOrange: "rgba(250, 162, 27, <alpha-value>)",
        primaryOceanBlue: "rgba(17, 138, 203, <alpha-value>)",
        primarySkyBlue: "rgba(0, 186, 233, <alpha-value>)",
        primarySpaceGrey: "rgba(46, 56, 65, <alpha-value>)",
        secondarySlateBlue: "#36647D",
        secondaryBlanc: "rgba(241, 241, 241, <alpha-value>)",
        baseBlack: "rgba(1, 1, 1 , <alpha-value>)",
        muteBackground: "#f4f4f4",
        davyGray: "#4F4E50",
        slateGray: "#2E3841",
        neroBlack: "#252525",
        cometBlack: "#646470",
        whiteSmoke: "#f1f1f1",
        charcoalGray: "#585858",
        deepZinc: "#1F262D",
        lightGray: "#A0A0A8",
        slate: "#636970",
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
        lg: "500px",
        md: "30px",
        sm: "3px",
        "sm-alt": "8px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        reveal: "reveal 200ms ease-in-out 1s forwards",
        "blur-bg-move": "blur-bg-move 1000ms linear infinite",
        slide: "slide 20s infinite linear",
      },
      gridAutoColumns: {
        full: "100%",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(45deg, #FCB549 -134.82%, #8ECD7B -17.34%, #34C8ED 140.26%)",
        oceanBridgeBottomRight:
          "linear-gradient(135deg, #118ACB 35%, #56B174 75%, #F3E137 85%, #FAA21B)",
        oceanBridgeBottomLeft:
          "linear-gradient(225deg, #118ACB 35%, #56B174 75%, #F3E137 85%, #FAA21B)",
        oceanBridgeTopRight:
          "linear-gradient(45deg, #118ACB 35%, #56B174 75%, #F3E137 85%, #FAA21B)",
        oceanBridgeTopLeft:
          "linear-gradient(315deg, #118ACB 35%, #56B174 75%, #F3E137 85%, #FAA21B)",
        frostedGlass:
          "linear-gradient(180deg, #ffffff80 -2.67%, #fffffff0 20.12%, #ffffffe6 53.47%, #ffffffd9 80.71%, #ffffff66 104.06%)",
        refreshSkyline:
          "linear-gradient(90deg, #8ECD7B 17.18%, #34C8ED 87.26%, #118ACB 99.92%)",
        refreshSkylineVertical:
          "linear-gradient(180deg, #8ECD7B 17.18%, #34C8ED 87.26%, #118ACB 99.92%)",
        transparent:
          "linear-gradient(to right, rgba(233, 233, 233, 1), rgba(233, 233, 233, 0))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
