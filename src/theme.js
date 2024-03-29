import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        // Palette
        indigo: {
          900: "#cddbe6",
          800: "#9ab7cd",
          700: "#6894b3",
          600: "#35709a",
          500: "#034c81",
          400: "#023d67",
          300: "#022e4d",
          200: "#011e34",
          100: "#010f1a"
        },
        celestialBlue: {
          900: "#d5edfe",
          800: "#abdafd",
          700: "#80c8fc",
          600: "#56b5fb",
          500: "#2ca3fa",
          400: "#2382c8",
          300: "#1a6296",
          200: "#124164",
          100: "#092132"
        },
        ruddyBlue: {
          900: "#deecfd",
          800: "#bddafb",
          700: "#9dc7f8",
          600: "#7cb5f6",
          500: "#5ba2f4",
          400: "#4982c3",
          300: "#376192",
          200: "#244162",
          100: "#122031"
        },
        gray: {
          900: "#f4f1ee",
          800: "#e9e4dd",
          700: "#dfd6cc",
          600: "#d4c9bb",
          500: "#c9bbaa",
          400: "#a19688",
          300: "#797066",
          200: "#504b44",
          100: "#282522"
        },
        AntiFlashWhite: {
          900: "#fdfdfd",
          800: "#fafbfb",
          700: "#f8f9fa",
          600: "#f5f7f8",
          500: "#f3f5f6",
          400: "#c2c4c5",
          300: "#929394",
          200: "#616262",
          100: "#313131"
        },
        white: {
          900: "#ffffff",
          800: "#ffffff",
          700: "#ffffff",
          600: "#ffffff",
          500: "#ffffff",
          400: "#cccccc",
          300: "#999999",
          200: "#666666",
          100: "#333333"
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        // Palette POM
        indigo: {
          100: "#cddbe6",
          200: "#9ab7cd",
          300: "#6894b3",
          400: "#35709a",
          500: "#034c81",
          600: "#023d67",
          700: "#022e4d",
          800: "#011e34",
          900: "#010f1a"
        },
        celestialBlue: {
          100: "#d5edfe",
          200: "#abdafd",
          300: "#80c8fc",
          400: "#56b5fb",
          500: "#2ca3fa",
          600: "#2382c8",
          700: "#1a6296",
          800: "#124164",
          900: "#092132"
        },
        ruddyBlue: {
          100: "#deecfd",
          200: "#bddafb",
          300: "#9dc7f8",
          400: "#7cb5f6",
          500: "#5ba2f4",
          600: "#4982c3",
          700: "#376192",
          800: "#244162",
          900: "#122031"
        },
        gray: {
          100: "#f4f1ee",
          200: "#e9e4dd",
          300: "#dfd6cc",
          400: "#d4c9bb",
          500: "#c9bbaa",
          600: "#a19688",
          700: "#797066",
          800: "#504b44",
          900: "#282522"
        },
        AntiFlashWhite: {
          100: "#fdfdfd",
          200: "#fafbfb",
          300: "#f8f9fa",
          400: "#f5f7f8",
          500: "#f3f5f6",
          600: "#c2c4c5",
          700: "#929394",
          800: "#616262",
          900: "#313131"
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
        
        white_maipu: {
          100: "#fcfcfc",
          200: "#f9f9f9",
          300: "#f5f5f5",
          400: "#f2f2f2",
          500: "#efefef",
          600: "#bfbfbf",
          700: "#8f8f8f",
          800: "#606060",
          900: "#303030",
        },
        blue_maipu: {
          100: "#cfd1db",
          200: "#9fa2b7",
          300: "#6f7492",
          400: "#3f456e",
          500: "#0f174a",
          600: "#0c123b",
          700: "#090e2c",
          800: "#06091e",
          900: "#03050f",
        },
        purple_maipu: {
          100: "#ddddee",
          200: "#bcbbde",
          300: "#9a98cd",
          400: "#7976bd",
          500: "#5754ac",
          600: "#46438a",
          700: "#343267",
          800: "#232245",
          900: "#111122",
        },
        pink_maipu: {
          100: "#facde6",
          200: "#f59acc",
          300: "#f068b3",
          400: "#eb3599",
          500: "#e60380",
          600: "#b80266",
          700: "#8a024d",
          800: "#5c0133",
          900: "#2e011a",
        },
        pink_maipu_v2: {
          100: "#fff0f2",
          200: "#ffe1e5",
          300: "#ffd1d9",
          400: "#ffc2cc",
          500: "#ffb3bf",
          600: "#cc8f99",
          700: "#996b73",
          800: "#66484c",
          900: "#332426",
        },
        blue_maipu_v2: {
          100: "#d2f5f4",
          200: "#a4ebea",
          300: "#77e2df",
          400: "#49d8d5",
          500: "#1cceca",
          600: "#16a5a2",
          700: "#117c79",
          800: "#0b5251",
          900: "#062928",
        },
        green: {
          100: "#e5f5d1",
          200: "#caeba4",
          300: "#b0e176",
          400: "#95d749",
          500: "#7bcd1b",
          600: "#62a416",
          700: "#4a7b10",
          800: "#31520b",
          900: "#192905",
        },
        red: {
          100: "#f9cfcf",
          200: "#f49f9f",
          300: "#ee6e6e",
          400: "#e93e3e",
          500: "#e30e0e",
          600: "#b60b0b",
          700: "#880808",
          800: "#5b0606",
          900: "#2d0303",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
