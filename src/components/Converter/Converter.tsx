import React, { useState } from "react";
import { IMeasurementsChildList } from "../../interfaces";
import classNames from "classnames/bind";

import styles from "./converter.module.scss";
import stylesPage from "../../pages/ConverterBasicPage/converter-basic-page.module.scss";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { Select } from "../Select/Select";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";

type ConverterProps = {
  measurements: IMeasurementsChildList[]; //Исправить
};

const cx = classNames.bind(styles);

export const Converter: React.FC<ConverterProps> = ({ measurements }) => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [fromId, setFromId] = useState<number>(2);
  const [toId, setToId] = useState<number>(3);
  const [isFocusCount, setIsFocusCount] = useState<boolean>(false);
  const [isFocusResult, setIsFocusResult] = useState<boolean>(false);
  const [count, setCount] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const swapClickHandler = (): void => {
    const from: number = fromId;
    const to: number = toId;

    setFromId(to);
    setToId(from);
  };

  const buttonResetHandler = (): void => {
    setCount("");
    setResult("");
  };

  return (
    <div className={stylesPage.page}>
      <div className={styles.container}>
        <Select
          measurements={measurements}
          changeValueHandler={(id) => setCategoryId(id)}
          currentValue={categoryId}
        />

        <div className={styles.group}>
          <Select
            measurements={measurements[categoryId - 1].values}
            changeValueHandler={(id) => setFromId(id)}
            currentValue={fromId}
            width
          />

          <SwapHorizIcon
            className={styles.swap}
            onClick={() => swapClickHandler()}
          />

          <Select
            measurements={measurements[categoryId - 1].values}
            changeValueHandler={(id) => setToId(id)}
            currentValue={toId}
            width
          />
        </div>
        <div className={styles.group}>
          <TextInput
            inputValue={count}
            inputPlaceholder="Введите значение"
            inputFocus={isFocusCount}
            inputChangeHandler={(value) => setCount(value)}
            inputFocusHandler={() => setIsFocusCount(true)}
            inputBlurHandler={() => setIsFocusCount(false)}
            width
          />
          <TextInput
            inputValue={result}
            inputPlaceholder="Результат"
            inputReadOnly
            width
          />
        </div>
        <div className={styles.group}>
          <Button text="Очистить" buttonClickHandler={buttonResetHandler} />
          <Button
            text="Рассчитать"
            buttonClickHandler={() => setResult(count)}
          />
        </div>
      </div>
    </div>
  );
};
