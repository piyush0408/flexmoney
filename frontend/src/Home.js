import React from "react";
import Form from "./Form";
import "./Home.css";
import Yoga from "./deposit.jpg";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="headerContainer">
        <p>Yoga</p>
      </div>
      <div className="contentContainer">
        <div className="formCont">
          <Form />
        </div>
        <div className="yogaContainer">
          <img src={Yoga} alt="yoga" className="yogaPic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
