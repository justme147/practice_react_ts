import React from "react";

import { SLider } from "../../components/Slider/Slider";
import { MainContent } from "../../components/MainContent/MainContent";
import { IMenuList } from "../../interfaces";
import "./main-page.scss";

type MainPageProps = {
  menuList: IMenuList[];
};

export const MainPage: React.FC<MainPageProps> = ({ menuList }) => {
  return (
    <main className="main">
      <MainContent menuList={menuList} />

      <SLider />
    </main>
  );
};
