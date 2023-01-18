import {
  UpdatesCard,
  TopResourceCard,
  TopQuestionsCard,
  TopVotedCard,
} from "../Card/Card";
import "./Carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "./first.png";
import RightArrow from "./last.png";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
);

export default function Carousel(props) {
  const { forumData } = props;

  const retrieveCardData = (forumData, category) => {
    let mostPopular = forumData.reduce(
      (prevItem, currentItem) => {
        if (
          currentItem["likes"] > prevItem["likes"] &&
          currentItem["category"] === category
        ) {
          return currentItem;
        } else {
          return prevItem;
        }
      },
      { likes: -1 }
    );
    console.log("ques and top", mostPopular);
    return mostPopular;
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 2,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slide-top">
      {console.log("we are at -> ", forumData)}
      <Slider {...settings}>
        <div>
          <UpdatesCard />
        </div>
        <div>
          <TopVotedCard cardData={retrieveCardData(forumData, "general")} />
        </div>
        <div>
          <TopQuestionsCard
            cardData={retrieveCardData(forumData, "Questions")}
          />
        </div>
        <div>
          <TopResourceCard />
        </div>
      </Slider>
    </div>
  );
}
