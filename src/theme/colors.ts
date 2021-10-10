import { Colors } from "./types";

export const baseColors = {
  failure: "#732020",
  // primary: "#732020",
  // primaryBright: "#D94141",
  // primaryDark: "#0E232E",
  // secondary: "#71AED9",
  success: "#71AED9",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#7a2a2a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#035AA6",
  primaryBright: "#BF0B0B", // #0378A6
  primaryDark: "#5F4C73",
  secondary: "#F2DA91",
  background: "#C4E1F2",
  backgroundDisabled: "#F2E8DF",
  backgroundAlt: "#FFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#F2A594",
  contrast: "#F2DA91",
  invertedContrast: "#F2BC79",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#3C4E59",
  textDisabled: "#BDC2C4",
  textSubtle: "#71AED9",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #639CBF 0%, #F2A594 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F2A594 0%, #639CBF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#400707", // 260101
  primaryBright: "#8C0303",
  primaryDark: "#0A0D0C",
  secondary: "#000", // D90404
  background: "#121111", // "#343135",
  backgroundDisabled: "#2c2626",
  backgroundAlt: "#590202", // 27262c
  backgroundAlt2: "rgba(39, 38, 44, 0.6)",
  cardBorder: "#BF0404",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#BF0404",
  invertedContrast: "#b55555",
  input: "#730C02",
  inputSecondary: "#F2AE30", // 302121
  tertiary: "#BC0303", //141414 0f0f0f
  text: "#ffece3",
  textDisabled: "#716161",
  textSubtle: "#F2BC79",
  disabled: "#634b4b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #314e5c 0%, #542a2a 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #542a2a 0%, #314e5c 100%)",
    cardHeader: "linear-gradient(166.77deg, #2a2e3b 10%, #730C02 100%)",
    blue: "linear-gradient(210.73deg, #121111 20%, #8C0303 100%)",
    violet: "linear-gradient(212.73deg, #D90404 35%, #F26B1D 60%)",
    violetAlt: "linear-gradient(180deg, #140a0a 0%, #b31414 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
