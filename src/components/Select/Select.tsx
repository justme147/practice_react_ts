import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./select.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  IMeasurementsChildList,
  IMeasurementsChildValuesList,
} from "../../interfaces";

type SelectProps = {
  measurements: IMeasurementsChildList[] | IMeasurementsChildValuesList[];
  changeValueHandler: (id: number) => void;
  currentValue: number;
  width?: boolean;
};

const cx = classNames.bind(styles);

export const Select: React.FC<SelectProps> = ({
  measurements,
  changeValueHandler,
  currentValue,
  width,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const listener = (e: any) => {
      // console.log(e.target);
    }

    window.addEventListener('click', listener)

    return () => {
      window.removeEventListener('click', listener)
    }
  }, [])

  const itemClickHandler = (id: number): void => {
    changeValueHandler(id);
    setIsOpen(false);
  };

  return (
    <div className={cx({ select: true, select__width: width, open: isOpen })}>
      <div className={styles.input} onClick={() => setIsOpen(!isOpen)}>
        <span>{measurements[currentValue - 1].title}</span>
        <ExpandMoreIcon className={styles.icon} />
      </div>
      <div className={styles.dropdown}>
        <ul className={styles.list}>
          {(measurements as (
            | IMeasurementsChildList
            | IMeasurementsChildValuesList
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
