import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./calculator-section.module.scss";
import { Theory } from "../../components/Theory/Theory";

type CalculatorSectionProps = {
  isTheory: boolean;
  children: JSX.Element;
};

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  isTheory,
  children,
}) => {
  return (
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
        <Theory />
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
        {children}
      </CSSTransition>
    </div>
  );
};
