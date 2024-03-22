import React from "react";
import css from "./ReviewsItem.module.css";
import img from "../../../assets/аватар.png";
import img1 from "../../../assets/Icon.png";
import img2 from "../../../assets/Group.png";
import img3 from "../../../assets/Vector (1).png";
import img4 from "../../../assets/Icon (1).png";

const ReviewsItem = ({ comment, timeAgo }) => {
  return (
    <div className="">
      <div className={css.ReviewsItemContainer}>
        <div className={css.ImgContainer}>
          <img src={img} alt="" className={css.UserImage} />
        </div>
        <div className={css.TextContentContainer}>
          <div className={css.UserDetails}>
            <h3 className={css.UserName}>{comment.userName}</h3>
            <p className={css.TimeAgo}>{timeAgo}</p>
            <p className={css.UserMessage}>{comment.massage}</p>
          </div>
        </div>
      </div>
      <div className={css.FeedbackContainer}>
        <button className={css.FeedbackButton}>
          Ответить
          <img src={img1} alt="" className={css.FeedbackImage} />
        </button>
        <div className={css.FeeContainer}>
          <span>
            <img src={img2} alt="" className={css.FeeImage} />0
          </span>
          <span>
            <img src={img3} alt="" className={css.FeeImage} />0
          </span>
          <img src={img4} alt="" className={css.FeeImage} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
