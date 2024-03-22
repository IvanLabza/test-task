import { useEffect, useState } from "react";
import moment from "moment";
import Video from "../components/Video/Video";
import Reviews from "../components/Reviews/Reviews";
import DescriptionFirst from "../components/DescriptionFirst/DescriptionFirst";
import DescriptionSecond from "../components/DescriptionSecond/DescriptionSecond";
import Footer from "../components/Footer/Footer";

function Home() {
  const commentsDefat = [
    {
      massage: "Ждём начала!",
      userName: "Имя пользователя",
    },
    {
      massage: "Ждём начала!",
      userName: "Светлана",
    },
    {
      massage: "Ждём начала!",
      userName: "Игорь Ожегов",
    },
  ];

  const [video, setVideo] = useState(false);
  const [text, setText] = useState(false);
  const [image, setImage] = useState(false);
  const [Banners, setBanners] = useState(false);
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("comments")) || commentsDefat;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = moment().utcOffset("+03:00");
      const currentHour = currentTime.hours();
      const currentMinute = currentTime.minutes();

      if (currentHour >= 18 && currentHour < 21) {
        if (currentHour === 18 && currentMinute <= 20) {
          setVideo(true);
        } else {
          setVideo(true);
          setBanners(true);
          setText(true);
        }
      } else if (currentHour >= 21 || currentHour < 18) {
        setImage(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }),
    [comments];

  const addComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="content__container">
            <Video video={video} image={image} />
            {Banners && <DescriptionFirst />}
            {text && <DescriptionSecond />}
          </div>
          <div className="form__container">
            <Reviews addComment={addComment} comments={comments} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
