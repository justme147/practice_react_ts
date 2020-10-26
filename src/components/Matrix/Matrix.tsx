import React, { useEffect, useState } from "react";

import styles from "./matrix.module.scss";
import stylesPage from "../CalculatorSection/calculator-section.module.scss";
import { TextInput } from "../TextInput/TextInput";
import CloseIcon from "@material-ui/icons/Close";
import { IMatrixSizeList } from "../../interfaces";
import { Select } from "../Select/Select";

type MatrixProps = {};

export const Matrix: React.FC<MatrixProps> = () => {
  const [rows, setRows] = useState<number>(3);
  // const [isFocusRows, setIsFocusRows] = useState<boolean>(false);
  const [columns, setColumns] = useState<number>(3);
  // const [isFocusColumns, setIsFocusColumns] = useState<boolean>(false);
  const [matrixSize, setMatrixSize] = useState<IMatrixSizeList[]>([
    {
      id: 1,
      title: "1",
    },
    {
      id: 2,
      title: "2",
    },
    {
      id: 3,
      title: "3",
    },
    {
      id: 4,
      title: "4",
    },
    {
      id: 5,
      title: "5",
    },
    {
      id: 6,
      title: "6",
    },
    {
      id: 7,
      title: "7",
    },
    {
      id: 8,
      title: "8",
    },
    {
      id: 9,
      title: "9",
    },
    {
      id: 10,
      title: "10",
    },
  ]);
  const [matrixA, setMatrixA] = useState<string[][]>(
    Array(+rows)
      .fill([])
      .map(() => Array(+columns).fill("0"))
  );
  const [matrixB, setMatrixB] = useState<string[][]>(
    Array(+rows)
      .fill([])
      .map(() => Array(+columns).fill("0"))
  );

  const rowsSelectChangeHandler = (value: number): void => {
    const newMatrix = Array(value)
      .fill([])
      .map(() => Array(columns).fill("0"));
    setMatrixA(newMatrix);
    setMatrixB(newMatrix);
    setRows(value);
  };

  const columnsSelectChangeHandler = (value: number): void => {
    const newMatrix = Array(rows)
      .fill([])
      .map(() => Array(value).fill("0"));
    setMatrixA(newMatrix);
    setMatrixB(newMatrix);
    setColumns(value);
  };

  const inputChangeHandler = (
    value: string,
    idxI: number,
    idxJ: number
  ): void => {
    setMatrixA((prev: any) => {
      return [
        ...prev.slice(0, idxI),
        [...prev[idxI].slice(0, idxJ), value, ...prev[idxI].slice(idxJ + 1)],
        ...prev.slice(idxI + 1),
      ];
    });
  };

  const inputFocusHandler = (idxI: number, idxJ: number): void => {
    setMatrixA((prev: any) => {
      return [
        ...prev.slice(0, idxI),
        [...prev[idxI].slice(0, idxJ), "", ...prev[idxI].slice(idxJ + 1)],
        ...prev.slice(idxI + 1),
      ];
    });
  };

  const inputBlurHandler = (idxI: number, idxJ: number): void => {
    if (matrixA[idxI][idxJ] === "") {
      setMatrixA((prev: any) => {
        return [
          ...prev.slice(0, idxI),
          [...prev[idxI].slice(0, idxJ), "0", ...prev[idxI].slice(idxJ + 1)],
          ...prev.slice(idxI + 1),
        ];
      });
    }
  };

  const printMatrix = (inputValues: string[][] | undefined): JSX.Element => {
    const matrix: any = [];

    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = (
          <td key={`${i}${j}`}>
            <TextInput
              inputValue={inputValues![i][j]}
              inputChangeHandler={(
                value,
                idxI: number | undefined,
                idxJ: number | undefined
              ) => inputChangeHandler(value, idxI!, idxJ!)}
              inputFocusHandler={(
                idxI: number | undefined,
                idxJ: number | undefined
              ) => inputFocusHandler(idxI!, idxJ!)}
              inputBlurHandler={(
                idxI: number | undefined,
                idxJ: number | undefined
              ) => inputBlurHandler(idxI!, idxJ!)}
              inputMaxLength={6}
              indexI={i}
              indexJ={j}
              widthMatrix
            />
          </td>
        );
      }
    }

    // console.log(matrix);

    return (
      <table>
        <tbody>
          {matrix.map((trItem: any, idx: number) => (
            <tr key={idx}>{trItem.map((tdItem: any) => tdItem)}</tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className={stylesPage.page}>
      <div className={styles.container}>
        <div className={styles.group}>
          <span>Введите размер матриц: </span>
          <Select
            measurements={matrixSize}
            changeValueHandler={(id) => rowsSelectChangeHandler(id)}
            currentValue={rows}
            widthMatrix
          />
          <CloseIcon />
          <Select
            measurements={matrixSize}
            changeValueHandler={(id) => columnsSelectChangeHandler(id)}
            currentValue={columns}
            widthMatrix
          />
        </div>
        <div className={styles.group}>
          A={printMatrix(matrixA)}
          {/* B={printMatrix(matrixB)} */}
        </div>
      </div>
    </div>
  );
};
