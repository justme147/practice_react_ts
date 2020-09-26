import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./error-page.module.scss";

export const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    // <div className="error">
    <div className={styles.error}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Страница не найдена</p>
      <p className={styles.text}>
        Перезагрузите страницу или попробуйте позднее
      </p>
      <button className={styles.btn} onClick={() => history.push("/")}>
        На главную
      </button>
    </div>
    // {/* </div> */}
  );
};
