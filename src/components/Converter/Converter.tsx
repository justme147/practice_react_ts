import React, { useState } from "react";

import styles from "./converter.module.scss";

type ConverterProps = {};

interface IMeasurementsList {
  id: number;
  title: string;
  childs: IMeasurementsChildList[];
}

interface IMeasurementsChildList {
  id: number;
  title: string;
}

export const Converter: React.FC<ConverterProps> = () => {
  const [measurements, setMeasurements] = useState<IMeasurementsList[]>([
    {
      id: 1,
      title: "Базовые",
      childs: [
        { id: 1, title: "Масса" },
        { id: 2, title: "Длина" },
        { id: 3, title: "Объем" },
        { id: 4, title: "Площадь" },
        { id: 5, title: "Скорость" },
        { id: 6, title: "Температура" },
      ],
    },
    { id: 2, title: "Специальные", childs: [] },
    { id: 3, title: "", childs: [] },
    { id: 4, title: "", childs: [] },
  ]);

  return <div></div>;
};
