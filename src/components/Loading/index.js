import React from "react";

import load from "../../assets/img/loading.gif";

import "./Loading.css";

const Loading = () => 
  <div className="load__container">
    <img className="load__container__image" src={load} alt="loading..." />
  </div>


export default Loading;
