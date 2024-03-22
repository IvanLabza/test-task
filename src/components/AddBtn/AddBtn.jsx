import React from "react";
import { Link } from "react-router-dom";
import css from "./AddBtn.module.css";

const AddBtn = () => {
  return (
    <div className="">
      <div>
        <Link className={css.addBtn} to="AddForCorse">
          Присоединиться
        </Link>
      </div>
    </div>
  );
};

export default AddBtn;
