import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import TeamList from "./TeamList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { icons } from "react-icons/lib";
<link
  rel="stylesheet"
  href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
/>;

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/teams")
      .then((res) => res.json())
      .then((res) => {
        setTeams(res);
      });
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "gray" }}
        onClick={onClick}
      ></div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="row">
      <Slider {...settings}>
        {teams.map((team) => (
          <TeamList key={team.id} team={team} />
        ))}
      </Slider>
    </div>
  );
};

export default Teams;
