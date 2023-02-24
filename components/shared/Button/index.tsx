/** @jsxImportSource @emotion/react */
import * as React from "react";
import { ButtonProps, ButtonTypeAttribute } from "./typings";
import * as styles from "./style";

const Button: React.FC<ButtonProps> = props => {
  const {
    type,
    typeAttribute = ButtonTypeAttribute.button,
    size = "medium",
    disabled,
    style,
    children,
    onBlur,
    onClick,
    onFocus,
  } = props;

  return (
    <button
    onClick={onClick}
    disabled={disabled}
    type={typeAttribute}
    css={styles.redButton}
    onFocus={onFocus}
    onBlur={onBlur}
  >
    {children}
  </button>
  );
};

export default Button;
