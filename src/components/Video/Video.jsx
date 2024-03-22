import React, { useState } from "react";
import img_video from "../../assets/img_video.png";
import css from "./Video.module.css";

const Video = ({ video, image }) => {
  return (
    <div className={css.video}>
      <div className={css.wraps}>
        {image && <img src={img_video} alt="img_video" />}
        {video && (
          <iframe
            src="https://www.youtube.com/embed/wVkD89V1-BQ?si=2J6vk4NfaDC1iDBa"
            title="КАК СОЗДАТЬ ПРИРОСТ ТРАФИКА И ПРОДАЖ В 2023 ГОДУ"
            frameBorder="0"
            style={{
              width: "100%",
              height: "576px",
              backgroundImage: { img_video },
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Video;
