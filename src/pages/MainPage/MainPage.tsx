import React from "react";
import { NavLink } from "react-router-dom";

import { SLider } from "../../components/Slider/Slider";
import { IMenuList } from "../../interfaces";
import "./main-page.scss";

type MainPageProps = {
  menuList: IMenuList[];
};

export const MainPage: React.FC<MainPageProps> = ({ menuList }) => {
  return (
    <main className="main">
      <div className="content">
        <div className="content-inner">
          <div className="content-header">
            {/* <a className="content-logo" onClick={() => history.push("/")}>
                Math helper
              </a> */}
            <h1 className="content-title">Math helper</h1>
          </div>
          <div className="content-body">
            {/* <h1 className="content-title">Math helper</h1> */}

            <h2 className="content-subtitle">Помощник по математике</h2>

            <p className="content-text">
              Данный помощник дает возможность воспользоваться теорией и
              калькуляторами по следующим разделам:
            </p>
            <ul className="content-list">
              {menuList.map((item) => (
                <li className="content-item" key={item.id}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="content-footer">
            <p className="content-copyright">© 2020 «Math helper»</p>
            {/* <a href="mailto:math_helper@gmail.com" className="content-mail">
                math_helper@gmail.com
              </a> */}
          </div>
        </div>
      </div>

      <SLider />
    </main>
  );
};
