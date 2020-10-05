import React from "react";
import classNames from "classnames/bind";

import styles from "./text-input.module.scss";

const cx = classNames.bind(styles);

type TextInputProps = {
  inputValue: string;
  inputPlaceholder: string;
  inputFocus?: boolean;
  inputReadOnly?: boolean;
  width?: boolean;
  inputChangeHandler?: (e: any) => void;
  inputFocusHandler?: () => void;
  inputBlurHandler?: () => void;
};

export const TextInput: React.FC<TextInputProps> = ({
  inputValue,
  inputPlaceholder,
  inputFocus,
  inputReadOnly,
  width,
  inputChangeHandler,
  inputFocusHandler,
  inputBlurHandler,
}) => {
  return (
    <label
      className={cx({
        label: true,
        label__width: width,
        active: inputFocus || inputValue,
      })}
    >
      <span>{inputPlaceholder}</span>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(e) => inputChangeHandler!(e.target.value)}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        readOnly={inputReadOnly}
      />
    </label>
  );
};
