
import { Direction, ThemeOptions, createTheme } from "@mui/material";
import { LanguagesType } from "./languages";

export const drawerWidth = 260;
const mode = 'light'
const lightColor = "58, 53, 65"
const darkColor = "231, 227, 252"
const mainColor = mode === "light" ? lightColor : darkColor
export interface IThemeConfig {
  themeMode: "light" | "dark";
  container: boolean;
  drawerOpen: boolean;
  miniDrawer: boolean;
  lang: LanguagesType;
}
export const config: IThemeConfig = {
  themeMode: "light",
  container: true,
  drawerOpen: true,
  miniDrawer: true,
  lang: "en",
};

export const languageMapper: Record<LanguagesType, { direction: Direction }> = {
  en: {
    direction: "ltr",
  },
  ar: {
    direction: "rtl",
  },
  fa: {
    direction: "rtl",
  },
};
function defineFont(lang){
  switch (lang) {
    case 'fa':
      return 'yekan-bakh'
    case 'ar':
      return 'manrope'
      case 'en':
        return 'roboto'
    default:
      return 'roboto'
  }
}

const getThemeOptions = (language: LanguagesType): ThemeOptions => {
  const config = languageMapper[language];

  return {
    direction: config.direction,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
      @font-face {
        font-family: 'yekan-bakh';
        src: url('/assets/fonts/yekanBakh/YekanBakh-VF.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
      }
      @font-face {
        font-family: 'noto-Arabic';
        src: url('/assets/fonts/noto-Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
      }
      @font-face {
          font-family: 'roboto';
          src: url('/assets/fonts/roboto/Roboto-Medium.ttf') format('truetype');
          font-weight: 100 900;
          font-display: swap;
      }
      @font-face {
          font-family: 'manrope';
          src: url('/assets/fonts/manrope/Manrope-VariableFont_wght.ttf') format('truetype');
          font-weight: 100 900;
          font-display: swap;
      }`,
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: defineFont(language),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontWeight: 600,
        fontSize: "2.375rem",
        lineHeight: 1.21,
      },
      h2: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: 1.27,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.33,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.57,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.66,
      },
      body1: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
      },
      body2: {
        fontSize: "0.75rem",
        lineHeight: 1.66,
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.57,
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: 1.66,
      },
      overline: {
        lineHeight: 1.66,
      },
      button: {
        textTransform: "capitalize",
      },
    },
    palette: {
      
      // return {
        common: {
          black: "#000",
          white: "#FFF"
        },
        // mode: mode,
        primary: {
          light: "#5c6bc0",
          main: "#272930",
          dark: "#08090b",
          contrastText: "#000"
        },
        secondary: {
          light: "#00e676",
          main: "#47B477",
          dark: "#1b5e20",
          contrastText: "#2e7d32"
        },
        success: {
          light: "#80deea",
          main: "#1fc072",
          dark: "#00acc1",
          contrastText: "#FFF"
        },
        error: {
          light: "#FF6166",
          main: "#FF4C51",
          dark: "#E04347",
          contrastText: "#FFF"
        },
        warning: {
          light: "#FFCA64",
          main: "#FFB400",
          dark: "#E09E00",
          contrastText: "#FFF"
        },
        info: {
          light: "#32BAFF",
          main: "#36454F",
          dark: "#139CE0",
          contrastText: "#FFF"
        },
        grey: {
          50: "#FFFFFC",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#72788D",
          800: "#424242",
          900: "#212121",
          A100: "#D5D5D5",
          A200: "#AAAAAA",
          A400: "#616161",
          A700: "#303030"
        },
        text: {
          primary: `rgba(${mainColor}, 0.87)`,
          secondary: `rgba(${mainColor}, 0.68)`,
          disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
          paper: mode === "light" ? "#fff" : "#1E1E1E",
          default: mode === "light" ? "#fff" : "#121212"
        },
        action: {
          active: `rgba(${mainColor}, 0.54)`,
          hover: `rgba(${mainColor}, 0.04)`,
          selected: `rgba(${mainColor}, 0.08)`,
          disabled: `rgba(${mainColor}, 0.3)`,
          disabledBackground: `rgba(${mainColor}, 0.18)`,
          focus: `rgba(${mainColor}, 0.12)`
        },
       
      // }
    }
  };
};



export const enTheme = createTheme(getThemeOptions("en"));
export const arTheme = createTheme(getThemeOptions("ar"));
export const faTheme = createTheme(getThemeOptions("fa"));