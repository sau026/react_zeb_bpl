import colors from "@styles/shared/colors";
import utils from "@styles/shared/utils";
import { CSSObject } from "@emotion/react";

interface Styles {
  [key: string]: CSSObject;
}

const typography: Styles = {
  H1_56_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(56),
    lineHeight: "86px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H2_44_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(44),
    lineHeight: "60px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H3_32_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(32),
    lineHeight: "48px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H4_28_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(28),
    lineHeight: "40px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H5_20_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(20),
    lineHeight: "normal",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H6_16_bold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H1_56_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(56),
    lineHeight: "86px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H2_44_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(44),
    lineHeight: "60px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H3_32_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(32),
    lineHeight: "48px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H4_28_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(28),
    lineHeight: "40px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H5_20_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(20),
    lineHeight: "30px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H6_16_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H1_56_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(56),
    lineHeight: "86px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H2_44_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(44),
    lineHeight: "60px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H3_32_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(32),
    lineHeight: "48px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H4_28_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(28),
    lineHeight: "40px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H5_20_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(20),
    lineHeight: "30px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H6_16_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  H8_12_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(12),
    lineHeight: "18px",
    letterSpacing: "0.8px",
    color: 'red'
  },
  B1_24_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(24),
    lineHeight: "40px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B2_20_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(20),
    lineHeight: "30px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B3_16_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B4_14_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(14),
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B5_12_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(12),
    lineHeight: "18px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B6_10_semibold: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(10),
    lineHeight: "12px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B1_24_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: utils.remConverter(24),
    lineHeight: "40px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B2_20_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: utils.remConverter(20),
    lineHeight: "30px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B3_16_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B4_14_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(14),
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B5_12_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(12),
    lineHeight: "18px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  B6_10_regular: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: utils.remConverter(10),
    lineHeight: "12px",
    letterSpacing: "0.4px",
    color: 'red'
  },
  C1_20: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(20),
    lineHeight: "30px",
    letterSpacing: "1.6px",
    color: 'red',
    textTransform: "uppercase"
  },
  C2_16: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(16),
    lineHeight: "28px",
    letterSpacing: "0.8px",
    color: 'red',
    textTransform: "uppercase"
  },
  C3_14: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(14),
    lineHeight: "24px",
    letterSpacing: "0.8px",
    color: 'red',
    textTransform: "uppercase"
  },
  C4_12: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: utils.remConverter(12),
    lineHeight: "18px",
    letterSpacing: "0.4px",
    color: 'red',
    textTransform: "uppercase"
  }
};

export default typography;
