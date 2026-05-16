import React, {
  createContext,
  useContext,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const themes = {

    blue: {
      background:
        "linear-gradient(135deg,#081120,#111c44)",

      card:
        "rgba(30,41,59,0.92)",

      cardSecondary:
        "#1e293b",

      text: "white",

      primary: "#3b82f6",

      secondary: "#9333ea",

      glow:
        "rgba(59,130,246,0.15)",
    },

    purple: {
      background:
        "linear-gradient(135deg,#14071f,#2a1144)",

      card:
        "rgba(45,27,61,0.92)",

      cardSecondary:
        "#2d1b3d",

      text: "white",

      primary: "#9333ea",

      secondary: "#c084fc",

      glow:
        "rgba(147,51,234,0.18)",
    },

    neon: {
      background:
        "linear-gradient(135deg,#041414,#0d2a2a)",

      card:
        "rgba(16,34,34,0.92)",

      cardSecondary:
        "#102222",

      text: "white",

      primary: "#00f5d4",

      secondary: "#00bbf9",

      glow:
        "rgba(0,245,212,0.18)",
    },

    light: {
      background:
        "linear-gradient(135deg,#e2e8f0,#f8fafc)",

      card:
        "rgba(255,255,255,0.95)",

      cardSecondary:
        "#ffffff",

      text: "#111827",

      primary: "#2563eb",

      secondary: "#7c3aed",

      glow:
        "rgba(37,99,235,0.12)",
    },
  };

  const [currentTheme, setCurrentTheme] =
    useState("blue");

  const theme = themes[currentTheme];

  return (

    <ThemeContext.Provider
      value={{
        theme,
        currentTheme,
        setCurrentTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}