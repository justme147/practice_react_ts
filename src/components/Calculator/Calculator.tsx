import React, { useEffect, useState } from "react";
import { CalculatorButtons } from "../CalculatorButtons/CalculatorButtons";
import { CalculatorSection } from "../CalculatorSection/CalculatorSection";
import { Navigation } from "../Navigation/Navigation";

import styles from "./calculator.module.scss";

type CalculatorProps = {
  navigation: string[];
  children: JSX.Element;
};

export const Calculator: React.FC<CalculatorProps> = ({
  navigation,
  children,
}) => {
  const [isTheory, setIsTheory] = useState<boolean>(true);

  useEffect(() => {
    document.title = `${navigation[0]} | ${navigation[1]}`;
  }, []);

  return (
    <div className={styles.subcategory}>
      <Navigation navigation={navigation} />
      <h1 className={styles.title}>
        {navigation[0]}: {navigation[1]}
      </h1>
      <CalculatorButtons
        // navigation={navigation}
        isTheory={isTheory}
        buttonClickHandler={(flag: boolean) => setIsTheory(flag)}
      />
      <CalculatorSection isTheory={isTheory}>{children}</CalculatorSection>
    </div>
  );
};
