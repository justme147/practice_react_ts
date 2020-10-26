import React, { useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from "classnames/bind";

import styles from "./converter-page.module.scss";
// import { useHistory, useLocation } from "react-router-dom";
// import { Navigation } from "../../components/Navigation/Navigation";
import { IMeasurementsChildList, IMeasurementsList } from "../../interfaces";
import { Converter } from "../../components/Converter/Converter";
// import { CalculatorButtons } from "../../components/CalculatorButtons/CalculatorButtons";
// import { CalculatorSection } from "../../components/CalculatorSection/CalculatorSection";
import { Calculator } from "../../components/Calculator/Calculator";

type ConverterPageProps = {
  navigation: string[];
};

const cx = classNames.bind(styles);

export const ConverterPage: React.FC<ConverterPageProps> = ({ navigation }) => {
  // const [isTheory, setIsTheory] = useState<boolean>(true);
  const [measurements, setMeasurements] = useState<IMeasurementsList[]>([
    {
      title: "Базовые",
      childs: [
        {
          id: 1,
          title: "Масса",
          values: [
            { id: 1, title: "Килотонна", value: 0.000001 },
            { id: 2, title: "Тонна", value: 0.001 },
            { id: 3, title: "Центнер", value: 0.01 },
            { id: 4, title: "Килограмм", value: 1 },
            { id: 5, title: "Грамм", value: 1000 },
            { id: 6, title: "Милиграмм", value: 1000000 },
            { id: 7, title: "Фунт", value: 2.205 },
            { id: 8, title: "Унция", value: 35.27 },
          ],
        },
        {
          id: 2,
          title: "Длина",
          values: [
            { id: 1, title: "Километр", value: 0.001 },
            { id: 2, title: "Метр", value: 1 },
            { id: 3, title: "Дециметр", value: 10 },
            { id: 4, title: "Сантиметр", value: 100 },
            { id: 5, title: "Миллиметр", value: 1000 },
            { id: 6, title: "Микрометр", value: 1000000 },
            { id: 7, title: "Нанометр", value: 1000000000 },
            { id: 8, title: "Миля", value: 0.0006214 },
            { id: 9, title: "Ярд", value: 1.094 },
            { id: 10, title: "Фут", value: 3.281 },
            { id: 11, title: "Дюйм", value: 39.37 },
          ],
        },
        {
          id: 3,
          title: "Объем",
          values: [
            { id: 1, title: "Кубический километр", value: 0.000000001 },
            { id: 2, title: "Кубический метр", value: 1 },
            { id: 3, title: "Кубический дециметр", value: 1000 },
            { id: 4, title: "Кубический сантиметр", value: 1000000 },
            { id: 5, title: "Кубический миллиметр", value: 1000000000 },
            { id: 6, title: "Литр", value: 1000 },
            { id: 7, title: "Децилитр", value: 10000 },
            { id: 8, title: "Сантилитр", value: 100000 },
            { id: 9, title: "Миллилитр", value: 1000000 },
            { id: 10, title: "Микролитр", value: 1000000000 },
            { id: 11, title: "Баррель", value: 6.29 },
            { id: 12, title: "Галлон", value: 264.2 },
            { id: 13, title: "Жидкая унция", value: 33810 },
          ],
        },
        {
          id: 4,
          title: "Площадь",
          values: [
            { id: 1, title: "Квадрвтный километр", value: 0.000001 },
            { id: 2, title: "Квадратный метр", value: 1 },
            { id: 3, title: "Квадратный дециметр", value: 100 },
            { id: 4, title: "Квадратный сантиметр", value: 10000 },
            { id: 5, title: "Квадратный миллиметр", value: 1000000 },
            { id: 6, title: "Гектар", value: 0.0001 },
            { id: 7, title: "Ар(Сотка)", value: 0.01 },
            { id: 8, title: "Квадратная миля", value: 0.0000003861 },
            { id: 9, title: "Квадратный ярд", value: 1.196 },
            { id: 10, title: "Квадратный фут", value: 10.76 },
            { id: 11, title: "Квадратный дюйм", value: 1550 },
          ],
        },
        {
          id: 5,
          title: "Скорость",
          values: [
            { id: 1, title: "Километр в секунду", value: 0.0002778 },
            { id: 2, title: "Миля в секунду", value: 0.0001726 },
            { id: 3, title: "Метр в секунду", value: 0.2778 },
            { id: 4, title: "Километр в минуту", value: 0.01667 },
            { id: 5, title: "Миля в минуту", value: 0.01036 },
            { id: 6, title: "Метр в минуту", value: 16.67 },
            { id: 7, title: "Километр в час", value: 1 },
            { id: 8, title: "Миля в час", value: 0.6214 },
            { id: 9, title: "Метр в час", value: 1000 },
          ],
        },
        {
          id: 6,
          title: "Температура",
          values: [
            { id: 1, title: "Градус Цельсия", value: 1 },
            { id: 2, title: "Градус Фаренгейта", value: 33.8 },
            { id: 3, title: "Градус Кельвина", value: 274.1 },
            { id: 4, title: "Градус Реомюра", value: 0.8 },
          ],
        },
      ],
    },
    // { title: "Специальные", childs: [] },
    {
      title: "Инженерные",
      childs: [
        {
          id: 1,
          title: "Время",
          values: [
            { id: 1, title: "Век", value: 1 },
            { id: 2, title: "Год", value: 100 },
            { id: 3, title: "Месяц", value: 1200 },
            { id: 4, title: "Неделя", value: 5218 },
            { id: 5, title: "Сутки", value: 36520 },
            { id: 6, title: "Час", value: 876600 },
            { id: 7, title: "Минута", value: 52590000 },
            { id: 8, title: "Секунда", value: 3156000000 },
          ],
        },
        {
          id: 2,
          title: "Ускорение",
          values: [
            { id: 1, title: "Километр на секунду в квадрате", value: 1 },
            { id: 2, title: "Миля на секунду в квадрате", value: 0.621 },
            { id: 3, title: "Метр на секунду в квадрате", value: 1000 },
            { id: 4, title: "Фут на секунду в квадрате", value: 3281 },
          ],
        },
        {
          id: 3,
          title: "Плотность",
          values: [
            { id: 1, title: "Тонна на кубометр", value: 0.001 },
            { id: 2, title: "Килограмм на кубометр", value: 1 },
            { id: 3, title: "Грамм на кубометр", value: 1000 },
            { id: 4, title: "Килограмм на литр", value: 0.001 },
            { id: 5, title: "Грамм на литр", value: 1 },
            {
              id: 6,
              title: "Килограмм на кубический дециметр",
              value: 0.001,
            },
            { id: 7, title: "Грамм на кубический дециметр", value: 1 },
            {
              id: 8,
              title: "Килограмм на кубический сантиметр",
              value: 0.000001,
            },
            { id: 9, title: "Грамм на кубический сантиметр", value: 0.001 },
            { id: 10, title: "Килограмм на миллилитр", value: 0.000001 },
            { id: 11, title: "Грамм на миллилитр", value: 0.001 },
            { id: 12, title: "Фунты на кубический ярд", value: 1.69 },
            { id: 13, title: "Фунты на кубический фут", value: 0.0624 },
            {
              id: 14,
              title: "Фунты на кубический дюйм",
              value: 0.0000361,
            },
            { id: 15, title: "Унции на кубический ярд", value: 27 },
            { id: 16, title: "Унции на кубический фунт", value: 0.999 },
            { id: 17, title: "Унции на кубический дюйм", value: 0.000578 },
          ],
        },
        {
          id: 4,
          title: "Давление",
          values: [
            { id: 1, title: "Бар", value: 0.01 },
            { id: 2, title: "Миллибар", value: 10 },
            { id: 3, title: "Килопаскаль", value: 1 },
            { id: 4, title: "Гектопаскаль", value: 10 },
            { id: 5, title: "Мегапаскаль", value: 0.001 },
            { id: 6, title: "Паскаль", value: 1000 },
            { id: 7, title: "Унция на квадратный дюйм", value: 2.32 },
            { id: 8, title: "Унция на квадратный фут", value: 334 },
            { id: 9, title: "Фунт на квадратный дюйм", value: 0.145 },
            { id: 10, title: "Фунт на квадратный фут", value: 20.9 },
          ],
        },
        {
          id: 5,
          title: "Сила",
          values: [
            { id: 1, title: "Меганьютон", value: 0.000001 },
            { id: 2, title: "Килоньютон", value: 0.001 },
            { id: 3, title: "Деканьютон", value: 0.01 },
            { id: 4, title: "Ньютон", value: 1 },
            { id: 5, title: "Миллиньютон", value: 1000 },
            { id: 6, title: "Микроньютон", value: 1000000 },
          ],
        },
      ],
    },
    {
      title: "Компьютерные",
      childs: [
        {
          id: 1,
          title: "Объем данных",
          values: [
            { id: 1, title: "Петабайт(Pb)", value: 0.000000000931 },
            { id: 2, title: "Терабайт(Tb)", value: 0.000000954 },
            { id: 3, title: "Гигабайт(Gb)", value: 0.000977 },
            { id: 4, title: "Мегабайт(Mb)", value: 1 },
            { id: 5, title: "Килобайт(Kb)", value: 1024 },
            { id: 6, title: "Байт(b)", value: 1048576 },
            { id: 7, title: "Петабит(Pbit)", value: 0.00000000745 },
            { id: 8, title: "Терабит(Tbit)", value: 0.00000763 },
            { id: 9, title: "Гигабит(Gbit)", value: 0.00781 },
            { id: 10, title: "Мегабит(Mbit)", value: 8 },
            { id: 11, title: "Килобит(Kbit)", value: 8192 },
            { id: 12, title: "Бит(bit)", value: 8388608 },
          ],
        },
        {
          id: 2,
          title: "Системы счисления",
          values: [
            { id: 1, title: "Двоичная", value: 2 },
            { id: 2, title: "Восьмеричная", value: 8 },
            { id: 3, title: "Десятичная", value: 10 },
            { id: 4, title: "Шестнадцатеричная", value: 16 },
          ],
        },
      ],
    },
  ]);
  const [currentMeasurement, setCurrentMeasurement] = useState<
    IMeasurementsChildList[]
  >([]);
  // const history = useHistory();
  // const location = useLocation();

  // console.log(history);
  // console.log(location);

  useEffect(() => {
    const newMeasurements = measurements.filter(
      (item) => item.title === navigation[1]
    );

    setCurrentMeasurement(newMeasurements[0].childs);
  }, []);

  return (
    <Calculator navigation={navigation}>
      <Converter measurements={currentMeasurement} />
    </Calculator>
  );
};
