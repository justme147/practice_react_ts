import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./header.scss";

import IconMenu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

type HeaderProps = {
  clickMenuHandler: () => void;
  clickHelpHandler: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  clickMenuHandler,
  clickHelpHandler,
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

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="header-button" onClick={clickMenuHandler}>
            <IconMenu />
          </button>
          {showTitle && (
            <h6 className="header-logo" onClick={() => history.push("/")}>
              Math helper
            </h6>
          )}
        </div>
        <div className="header-right">
          <div className="header-search">
            <div className="header-icon">
              <SearchIcon />
            </div>
            <div className="header-input">
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <button
            className="header-button header-button__margin"
            onClick={clickHelpHandler}
          >
            <HelpOutlineOutlinedIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
