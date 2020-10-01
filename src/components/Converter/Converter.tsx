import React, { useState } from "react";
import { IMeasurementsChildList } from "../../interfaces";

import styles from "./converter.module.scss";
import stylesPage from "../../pages/ConverterBasicPage/converter-basic-page.module.scss";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

type ConverterProps = {
  measurements: IMeasurementsChildList[]; //Исправить
};

export const Converter: React.FC<ConverterProps> = ({ measurements }) => {
  const [category, setCategory] = useState<string>("1");
  const [valueFrom, setValueFrom] = useState<string>("2");
  const [valueTo, setValueTo] = useState<string>("3");

  return (
    <div className={stylesPage.page}>
      <div className={styles.container}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          {measurements?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <div className={styles.group}>
          <select
            value={valueFrom}
            onChange={(e) => setValueFrom(e.target.value)}
            className={styles["select__width"]}
          >
            {measurements[+category - 1].values.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
          <SwapHorizIcon />
          <select
            value={valueTo}
            onChange={(e) => setValueTo(e.target.value)}
            className={styles["select__width"]}
          >
            {measurements[+category - 1].values.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>
            kol-vo
            <input type="text" className={styles.input} />
          </label>
          <label className={styles.label}>
            res
            <input type="text" className={styles.input} readOnly />
          </label>
        </div>
        <div className={styles.group}>
          <button>ochistit'</button>
          <button>result</button>
        </div>
      </div>
    </div>
  );
};
