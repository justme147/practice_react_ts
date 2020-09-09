import React from "react";
import { useHistory } from "react-router-dom";

import "./error-page.scss";

export const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="error">
      <div className="error-inner">
        <h1 className="error-title">404</h1>
        <p className="error-subtitle">Страница не найдена</p>
        <p className="error-text">
          Перезагрузите страницу или попробуйте позднее
        </p>
        <button className="error-btn" onClick={() => history.push("/")}>
          На главную
        </button>
      </div>
    </div>
  );
};
