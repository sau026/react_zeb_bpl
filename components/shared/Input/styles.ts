import { css } from "@emotion/react";
import { colors, typography, utils } from "@styles/shared";

export const formControl = css({
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    background: `${colors.Bat_purple_light}!important`,
    borderRadius: "0.5rem",
    border: "none",
    ...typography.B4_14_regular,
    color: `${colors.Bat_white}!important`,
    minHeight: `${utils.remConverter(40)}`,
    ":focus": {
      boxShadow: "none",
      outline: "none"
    },
    "::placeholder": {
      ...typography.B4_14_regular,
      color: colors.Bat_purple
    }
  });

  export const inputGroupText = css({
    padding: `${utils.remConverter(4)} ${utils.remConverter(12)}`,
    background: `${colors.Bat_purple_light} !important`,
    borderRadius: "0 8px 8px 0",
    color: `${colors.Bat_purple_light}!important`,
    border: "1px solid transparent",
    ...typography.B4_14_semibold
  }); 

  export const inputGroup = css({
    border: "1px solid transparent",
    borderRadius: "8px",
    position: "relative"
  });  

  export const formLabel = css({
    ...typography.B4_14_regular,
    color: `${colors.Bat_purple}!important`,
    marginBottom: `${utils.remConverter(4)}`
  });
  
  export const formGroup = css({
    marginBottom: `${utils.remConverter(4)}`
  });

  export const focusedInputGroup = css({
    borderColor: colors.Bat_purple,
    boxShadow: colors.BAT_black
  });

  export const invalidInputGroup = css({
    borderColor: colors.BAT_red
  });