/** @jsxImportSource @emotion/react */
import { colors, typography, utils } from "@styles/shared";

import { css } from "@emotion/react";

export const linkButton = css({
  padding: 0,
  boxShadow: "none",
  background: "transparent",
  border: "none",
  outline: "none",
  ...typography.C3_14,
  color: 'blue',

  "&.small": {
    ...typography.C4_12,
    color: 'blue'
  },

  "&.large": {
    ...typography.C2_16,
    color: 'blue'
  },

  "&:hover": {
    background: colors.Zeb_Gradient_Blue_01,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
});

export const primaryButton = css({
  background: colors.Zeb_Gradient_Blue_01,
  borderRadius: utils.remConverter(8),
  boxShadow: "none",
  border: "none",
  outline: "none",
  whiteSpace: "nowrap",
  ...typography.C4_12,
  "&.small": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    ...typography.C4_12
  },
  "&.medium": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    ...typography.C4_12
  },
  "&.large": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(16)}`,
    ...typography.C2_16
  },
  "&.full-width": {
    padding: `${utils.remConverter(8)} 0`,
    width: "100%"
  },
  "&:disabled": {
    background: colors.Zeb_Solid_Grey,
    opacity: 1
  },
  "&:hover": {
    boxShadow: colors.Zeb_Effects_Shadow_Hover
  }
});

export const secondaryButton = css({
  padding: `${utils.remConverter(8)} ${utils.remConverter(16)}`,
  background: colors.Zeb_Transparent_4,
  border: `1px solid ${'blue'}`,
  borderRadius: "8px",
  ...typography.C2_16,
  "&.small": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    ...typography.C4_12
  },
  "&.medium": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    ...typography.C4_12
  },
  "&.large": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(16)}`,
    ...typography.C2_16
  },
  "&.full-width": {
    padding: `${utils.remConverter(8)} 0`
  },
  "&:disabled": {
    borderColor: colors.Zeb_Solid_Grey
  }
});

export const specialButton = css({
  padding: `${utils.remConverter(6)} 0`,
  background: colors.Zeb_Gradient_Blue_01,
  boxShadow: "none",
  border: "none",
  outline: "none",
  borderRadius: "8px",
  width: "100%",
  "&.small": {
    padding: `${utils.remConverter(8)} 0`
  }
});

export const specialButtonText = css({
  marginLeft: utils.remConverter(8),
  ...typography.C3_14
});

export const specialButtonSmText = css({
  display: "none"
});

export const tertiaryButton = css({
  padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
  background: colors.Zeb_Transparent_4,
  boxShadow: "none",
  border: `1px solid ${'blue'}`,
  outline: "none",
  borderRadius: "8px",
  "&.medium": {
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`
  }
});

export const tertiaryButtonText = css({
  marginLeft: utils.remConverter(4),
  ...typography.C4_12
});

export const tabButton = css({
  border: `0.5px solid ${colors.Zeb_Solid_Light_Blue}`,
  borderRadius: "4px",
  padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
  ...typography.B5_12_semibold,
  color: colors.Zeb_Solid_Light_Blue,
  flexGrow: 1,
  textTransform: "uppercase",
  cursor: "pointer",
  "&.active": {
    background: colors.Zeb_Solid_Dark_Blue,
    borderColor: 'blue',
    ...typography.C4_12
  }
});

export const disabledButton = css({
  opacity: 0.5,
  cursor: "not-allowed"
});

export const redButton = css({
    background: colors.Zeb_Solid_Dark_Blue,
    width: '200px',
    height: '50px',
    color: '#fff'
  });
  
