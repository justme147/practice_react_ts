import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./select.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  IMatrixSizeList,
  IMeasurementsChildList,
  IMeasurementsChildValuesList,
} from "../../interfaces";

type SelectProps = {
  measurements?:
    | IMeasurementsChildList[]
    | IMeasurementsChildValuesList[]
    | IMatrixSizeList[];
  changeValueHandler: (id: number) => void;
  currentValue: number;
  width?: boolean;
  widthMatrix?: boolean;
  selectPlaceholder?: string;
};

const cx = classNames.bind(styles);

export const Select: React.FC<SelectProps> = ({
  measurements,
  changeValueHandler,
  currentValue,
  width,
  widthMatrix,
  selectPlaceholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const listener = (e: any): void => {
      // console.log(e.target);
    };

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, []);

  const itemClickHandler = (id: number): void => {
    changeValueHandler(id);
    setIsOpen(false);
  };

  return (
    <div
      className={cx({
        select: true,
        select__widthConverter: width,
        select__widthMatrix: widthMatrix,
        open: isOpen,
      })}
    >
      {/* <span className={styles.placeholder}>{selectPlaceholder}</span> */}
      <div className={styles.input} onClick={() => setIsOpen(!isOpen)}>
        <span>{measurements![currentValue - 1].title}</span>
        <ExpandMoreIcon className={styles.icon} />
      </div>
      <div className={styles.dropdown}>
        <ul className={styles.list}>
          {(measurements as (
            | IMeasurementsChildList
            | IMeasurementsChildValuesList
            | IMatrixSizeList
          )[]).map((item: any) => (
            <li
              className={cx({ item: true, active: currentValue === item.id })}
              key={item.id}
              onClick={() => itemClickHandler(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
