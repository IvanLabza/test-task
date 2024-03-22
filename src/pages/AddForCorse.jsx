import React from "react";
import css from "../AddForCorse.module.css";
import Footer from "../components/Footer/Footer";
import FormAdd from "../components/FormAdd/FormAdd";
import Banner from "../components/Banner/Banner";
import img from "../assets/alex (2).png";

const AddForCorse = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.container}>
          <div className={css.wraps}>
            <Banner />
          </div>
          <img className={css.img} src={img} alt="Alex" />
          <FormAdd />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddForCorse;
