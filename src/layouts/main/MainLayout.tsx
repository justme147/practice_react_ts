import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./main-layout.scss";
import { Header } from "../../components/Header/Header";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Menu } from "../../components/Menu/Menu";
import { IMenuList, IHelpList, IRoutesList } from "../../interfaces";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

export const MainLayout: React.FC = () => {
  const [menuList, setMenuList] = useState<IMenuList[]>([
    {
      id: 1,
      title: "Конвертер",
      url: "/converter",
      items: [
        { id: 1, title: "Базовые", url: "/converter/basic" },
        { id: 2, title: "Специальные", url: "/converter/special" },
        { id: 3, title: "Инженерные", url: "/converter/engineering" },
        { id: 4, title: "Компьютерные", url: "/converter/computer" },
      ],
    },
    {
      id: 2,
      title: "Матрицы",
      url: "/matrix",
      items: [
        { id: 1, title: "Сложение", url: "/matrix/addition" },
        { id: 2, title: "Разность", url: "/matrix/residual" },
        { id: 3, title: "Произведение", url: "/matrix/multiplication" },
        {
          id: 4,
          title: "Умножение на число",
          url: "/matrix/multiplication_by_number",
        },
        {
          id: 5,
          title: "Транспонирование",
          url: "/matrix/transposition",
        },
        {
          id: 6,
          title: "Возведение в степень",
          url: "/matrix/exponentiation",
        },
        { id: 7, title: "Определитель", url: "/matrix/determinant" },
        { id: 8, title: "Обратная матрица", url: "/matrix/reverse" },
        { id: 9, title: "Ранг", url: "/matrix/rank" },
      ],
    },
    {
      id: 3,
      title: "СЛАУ",
      url: "/slau",
      items: [
        { id: 1, title: "Метод Крамера", url: "/slau/cramer" },
        { id: 2, title: "Метод обратной матрицы", url: "/slau/inverse_matrix" },
        { id: 3, title: "Метод Гаусса", url: "/slau/gauss" },
        { id: 4, title: "Метод Гаусса-Жордана", url: "/slau/gauss_jordan" },
        {
          id: 5,
          title: "Исследование на совместимость",
          url: "/slau/compatibility",
        },
      ],
    },
    {
      id: 4,
      title: "Графики",
      url: "/charts",
      items: [
        { id: 1, title: "Построение графика функции", url: "/charts/plotting" },
      ],
    },
    {
      id: 5,
      title: "Другое",
      url: "/other",
      items: [
        { id: 1, title: "Квадратные уравнения", url: "/other/quadratic" },
        {
          id: 2,
          title: "Арифметическая прогрессия",
          url: "/other/arithmetic_progression",
        },
        {
          id: 3,
          title: "Геометрическая прогрессия",
          url: "/other/geometric_progression",
        },
        { id: 4, title: "Производные", url: "/other/derivative" },
        { id: 5, title: "Логарифмы", url: "/other/logarithms" },
        { id: 6, title: "Сложение верторов", url: "/other/vector_addition" },
        { id: 7, title: "Разность векторов", url: "/other/vector_residual" },
        { id: 8, title: "Длина вектора", url: "/other/vector_length" },
        {
          id: 9,
          title: "Умножение вектора на число",
          url: "/other/vector_multiplication",
        },
        {
          id: 10,
          title: "Скалярное произведение",
          url: "/other/scalar_multiplication",
        },
        {
          id: 11,
          title: "Векторное произведение",
          url: "/other/cross_multiplication",
        },
        {
          id: 12,
          title: "Смешанное произведение",
          url: "/other/mixed_multiplication",
        },
      ],
    },
  ]);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isHelp, setIsHelp] = useState<boolean>(false);
  const [helpStep, setHelpStep] = useState<number>(0);
  const [helpStyle, setHelpStyle] = useState<React.CSSProperties>({});
  const helpElements: IHelpList[] = [
    { text: "qwe0", element: ".slider" },
    { text: "qwe1", element: ".header-button" },
    { text: "qwe2", element: ".sidebar-menu" },
    { text: "qwe3", element: ".content-list" },
  ];
  const routes: IRoutesList[] = [
    {
      path: "/",
      component: <MainPage menuList={menuList} />,
    },
    {
      path: "/converter",
      component: <MainPage menuList={menuList} />,
    },
    {
      path: "/matrix",
      component: <MainPage menuList={menuList} />,
    },
    {
      path: "/slau",
      component: <MainPage menuList={menuList} />,
    },
    {
      path: "/charts",
      component: <MainPage menuList={menuList} />,
    },
    {
      path: "/other",
      component: <MainPage menuList={menuList} />,
    },
    { path: "*", component: <ErrorPage /> },
  ];
  const location = useLocation();

  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsMenu(false);
        setIsHelp(false);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [isMenu]);

  useEffect(() => {
    helpElements[helpStep].element === ".sidebar-menu"
      ? setIsMenu(true)
      : setIsMenu(false);

    setTimeout(() => {
      const element: HTMLElement | null = document.querySelector(
        `${helpElements[helpStep].element}`
      );

      if (element) {
        setHelpStyle({
          height: element?.offsetHeight + "px",
          width: element?.offsetWidth + "px",
          top: element?.offsetTop + "px",
          left: element?.offsetLeft + "px",
        });
      }
    }, 0);
  }, [helpStep]);

  const helpStepHandler = (): void | undefined => {
    if (helpStep >= helpElements.length - 1) {
      setIsHelp(false);
      return;
    }
    setHelpStep(helpStep + 1);
  };

  return (
    <div className="container">
      <Header
        clickMenuHandler={() => setIsMenu(true)}
        clickHelpHandler={() => setIsHelp(true)}
        setHelpStepHandler={() => setHelpStep(0)}
      />

      {/* <TransitionGroup> */}
      {/* <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
      <Switch location={location}>
        {/* <Route path="/" exact render={() => <MainPage menuList={menuList} />} />

        <Route render={() => <ErrorPage />} /> */}
        {routes.map((page) => (
          <Route
            key={page.path}
            exact
            path={page.path}
            render={() => page.component}
          />
        ))}
      </Switch>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}

      <Menu isMenu={isMenu} menuList={menuList} closeMenu={setIsMenu} />

      <CSSTransition in={isHelp} timeout={300} classNames="hint" unmountOnExit>
        <div className="help">
          <div className="help-inner">
            <p className="help-text" onClick={() => helpStepHandler()}>
              {helpElements[helpStep].text}
              Далее
            </p>
            <span className="help-element" style={helpStyle}></span>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
