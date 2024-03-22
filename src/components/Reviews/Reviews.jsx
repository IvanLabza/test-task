import React, { useEffect, useState } from "react";
import FormSend from "../FormSend/FormSend";
import moment from "moment";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import { nanoid } from "nanoid";
import css from "./ReviewsItem/ReviewsItem.module.css";

const Reviews = ({ comments, addComment }) => {
  const [timeAgo, setTimeAgo] = useState("");

  const now = new Date();
  const timestamp = now.getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const kievTime = moment.utc(timestamp).utcOffset("+03:00");
      setTimeAgo(kievTime.fromNow());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [comments]);
  return (
    <div>
      <FormSend addComment={addComment} />
      <ul className={css.commentList}>
        {comments.map((comment) => (
          <li key={nanoid()}>
            <ReviewsItem comment={comment} timeAgo={timeAgo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
