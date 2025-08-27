// =================================================================
// =================================================================
export const grey = {
  900: "#2B3445",
  // Main Text
  800: "#373F50",
  // Paragraph
  700: "#4B566B",
  600: "#7D879C",
  // Low Priority form Title/Text
  500: "#AEB4BE",
  400: "#DAE1E7",
  // Border
  300: "#E3E9EF",
  200: "#F3F5F9",
  // Line Stroke
  100: "#F6F9FC"
};

export const primary = {
  100: "#E0E0E0", // tono claro más suave
  200: "#B3B3B3", // tono claro
  300: "#8C8C8C", // tono intermedio claro
  400: "#4D4D4D", // tono más cercano al base
  500: "#1B1B1B", // base
  600: "#151515", // tono oscuro
  700: "#101010", // tono más oscuro
  800: "#0C0C0C", // oscuro profundo
  900: "#080808", // más profundo
};


export const secondary = {
  100: "#D9D9D9", // tono claro más suave
  200: "#B8B8B8", // tono claro
  300: "#999999", // tono intermedio claro
  400: "#8C8C8C", // tono cercano al principal
  500: "#ACACAC", // base
  600: "#8C8C8C", // tono oscuro
  700: "#6F6F6F", // tono más oscuro
  800: "#4F4F4F", // oscuro profundo
  900: "#2F2F2F", // más profundo
  main: "#ACACAC", // color principal
  dark: "#4F4F4F" // ajustado para coherencia
};


export const error = {
  100: "#FCD9DA", // tono claro más vibrante
  200: "#F9A9AB", // tono claro
  300: "#F67879", // tono intermedio claro
  400: "#F24346", // tono vibrante cercano al principal
  500: "#E92036", // color principal más intenso
  600: "#C71C2E", // tono oscuro más saturado
  700: "#A41726", // tono oscuro profundo
  800: "#82121F", // tono oscuro intenso
  900: "#610D17", // tono más oscuro
  main: "rgb(233, 32, 54)" // principal ajustado
};
export const success = {
  100: "#D9F5E5", // tono claro más vibrante
  200: "#AEE7BF", // tono claro
  300: "#81D898", // tono intermedio claro
  400: "#44C368", // tono vibrante cercano al principal
  500: "#28B157", // color principal más intenso
  600: "#239E4D", // tono oscuro más saturado
  700: "#1E8642", // tono oscuro profundo
  800: "#186C36", // tono oscuro intenso
  900: "#125229", // tono más oscuro
  main: "rgb(40, 177, 87)" // principal ajustado
};
export const blue = {
  50: "#EAF3FB",  // tono muy claro
  100: "#CCE7FE", // tono claro más vibrante
  200: "#99CEFD", // tono claro
  300: "#66B5FD", // tono intermedio claro
  400: "#339CFD", // tono vibrante
  500: "#007EFF", // color principal más intenso
  600: "#0068D9", // tono oscuro más saturado
  700: "#0053B6", // tono oscuro profundo
  800: "#003E92", // tono oscuro intenso
  900: "#002D79", // tono más oscuro
  main: "#007EFF", // principal ajustado
  contrastText: "#FFFFFF" // texto contrastante sin cambios
};

export const marron = {
  50: "#f3f5f9",
  100: "#F6F2ED",
  200: "#F8DBD1",
  300: "#EBBCB3",
  400: "#D89C98",
  600: "#A3545C",
  700: "#883948",
  800: "#6E2438",
  900: "#5B162F",
  main: "#BE7374"
};
export const paste = {
  50: "#F5F5F5",
  100: "#DDFBF1",
  200: "#BDF7E8",
  300: "#97E8DA",
  400: "#76D2CA",
  600: "#36929A",
  700: "#257181",
  800: "#175368",
  900: "#0E3D56",
  main: "#4BB4B4",
  contrastText: "#FFFFFF"
};
export const orange = {
  50: "#FEE9D2",
  100: "#FDD8AF",
  200: "#FCC487",
  300: "#FCB05F",
  400: "#FB9C37",
  500: "#FA8C16",
  600: "#C86904",
  700: "#A05403",
  800: "#783F03",
  900: "#502A02",
  main: "#FA8C16",
  dark: "#C86904",
  light: "#FDD8AF"
};
export const bluish = {
  100: "#DDFBF1",
  200: "#BDF7E8",
  300: "#97E8DA",
  400: "#76D2CA",
  500: "#4BB4B4",
  600: "#36929A",
  700: "#257181",
  800: "#175368",
  900: "#0E3D56",
  main: "#4BB4B4",
  dark: "#36929A",
  light: "#BDF7E8"
};
export const warning = {
  100: "#FFF4CC", // tono claro más vibrante
  200: "#FFE69A", // tono claro
  300: "#FFD968", // tono intermedio claro
  400: "#FFC642", // tono vibrante cercano al principal
  500: "#FFB720", // color principal más intenso
  600: "#E6A31C", // tono oscuro más saturado
  700: "#CC8F18", // tono oscuro profundo
  800: "#B27B14", // tono oscuro intenso
  900: "#8F6210", // tono más oscuro
  main: "#FFB720", // principal ajustado
  contrastText: "#FFFFFF" // texto contrastante sin cambios
};

export const dark = {
  main: "#1F2937"
};
export const white = {
  main: "#fff"
};
export const themeColors = {
  dark,
  grey,
  paste,
  error,
  orange,
  marron,
  bluish,
  warning,
  success,
  secondary,
  info: blue,
  divider: grey[200],
  background: {
    default: grey[100]
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
    disabled: grey[400]
  }
};