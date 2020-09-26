import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from "classnames/bind";

import styles from "./converter-basic-page.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";

type ConverterBasicPageProps = {
  navigation: string[];
};

const cx = classNames.bind(styles);

export const ConverterBasicPage: React.FC<ConverterBasicPageProps> = ({
  navigation,
}) => {
  const [isTheory, setIsTheory] = useState<boolean>(true);
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(location);

  useEffect(() => {
    document.title = `${navigation[0]} | ${navigation[1]}`;
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
          <p className={styles.page}>Калькулятор</p>
        </CSSTransition>
      </div>
    </div>
  );
};
