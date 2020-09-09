import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IMenuList, IMenuListItems } from "../../interfaces";
import "./main-content.scss";

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
    <div className="content">
      <div className="content-inner">
        <div className="content-header">
          <h1 className="content-title">Math helper</h1>
        </div>
        {!page && (
          <div className="content-body">
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
        )}
        {page && (
          <div className="content-body">
            <p className="content-text">
              Для удобства каждый раздел разделен на подразделы. В разделе{" "}
              <span>{page.title}</span> их {page.items.length}. В каждом
              подразделе имеется теория(если в ней есть необходимость) и
              калькулятор:
            </p>
            <ul className="content-list">
              {page.items.map((item) => (
                <li className="content-item" key={item.id}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="content-footer">
          <p className="content-copyright">© 2020 «Math helper»</p>
        </div>
      </div>
    </div>
  );
};
