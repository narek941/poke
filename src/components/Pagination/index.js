import React from "react";

import "./Pagination.css";

const Pagination = ({totalCount}) => {

  console.log(totalCount)
  return (
    <>
      <div>
    
      <div className="container__row">
      
          <div ><button className="container__page">1</button></div>
          <div ><button className="container__page">2</button></div>
          <div><button className="container__page">3</button></div>
          <div><button className="container__page">4</button></div>
          <div><button className="container__page">5</button></div>

      </div>
      </div>
    </>
  );
};

export default Pagination;
