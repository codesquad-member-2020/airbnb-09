import { css } from "styled-components";

const calcRem = size => `${size / 16}rem`;

const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1900px",
};

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
  shadow: "rgba(0, 0, 0, 0.05)",
};

const fontSizes = {
  xl: calcRem(32),
  lg: calcRem(18),
  md: calcRem(16),
  sm: calcRem(14),
  xsm: calcRem(12),
};

const lineHeights = {
  xl: calcRem(36),
  lg: calcRem(24),
  md: calcRem(22),
  sm: calcRem(18),
  xsm: calcRem(16),
};

const fontWeights = {
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  regular: 400,
};

const shadows = {
  xxl: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  xl: "0px 10px 37px rgba(0, 0, 0, 0.15)",
  lg: "0 2px 8px rgba(0,0,0,0.24)",
  md: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
};

const unit = 4;

const spacings = {
  xxl: calcRem(unit * 16),
  xl: calcRem(unit * 12),
  lg: calcRem(unit * 8),
  base: calcRem(unit * 6),
  sm: calcRem(unit * 4),
  xsm: calcRem(unit * 2),
  xxsm: calcRem(unit),
  unit: num => calcRem(unit * num),
};

const aligns = {
  center: css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

const theme = {
  sizes,
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  shadows,
  spacings,
  unit,
  aligns,
};

export default theme;
