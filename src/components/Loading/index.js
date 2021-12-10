import React from "react";
import load from "../../assets/img/loading.gif";

import "./Loading.css";

const Loading = (props) => {
  return (
    <>
      <div className="card__container">
        <img src={load} alt="loading..." />
      </div>
    </>
  );
};

export default Loading;
