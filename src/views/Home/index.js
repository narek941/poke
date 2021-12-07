import React from "react";

import Header from "../../components/Header";
import Bar from "../../components/Bar";
import List from "../../components/List";
import Pagination from "../../components/Pagination";

import './Home.css';

const Home = () => {

  return (
    <>
      <Header />
   
      <Bar />
      <List />
     
      
     
      <Pagination />

    </>
  );
};

export default Home;