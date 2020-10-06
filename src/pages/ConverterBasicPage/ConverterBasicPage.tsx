import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from "classnames/bind";

import styles from "./converter-basic-page.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { IMeasurementsChildList, IMeasurementsList } from "../../interfaces";
import { Converter } from "../../components/Converter/Converter";

type ConverterBasicPageProps = {
  navigation: string[];
};

const cx = classNames.bind(styles);

export const ConverterBasicPage: React.FC<ConverterBasicPageProps> = ({
  navigation,
}) => {
  const [isTheory, setIsTheory] = useState<boolean>(true);
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
    { title: "Специальные", childs: [] },
    { title: "", childs: [] },
    { title: "", childs: [] },
  ]);
  const [currentMeasurement, setCurrentMeasurement] = useState<
    IMeasurementsChildList[]
  >([]);
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(location);

  useEffect(() => {
    document.title = `${navigation[0]} | ${navigation[1]}`;
    const newMeasurements = measurements.filter(
      (item) => item.title === navigation[1]
    );
    // console.log(newMeasurements);
    setCurrentMeasurement(newMeasurements[0].childs);
  }, []);

  return (
    <div className={styles.subcategory}>
      <Navigation navigation={navigation} />
      <h1 className={styles.title}>
        {navigation[0]}: {navigation[1]}
      </h1>
      <div className={styles.group}>
        <button
          className={cx({ btn: true, btn__active: isTheory })}
          onClick={() => setIsTheory(true)}
        >
          Теория
        </button>
        <button
          className={cx({ btn: true, btn__active: !isTheory })}
          onClick={() => setIsTheory(false)}
        >
          Калькулятор
        </button>
      </div>
      <div className={styles.container}>
        <CSSTransition
          in={isTheory}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: styles["page-enter"],
            enterActive: styles["page-enter-active"],
            exit: styles["page-exit"],
            exitActive: styles["page-exit-active"],
          }}
        >
          <div className={styles.page}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              neque cum veniam nostrum perspiciatis. Pariatur alias nam,
              quisquam consequuntur quod dolorem minima veritatis. Ea debitis
              suscipit aperiam amet nesciunt delectus accusamus sunt beatae
              consectetur corrupti! Neque nostrum est exercitationem repudiandae
              enim, voluptas necessitatibus natus provident iste maxime
              blanditiis, possimus nihil. Corporis, dolorem. Quia eaque tempora,
              officiis et earum dolores quasi odio sint magnam dignissimos
              fugiat ipsa laudantium, minus similique, beatae minima. Aut
              facilis sunt adipisci atque consectetur voluptatibus molestias
              enim obcaecati at dolorem, eius velit hic. Natus, voluptate, alias
              similique nemo sit animi tempore repudiandae officia sapiente quas
              rerum. Vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              explicabo repellat iste veritatis cum mollitia quos eveniet
              repellendus, ex dolorum, at incidunt sapiente praesentium
              accusantium commodi hic? Nostrum, obcaecati? Aut sequi beatae,
              quasi nostrum quas cumque omnis veniam eius officiis saepe nemo,
              aspernatur nam quam reiciendis. Mollitia quae vel cupiditate?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores rem esse nihil, consectetur ad cupiditate voluptate
              unde aperiam? Illum aperiam facilis id numquam saepe minima quidem
              architecto, maxime culpa ipsum optio accusantium laudantium
              temporibus, quaerat ipsam dignissimos quasi a nisi cumque ullam
              possimus eaque facere quas perferendis? Rerum modi eveniet
              reprehenderit dignissimos tempore. Sed aliquid nam ipsam
              repudiandae magni accusamus excepturi laboriosam inventore
              distinctio quisquam, aperiam, omnis, architecto iure incidunt
              nulla cupiditate beatae a consequuntur.
            </p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!isTheory}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: styles["page-enter"],
            enterActive: styles["page-enter-active"],
            exit: styles["page-exit"],
            exitActive: styles["page-exit-active"],
          }}
        >
          <Converter measurements={currentMeasurement} />
        </CSSTransition>
      </div>
    </div>
  );
};
