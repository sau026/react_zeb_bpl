import { css } from "@emotion/react";


const mixins = {
  flexJustifiedStart: css({
    display: "flex",
    justifyContent: "flex-start"
  }),
  flexJustifiedAround: css({
    display: "flex",
    justifyContent: "space-around"
  }),
  flexJustifiedBetween: css({
    display: "flex",
    justifyContent: "space-between"
  }),
  flexJustifiedCenter: css({
    display: "flex",
    justifyContent: "center"
  }),
  flexJustifiedEnd: css({
    display: "flex",
    justifyContent: "flex-end"
  }),
  flexAlignCenter: css({
    display: "flex",
    alignItems: "center"
  }),
  flexAlignStart: css({
    display: "flex",
    alignItems: "flex-start"
  }),
  flexAlignEnd: css({
    display: "flex",
    alignItems: "flex-end"
  }),
  flexNoWrap: css({ flexWrap: "nowrap" }),
  flexColumn: css({ display: "flex", flexDirection: "column" }),
  textSuccess: css({
    color: 'green'
  }),
  textError: css({
    color: 'red'
  }),
  bgSuccess: css({
    background: 'green'
  }),
  bgError: css({
    background: 'red'
  }),
  textFaded: css({
    color: 'blue'
  }),
  textCapitalize: css({
    textTransform: "capitalize"
  }),
  textUppercase: css({
    textTransform: "uppercase"
  }),
  textAlignmentCenter: css({
    textAlign: "center"
  }),
  textAlignmentLeft: css({
    textAlign: "left"
  }),
  textAlignmentRight: css({
    textAlign: "right"
  }),
  textAlignmentStart: css({
    textAlign: "start"
  }),
  textAlignmentEnd: css({
    textAlign: "end"
  }),
  positionRelative: css({
    position: "relative"
  }),
  widthFull: css({
    width: "100%"
  })
};
export default mixins;
