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
  const [count, setCount] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const changeCountHandler = (count: string): void => {
    const newCount: string = count.replace(",", ".");

    setCount(newCount);
  };

  const swapClickHandler = (): void => {
    const from: number = fromId;
    const to: number = toId;

    setFromId(to);
    setToId(from);
  };

  const buttonResultHandler = (): void => {
    if (isNaN(+count)) {
      setError("Введено не число");
      return;
    }

    setError("");
    const fromValue: number =
      measurements[categoryId - 1].values[fromId - 1].value;
    const toValue: number = measurements[categoryId - 1].values[toId - 1].value;
    const newResult: number = (toValue * +count) / fromValue;

    setResult(`${newResult}`);
  };

  const buttonResetHandler = (): void => {
    setCount("");
    setResult("");
    setError("");
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
            inputChangeHandler={(value) => changeCountHandler(value)}
            inputFocusHandler={() => setIsFocusCount(true)}
            inputBlurHandler={() => setIsFocusCount(false)}
            width
            error={error}
          />
          <TextInput
            inputValue={result}
            inputPlaceholder="Результат"
            inputReadOnly
            width
            error={error}
          />
        </div>
        <div className={styles.group}>
          <Button text="Очистить" buttonClickHandler={buttonResetHandler} />
          <Button text="Рассчитать" buttonClickHandler={buttonResultHandler} />
        </div>
      </div>
    </div>
  );
};
