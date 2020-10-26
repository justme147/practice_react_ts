import React from "react";
import classNames from "classnames/bind";

import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  margin?: boolean;
  buttonClickHandler: () => void;
  buttonDisable?: string;
};

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  text,
  margin,
  buttonClickHandler,
  buttonDisable
}) => {
  return (
    <button
      className={cx({ btn: true, btn__margin: margin, disabled: buttonDisable })}
      onClick={() => buttonClickHandler()}
      disabled={buttonDisable ? true : false}
    >
      {text}
    </button>
  );
};
