import React, { useEffect, useState } from "react";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { NavLink, useLocation } from "react-router-dom";
import { INavList } from "../../interfaces";
import styles from "./navigation.module.scss";

type NavigationProps = {
  navigation: string[];
};

export const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const [navList, setNavList] = useState<INavList[]>([]);
  const location = useLocation();

  useEffect(() => {
    const list: INavList[] = [
      { id: 1, title: "Главная", url: "/" },
      {
        id: 2,
        title: navigation[0],
        url: `/${location.pathname.split("/")[1]}`,
      },
      { id: 3, title: navigation[1], url: location.pathname },
    ];

    setNavList(list);
  }, []);

  return (
    <ul className={styles.list}>
      {navList.map((item, idx) => (
        <li className={styles.item} key={item.id}>
          <NavLink to={item.url}>{item.title}</NavLink>
          {idx !== navList.length - 1 ? <ArrowRightIcon /> : ""}
        </li>
      ))}
    </ul>
  );
};
