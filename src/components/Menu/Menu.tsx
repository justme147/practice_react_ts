import React, { Dispatch, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames/bind";

import styles from "./menu.module.scss";
import { IMenuList, IMenuListItems } from "../../interfaces";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type MenuProps = {
  isMenu: boolean;
  menuList: IMenuList[];
  closeMenu: Dispatch<React.SetStateAction<boolean>>;
};

let cx = classNames.bind(styles);

export const Menu: React.FC<MenuProps> = ({ isMenu, menuList, closeMenu }) => {
  const [displayChild, setDisplayChild] = useState<number>(0);

  const windowClickHandler = (event: React.MouseEvent): void | boolean => {
    const nav: HTMLElement | null = document.querySelector(
      `.${styles.sidebar}`
    );
    const target: any = event.target;

    if (event.target === nav || nav!.contains(target)) return;
    closeMenu(false);
  };

  const expandParentHandler = (id: number): void => {
    setDisplayChild(id);
  };

  const showChildHandler = (nodes: IMenuListItems[]): JSX.Element => {
    return (
      <ul className={styles.sublist}>
        {nodes.map((el) => (
          <li
            key={el.id}
            className={styles.subitem}
            onClick={() => closeMenu(false)}
          >
            <NavLink
              to={el.url}
              className={styles.link}
              activeClassName={cx({ link__active: true })}
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
      classNames={{
        enter: styles["menu-enter"],
        enterActive: styles["menu-enter-active"],
        exit: styles["menu-exit"],
        exitActive: styles["menu-exit-active"],
      }}
      unmountOnExit

      // onExited={() => setIsMenu(false)}
    >
      <div className={styles.inner} onClick={(e) => windowClickHandler(e)}>
        {/* <div className="sidebar"> */}
        <div className={styles.sidebar}>
          <ul className={styles.list}>
            {menuList.map((item) => (
              <li
                key={item.id}
                className={cx({
                  item: true,
                  item__active: item.id === displayChild,
                })}
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
        {/* </div> */}
      </div>
    </CSSTransition>
  );
};
