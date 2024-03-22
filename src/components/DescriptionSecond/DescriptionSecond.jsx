import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import css from "./DescriptionSecond.module.css";
import photo from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/-.png";

const DescriptionSecond = () => {
  return (
    <div className={css.description}>
      <h2 className={css.title}>
        В рамках закрытой 3-месячной группы ты получишь:
      </h2>
      <div>
        <ul className={css.list}>
          <li>
            <span>
              <img src={photo3} alt="photo" />
              Online-разборы твоих ситуаций в бизнесе на программе
              «Масштабирование»
            </span>
          </li>
          <li>
            <span>
              <img src={photo3} alt="photo" />
              Уроки по программе «Коммерческое мышление»
            </span>
          </li>
          <li>
            <span>
              <img src={photo3} alt="photo" />
              12 уроков тренинга «Удвоение прибыли» (в записи)
            </span>
          </li>
          <li>
            <span>
              <img src={photo3} alt="photo" />
              12 живых уроков нового тренинга «Система управления показателями»
            </span>
          </li>
        </ul>
        <div className={css.imgWrap}>
          <img src={photo} alt="photo" />
          <img src={photo2} alt="photo2" />
        </div>
        <div className={css.descriptionText}>
          <p>
            Получи максимум знаний, чтобы систематизировать бизнес, вывести его
            на новые рынки, прокачать мышление и увеличить доход. Предложение
            действует только до конца месяца!
          </p>
          <AddBtn />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSecond;
