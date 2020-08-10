import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./mainlayout.scss";
import IconMenu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import AutorenewIcon from "@material-ui/icons/Autorenew";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatLineSpacingIcon from "@material-ui/icons/FormatLineSpacing";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IMenuList, ISliderList, IMenuListItems } from "../../interfaces";

export const MainLayout: React.FC = () => {
  // console.log(styles);

  const [menuList, setMenuList] = useState<IMenuList[]>([
    {
      id: 1,
      title: "Конвертер",
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
      title: "Другое",
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
    {
      id: 5,
      title: "Конвертер",
      items: [
        { id: 1, title: "Базовые", url: "/converter/basic" },
        { id: 2, title: "Специальные", url: "/converter/special" },
        { id: 3, title: "Инженерные", url: "/converter/engineering" },
        { id: 4, title: "Компьютерные", url: "/converter/computer" },
      ],
    },
    {
      id: 6,
      title: "Конвертер",
      items: [
        { id: 1, title: "Базовые", url: "/converter/basic" },
        { id: 2, title: "Специальные", url: "/converter/special" },
        { id: 3, title: "Инженерные", url: "/converter/engineering" },
        { id: 4, title: "Компьютерные", url: "/converter/computer" },
      ],
    },
  ]);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [sliderList, setSLiderList] = useState<ISliderList[]>([
    {
      id: 1,
      title: "Конвертер",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter",
    },
    {
      id: 2,
      title: "Конвертер1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter1",
    },
    {
      id: 3,
      title: "Конвертер2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter2",
    },
    {
      id: 4,
      title: "Конвертер3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter3",
    },
    {
      id: 5,
      title: "Конвертер4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter4",
    },
    {
      id: 6,
      title: "Конвертер5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter5",
    },
  ]);
  const [displayChild, setDisplayChild] = useState<number>(0);
  const history = useHistory();

  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsMenu(false);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [isMenu]);

  const windowClickHandler = (event: React.MouseEvent): void | boolean => {
    const nav: any = document.querySelector(".sidebar-menu");
    const target: any = event.target;

    if (event.target === nav || nav.contains(target)) return;
    setIsMenu(false);
  };

  const SliderArrow = (props: any): JSX.Element => {
    const { className, style, onClick, type } = props;
    return (
      <button
        type="button"
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        {type === "back" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </button>
    );
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
            onClick={() => setIsMenu(false)}
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
    <div className="container">
      {/* Start header section */}

      <header className="header">
        <div className="header-inner">
          <button className="header-button" onClick={() => setIsMenu(true)}>
            <IconMenu />
          </button>
          <h6 className="header-logo" onClick={() => history.push("/")}>
            Math helper
          </h6>
          <div className="header-search">
            <div className="header-icon">
              <SearchIcon />
            </div>
            <div className="header-input">
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
        </div>
      </header>

      {/* End header section */}

      {/* Start slider section */}

      {/* <section className={styles.slider}> */}

      <main className="main">
        <div className="main-content"></div>

        <Slider
          dots={true}
          speed={1000}
          easing="ease"
          autoplay={true}
          autoplaySpeed={4000}
          touchThreshold={10}
          className="slider"
          nextArrow={<SliderArrow type="next" />}
          prevArrow={<SliderArrow type="back" />}
        >
          {sliderList.map((item) => (
            <div className="slider-item" key={item.id}>
              <div className="slider-content">
                <h3 className="slider-title">{item.title}</h3>
                <p className="slider-descr">{item.description}</p>
                <button
                  className="slider-button"
                  onClick={() => history.push(item.url)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </main>

      {/* </section> */}

      {/* End slider section */}

      {isMenu && (
        <div className="sidebar-inner" onClick={(e) => windowClickHandler(e)}>
          <div className="sidebar">
            <nav className="sidebar-menu">
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
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
