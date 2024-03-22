import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./FormAdd.module.css";

const FormAdd = () => {
  const onSubmitForm = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  const initialValues = {
    name: "",
    mail: "",
    tel: "",
  };
  return (
    <div className={css.formAddContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        <Form className={css.formAdd}>
          <Field
            type="text"
            name="name"
            placeholder="Имя"
            className={css.formAddField}
          />
          <Field
            type="text"
            name="mail"
            placeholder="Email"
            className={css.formAddField}
          />
          <Field
            type="text"
            name="tel"
            placeholder="Телефон"
            className={css.formAddField}
          />
          <button type="submit" className={css.formAddButton}>
            Присоединиться
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAdd;
