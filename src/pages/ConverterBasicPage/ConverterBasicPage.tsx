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
            { id: 1, title: "Килотонна", value: 2 },
            { id: 2, title: "Тонна", value: 2 },
            { id: 3, title: "Центнер", value: 2 },
            { id: 4, title: "Килограмм", value: 2 },
            { id: 5, title: "Грамм", value: 2 },
            { id: 6, title: "Милиграмм", value: 2 },
            { id: 7, title: "Фунт", value: 2 },
            { id: 8, title: "Унция", value: 2 },
          ],
        },
        {
          id: 2,
          title: "Длина",
          values: [
            { id: 1, title: "Километр", value: 2 },
            { id: 2, title: "Метр", value: 2 },
            { id: 3, title: "Дециметр", value: 2 },
            { id: 4, title: "Сантиметр", value: 2 },
            { id: 5, title: "Миллиметр", value: 2 },
            { id: 6, title: "Микрометр", value: 2 },
            { id: 7, title: "Нанометр", value: 2 },
            { id: 8, title: "Миля", value: 2 },
            { id: 9, title: "Ярд", value: 2 },
            { id: 10, title: "Фут", value: 2 },
            { id: 11, title: "Дюйм", value: 2 },
          ],
        },
        {
          id: 3,
          title: "Объем",
          values: [
            { id: 1, title: "Кубический километр", value: 2 },
            { id: 2, title: "Кубический метр", value: 2 },
            { id: 3, title: "Кубический дециметр", value: 2 },
            { id: 4, title: "Кубический сантиметр", value: 2 },
            { id: 5, title: "Кубический миллиметр", value: 2 },
            { id: 6, title: "Литр", value: 2 },
            { id: 7, title: "Децилитр", value: 2 },
            { id: 8, title: "Сантилитр", value: 2 },
            { id: 9, title: "Миллилитр", value: 2 },
            { id: 10, title: "Микролитр", value: 2 },
            { id: 11, title: "Баррель", value: 2 },
            { id: 12, title: "Галлон", value: 2 },
            { id: 13, title: "Жидкая унция", value: 2 },
          ],
        },
        {
          id: 4,
          title: "Площадь",
          values: [
            { id: 1, title: "Квадрвтный километр", value: 2 },
            { id: 2, title: "Квадратный метр", value: 2 },
            { id: 3, title: "Квадратный дециметр", value: 2 },
            { id: 4, title: "Квадратный сантиметр", value: 2 },
            { id: 5, title: "Квадратный миллиметр", value: 2 },
            { id: 6, title: "Гектар", value: 2 },
            { id: 7, title: "Ар(Сотка)", value: 2 },
            { id: 8, title: "Квадратная миля", value: 2 },
            { id: 9, title: "Квадратный ярд", value: 2 },
            { id: 10, title: "Квадратный фут", value: 2 },
            { id: 11, title: "Квадратный дюйм", value: 2 },
          ],
        },
        {
          id: 5,
          title: "Скорость",
          values: [
            { id: 1, title: "Километр в секунду", value: 2 },
            { id: 2, title: "Миля в секунду", value: 2 },
            { id: 3, title: "Метр в секунду", value: 2 },
            { id: 4, title: "Километр в минуту", value: 2 },
            { id: 5, title: "Миля в минуту", value: 2 },
            { id: 6, title: "Метр в минуту", value: 2 },
            { id: 7, title: "Километр в час", value: 2 },
            { id: 8, title: "Миля в час", value: 2 },
            { id: 9, title: "Метр в час", value: 2 },
          ],
        },
        {
          id: 6,
          title: "Температура",
          values: [
            { id: 1, title: "Градус Цельсия", value: 2 },
            { id: 2, title: "Градус Фаренгейта", value: 2 },
            { id: 3, title: "Градус Кельвина", value: 2 },
            { id: 4, title: "Градус Реомюра", value: 2 },
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
