import { css } from "@emotion/react";

const fontPath = `BASE-PATH/fonts/`;

export const globalStyles = css({
  "@font-face": [
    {
      fontFamily: "Lato",
      src: `url("${fontPath}Lato-Bold.ttf") format("truetype")`,
      fontWeight: "bold",
      fontStyle: "normal",
      fontDisplay: "swap"
    },
    {
      fontFamily: "Lato",
      src: `url("${fontPath}Lato-Semibold.ttf") format("truetype")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap"
    },
    {
      fontFamily: "Lato",
      src: `url("${fontPath}Lato-Regular.ttf") format("truetype")`,
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap"
    }
  ],
  "*,\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\narticle,\naside,\nfigcaption,\nfigure":
    {
      margin: "0",
      padding: "0",
      WebkitFontSmoothing: "antialiased"
    },
  "@media only screen and (min-width: 1200px)": {
    html: { fontSize: "16px" }
  },
  "@media only screen and (min-width: 1400px)": {
    html: { fontSize: "18px" }
  },
  "@media only screen and (min-width: 1800px)": {
    html: { fontSize: "20px" }
  },
  body: {
    backgroundColor: 'red'
  },
  a: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  "input:focus::placeholder": {
    color: "transparent"
  },
  ".mobile-chat-container": {
    display: "none"
  }
});
