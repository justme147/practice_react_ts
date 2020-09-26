import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";

import styles from "./header.module.scss";
import IconMenu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

type HeaderProps = {
  clickMenuHandler: () => void;
  clickHelpHandler: () => void;
  setHelpStepHandler: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  clickMenuHandler,
  clickHelpHandler,
  setHelpStepHandler,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [showTitle, setShowTitle] = useState<boolean>(false);

  useEffect(() => {
    // console.log(location);

    if (location.pathname === "/") {
      setShowTitle(false);
      return;
    }

    setShowTitle(true);
  }, [location]);

  const helpClick = (): void => {
    clickHelpHandler();
    setHelpStepHandler();
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button className={styles.button} onClick={clickMenuHandler}>
            <IconMenu />
          </button>
          {showTitle && (
            <h6
              className={styles.logo}
              onClick={() => history.push("/")}
              title="На главную"
            >
              Math helper
            </h6>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <div className={styles.icon}>
              <SearchIcon />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <button
            className={classNames(styles.button, styles["button__margin"])}
            onClick={() => helpClick()}
          >
            <HelpOutlineOutlinedIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
