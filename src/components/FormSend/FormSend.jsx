import { Formik, Form, Field } from "formik";
import React from "react";
import facebook from "../../assets/Facebook - Original.png";
import twitter from "../../assets/Twitter - Original.png";
import google from "../../assets/Google - Original.png";
import telegram from "../../assets/Telegram - Original.png";
import vk from "../../assets/VK - Original.png";
import yandex from "../../assets/Mask group.png";
import css from "./FormSend.module.css";
import img from "../../assets/Group 79.png";

const FormSend = ({ addComment }) => {
  const onSend = (values, actions) => {
    addComment(values);
    actions.resetForm();
  };

  const initialValues = {
    massage: "",
    userName: "",
  };
  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} onSubmit={onSend}>
        <Form>
          <label className={css.label}>
            <Field
              as="textarea"
              name="massage"
              className={css.massage}
              placeholder="Добавить комментарий..."
            />
          </label>

          <div className={css.userInfo}>
            <span>Войти через:</span>
            <ul className={css.socialIcons}>
              <li>
                <a href="">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={google} alt="google" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={vk} alt="vk" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={yandex} alt="yandex" />
                </a>
              </li>
            </ul>
          </div>
          <label className={css.label}>
            <span>Или как гость</span>
            <div>
              <Field
                className={css.userName}
                name="userName"
                placeholder="Имя *"
              />
              <img src={img} alt="" />
            </div>
          </label>

          <button className={css.btn} type="submit">
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormSend;
