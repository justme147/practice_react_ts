import React from "react";
import { useHistory } from "react-router-dom";

import "./header.scss";

import IconMenu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

type HeaderProps = {
  clickHandler: () => void;
};

export const Header: React.FC<HeaderProps> = ({ clickHandler }) => {
  const history = useHistory();

  return (
    <header className="header">
      <div className="header-inner">
        <button className="header-button" onClick={clickHandler}>
          <IconMenu />
        </button>
        {/* <h6 className="header-logo" onClick={() => history.push("/")}>
          Math helper
        </h6> */}
        <div className="header-search">
          <div className="header-icon">
            <SearchIcon />
          </div>
          <div className="header-input">
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <button className="header-button header-button__margin">
          <HelpOutlineOutlinedIcon />
        </button>
      </div>
    </header>
  );
};
