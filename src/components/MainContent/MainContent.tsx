import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IMenuList, IMenuListItems } from "../../interfaces";
import styles from "./main-content.module.scss";

type MainContentProps = {
  menuList: IMenuList[];
  // pageType?: string;
};

export const MainContent: React.FC<MainContentProps> = ({
  menuList,
  // pageType,
}) => {
  const [page, setPage] = useState<IMenuList>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      const newList = menuList.filter((item) => item.url === location.pathname);

      setPage(newList[0]);
    }
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>Math helper</h1>
        </div>
        {!page && (
          <div className={styles.body}>
            <h2 className={styles.subtitle}>Помощник по математике</h2>

            <p className={styles.text}>
              Данный помощник дает возможность воспользоваться теорией и
              калькуляторами по следующим разделам:
            </p>
            <ul className={styles.list}>
              {menuList.map((item) => (
                <li className={styles.item} key={item.id}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        {page && (
          <div className={styles.body}>
            <p className={styles.text}>
              Для удобства каждый раздел разделен на подразделы. В разделе{" "}
              <span>{page.title}</span> их {page.items.length}. В каждом
              подразделе имеется теория(если в ней есть необходимость) и
              калькулятор:
            </p>
            <ul className={styles.list}>
              {page.items.map((item) => (
                <li className={styles.item} key={item.id}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles.footer}>
          <p className={styles.copyright}>© 2020 «Math helper»</p>
        </div>
      </div>
    </div>
  );
};
