import { Interpolation, Theme } from "@emotion/react";

import { ButtonSize, ButtonType } from "@typings/buttons";

export enum ButtonTypeAttribute {
  button = "button",
  reset = "reset",
  submit = "submit"
}

export interface ButtonProps {
  type: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  style?: Interpolation<Theme>;
  children?:any;
  typeAttribute?: ButtonTypeAttribute;
  onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
}
