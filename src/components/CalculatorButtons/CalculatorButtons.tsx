import React from "react";
import classNames from "classnames/bind";

import styles from "./calculator-buttons.module.scss";

type CalculatorButtonsProps = {
  isTheory: boolean;
  buttonClickHandler: (flag: boolean) => void;
};

const cx = classNames.bind(styles);

export const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({
  isTheory,
  buttonClickHandler,
}) => {
  return (
    <div className={styles.group}>
      <button
        className={cx({ btn: true, btn__active: isTheory })}
        onClick={() => buttonClickHandler(true)}
      >
        Теория
      </button>
      <button
        className={cx({ btn: true, btn__active: !isTheory })}
        onClick={() => buttonClickHandler(false)}
      >
        Калькулятор
      </button>
    </div>
  );
};
