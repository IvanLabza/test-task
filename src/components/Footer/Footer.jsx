import React from "react";
import img from "../../assets/Subtract.png";
import img2 from "../../assets/Vector 13 (Stroke).png";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.FooterContainer}>
      <footer className={css.Footer}>
        <div className={css.SupportService}>
          <span className={css.SupportServiceTitle}>Служба поддержки:</span>
          <div className={css.SupportServiceContent}>
            <a href="" className={css.TelegramLink}>
              <img src={img} alt="" className={css.TelegramIcon} />
              <span className={css.TelegramText}>Telegram</span>
            </a>
            <span className={css.EmailInfo}>
              <img src={img2} alt="" className={css.EmailIcon} />
              info@alexyanovsky.info
            </span>
          </div>
        </div>
        <div className={css.FooterInfo}>
          <span className={css.DistanceContract}>Дистанционный договор</span>
          <span className={css.Copyright}>
            © 2023 ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
