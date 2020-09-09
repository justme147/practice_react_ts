import React, { Dispatch, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./menu.scss";
import { IMenuList, IMenuListItems } from "../../interfaces";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type MenuProps = {
  isMenu: boolean;
  menuList: IMenuList[];
  closeMenu: Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<MenuProps> = ({ isMenu, menuList, closeMenu }) => {
  const [displayChild, setDisplayChild] = useState<number>(0);

  const windowClickHandler = (event: React.MouseEvent): void | boolean => {
    const nav: HTMLElement | null = document.querySelector(".sidebar-menu");
    const target: any = event.target;

    if (event.target === nav || nav!.contains(target)) return;
    closeMenu(false);
  };

  const expandParentHandler = (id: number): void => {
    setDisplayChild(id);
  };

  const showChildHandler = (nodes: IMenuListItems[]): JSX.Element => {
    return (
      <ul className="sidebar-sublist">
        {nodes.map((el) => (
          <li
            key={el.id}
            className="sidebar-subitem"
            onClick={() => closeMenu(false)}
          >
            <NavLink
              to={el.url}
              className="sidebar-link"
              activeClassName="sidebar-link__active"
            >
              {/* <MoreVertIcon /> */}
              <span>{el.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <CSSTransition
      in={isMenu}
      timeout={300}
      classNames="menu"
      unmountOnExit
      // onExited={() => setIsMenu(false)}
    >
      <div className="sidebar-inner" onClick={(e) => windowClickHandler(e)}>
        <div className="sidebar">
          <div className="sidebar-menu">
            <ul className="sidebar-list">
              {menuList.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.id !== displayChild
                      ? "sidebar-item"
                      : "sidebar-item sidebar-item__active"
                  }
                  onClick={() => expandParentHandler(item.id)}
                  // onMouseEnter={() => expandParentHandler(item.id)}
                >
                  {/* <FormatListBulletedIcon /> */}
                  <span>{item.title}</span>
                  {displayChild !== item.id && <ExpandMoreIcon />}
                  {item.id === displayChild &&
                    item.items &&
                    showChildHandler(item.items)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
