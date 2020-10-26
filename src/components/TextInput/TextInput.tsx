import React from "react";
import classNames from "classnames/bind";

import styles from "./text-input.module.scss";

const cx = classNames.bind(styles);

type TextInputProps = {
  inputValue: string;
  inputPlaceholder?: string;
  inputFocus?: boolean;
  inputReadOnly?: boolean;
  widthConverter?: boolean;
  widthMatrix?: boolean;
  inputChangeHandler?: (e: any, idxI?: number, idxJ?: number) => void;
  inputFocusHandler?: (idxI?: number, idxJ?: number) => void;
  inputBlurHandler?: (idxI?: number, idxJ?: number) => void;
  inputMaxLength?: number;
  error?: string;
  indexI?: number;
  indexJ?: number;
};

export const TextInput: React.FC<TextInputProps> = ({
  inputValue,
  inputPlaceholder,
  inputFocus,
  inputReadOnly,
  widthConverter,
  widthMatrix,
  inputChangeHandler,
  inputFocusHandler,
  inputBlurHandler,
  inputMaxLength,
  error,
  indexI,
  indexJ,
}) => {
  return (
    <label
      className={cx({
        label: true,
        label__widthConverter: widthConverter,
        label__widthMatrix: widthMatrix,
        active: inputFocus || inputValue,
        error: error,
      })}
    >
      <span className={styles.placeholder}>{inputPlaceholder}</span>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(e) => inputChangeHandler!(e.target.value, indexI, indexJ)}
        onFocus={() => inputFocusHandler!(indexI, indexJ)}
        onBlur={() => inputBlurHandler!(indexI, indexJ)}
        readOnly={inputReadOnly}
        maxLength={inputMaxLength}
      />
      {error && <span className={styles.alert}>{error}</span>}
    </label>
  );
};
