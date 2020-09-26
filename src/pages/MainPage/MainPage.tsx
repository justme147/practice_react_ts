import React, { useEffect } from "react";

import { SLider } from "../../components/Slider/Slider";
import { MainContent } from "../../components/MainContent/MainContent";
import { IMenuList } from "../../interfaces";
import styles from "./main-page.module.scss";
import { useLocation } from "react-router-dom";

type MainPageProps = {
  menuList: IMenuList[];
};

export const MainPage: React.FC<MainPageProps> = ({ menuList }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      const title = menuList.filter((item) => item.url === location.pathname);

      document.title = title[0].title;
    } else {
      document.title = "Помощник по математике";
    }
  }, []);

  return (
    <main className={styles.main}>
      <MainContent menuList={menuList} />

      <SLider />
    </main>
  );
};
