import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import css from "../DescriptionFirst/DescriptionFirst.module.css";

import emoji from "../../assets/emoji.png";

const Banner = () => {
  return (
    <a
      href="https://alexyanovsky.com/udvoenie_pribyli?utm_source=trafik_web"
      className={css.DescriptionFirst}
      target="_blank"
    >
      <div className={css.wraps}>
        <span className={css.textCont}>
          3-месячная VIP-группа с Алексом Яновским по развитию бизнеса
        </span>
        <h2 className={css.subTitle}>
          {" "}
          «Бизнес-джет» <img src={emoji} width={30} height={30} alt="emoji" />
        </h2>
        <span className={css.textCont}>Позволь своему бизнесу взлететь!</span>
      </div>
    </a>
  );
};

export default Banner;
