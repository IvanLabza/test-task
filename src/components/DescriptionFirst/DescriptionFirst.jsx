import React from "react";
import css from "./DescriptionFirst.module.css";
import Banner from "../Banner/Banner";
import AddBtn from "../AddBtn/AddBtn";

const DescriptionFirst = () => {
  return (
    <div>
      <h1 className={css.title}>
        Как находить и использовать скрытые возможности в бизнесе?
      </h1>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Banner />
          <AddBtn />
        </div>
      </div>

      <div className={css.textWrap}>
        <span className={css.textSubCont}>
          ВНЕДРЯЙ ЭФФЕКТИВНУЮ
          <span>
            {" "}
            СИСТЕМУ УПРАВЛЕНИЯ <br /> И МАСШТАБИРОВАНИЯ ПРИБЫЛИ ВМЕСТЕ
          </span>{" "}
          С АЛЕКСОМ ЯНОВСКИМ! 
        </span>
      </div>
    </div>
  );
};

export default DescriptionFirst;
