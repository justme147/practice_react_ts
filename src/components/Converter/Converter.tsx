import React, { useEffect, useState } from "react";
import { IMeasurementsChildList } from "../../interfaces";
import classNames from "classnames/bind";

import styles from "./converter.module.scss";
import stylesPage from "../CalculatorSection/calculator-section.module.scss";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { Select } from "../Select/Select";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";
import { useLocation } from "react-router-dom";

type ConverterProps = {
  measurements: IMeasurementsChildList[];
};

const cx = classNames.bind(styles);

export const Converter: React.FC<ConverterProps> = ({ measurements }) => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [fromId, setFromId] = useState<number>(1);
  const [toId, setToId] = useState<number>(2);
  const [isFocusCount, setIsFocusCount] = useState<boolean>(false);
  const [count, setCount] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem(`${location.pathname}`)) {
      const data = JSON.parse(
        localStorage.getItem(`${location.pathname}`) || "{}"
      );

      // console.log(data);

      setCategoryId(data.categoryId);
      setFromId(data.fromId);
      setToId(data.toId);
      setCount(data.count);
    }
  }, []);

  const changeCountHandler = (count: string): void => {
    const newCount: string = count.replace(",", ".");

    if (measurements[1].title === "Системы счисления" && categoryId === 2) {
      const parseCount = parseInt(
        count,
        measurements[categoryId - 1].values[fromId - 1].value
      ).toString();
      // console.log(parseCount);

      if (isNaN(+parseCount) && newCount !== "") {
        setError("Введено не число");
      } else {
        setError("");
      }
      setCount(newCount);

      return;
    }

    if (isNaN(+newCount)) {
      setError("Введено не число");
    } else {
      setError("");
    }

    setCount(newCount);
  };

  const swapClickHandler = (): void => {
    const from: number = fromId;
    const to: number = toId;

    setFromId(to);
    setToId(from);
  };

  const buttonResultHandler = (): void => {
    const fromValue: number =
      measurements[categoryId - 1].values[fromId - 1].value;
    const toValue: number = measurements[categoryId - 1].values[toId - 1].value;
    if (measurements[1].title === "Системы счисления" && categoryId === 2) {
      const newResult: number = +parseInt(
        count,
        measurements[categoryId - 1].values[fromId - 1].value
      ).toString(measurements[categoryId - 1].values[toId - 1].value);
      setResult(`${newResult}`);
    } else {
      const newResult: number = (toValue * +count) / fromValue;
      setResult(`${newResult}`);
    }

    const localStorageItem = {
      categoryId,
      fromId,
      toId,
      count,
    };

    localStorage.setItem(
      `${location.pathname}`,
      JSON.stringify(localStorageItem)
    );
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
          selectPlaceholder="Выберите категорию"
        />

        <div className={styles.group}>
          <Select
            measurements={measurements[categoryId - 1].values}
            changeValueHandler={(id) => setFromId(id)}
            currentValue={fromId}
            width
            selectPlaceholder="Выберите измерение"
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
            selectPlaceholder="Выберите измерение"
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
            widthConverter
            error={error}
          />
          <TextInput
            inputValue={result}
            inputPlaceholder="Результат"
            inputReadOnly
            widthConverter
            // error={error}
          />
        </div>
        <div className={styles.group}>
          <Button text="Очистить" buttonClickHandler={buttonResetHandler} />
          <Button
            text="Рассчитать"
            buttonClickHandler={buttonResultHandler}
            buttonDisable={error}
          />
        </div>
      </div>
    </div>
  );
};
