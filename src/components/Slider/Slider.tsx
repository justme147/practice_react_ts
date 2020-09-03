import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ISliderList } from "../../interfaces";
import "./slider.scss";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const SLider: React.FC = () => {
  const [sliderList, setSLiderList] = useState<ISliderList[]>([
    {
      id: 1,
      title: "Конвертер: базовые",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/converter/basic",
    },
    {
      id: 2,
      title: "Матрицы: произведение",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/matrix/multiplication",
    },
    {
      id: 3,
      title: "Матрицы: определитель",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/matrix/determinant",
    },
    {
      id: 4,
      title: "СЛАУ: метод Гаусса",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/slau/gauss",
    },
    {
      id: 5,
      title: "Другое: квадратные уравнения",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/other/quadratic",
    },
    {
      id: 6,
      title: "Другое: производные",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est sequi eligendi at, itaque fugiat accusantium esse perferendis sunt aut repudiandae atque, obcaecati animi impedit ea distinctio sit error numquam, ipsam alias sapiente voluptatibus saepe dicta eius? Corporis expedita perspiciatis excepturi quam voluptatibus in nostrum sequi placeat similique?",
      url: "/other/derivative",
    },
  ]);

  const history = useHistory();

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

  return (
    <Slider
      dots={true}
      speed={1000}
      easing="ease"
      // autoplay={true}
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
  );
};
