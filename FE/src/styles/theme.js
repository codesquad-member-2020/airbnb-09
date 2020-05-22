import { calcRem } from "./mixins";

const colors = {
  pink: "#FF5A5F",
  green: "#006c70",
  black: "#000000",
  gray1: "#222222",
  gray2: "#484848",
  gray3: "#717171",
  gray4: "#B0B0B0",
  gray5: "#DDDDDD",
  gray6: "#F7F7F7",
  white: "#FFFFFF",
};

const fontSizes = {
  xl: calcRem(32),
  lg: calcRem(18),
  md: calcRem(16),
  sm: calcRem(14),
};

const lineHeight = {
  xl: calcRem(36),
  lg: calcRem(24),
  md: calcRem(22),
  sm: calcRem(18),
};

const fontWeight = {
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  regular: 400,
};

const UNIT = 4;

const spacing = {
  xxl: calcRem(UNIT * 16),
  xl: calcRem(UNIT * 12),
  lg: calcRem(UNIT * 8),
  base: calcRem(UNIT * 6),
  sm: calcRem(UNIT * 4),
  xsm: calcRem(UNIT * 2),
  xxsm: calcRem(UNIT),
};

const theme = {
  colors,
  fontSizes,
  lineHeight,
  fontWeight,
  spacing,
};

export default theme;
