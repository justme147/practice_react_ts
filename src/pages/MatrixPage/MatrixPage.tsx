import React, { useState } from "react";
import { Calculator } from "../../components/Calculator/Calculator";
import { Matrix } from "../../components/Matrix/Matrix";

import styles from "./matrix-page.module.scss";

type MatrixPageProps = {
  navigation: string[];
};

export const MatrixPage: React.FC<MatrixPageProps> = ({ navigation }) => {
  // const [isTheory, setIsTheory] = useState<boolean>(true);

  return (
    <Calculator navigation={navigation}>
      <Matrix />
    </Calculator>
  );
};
