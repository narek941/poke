import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Pokemon from "../containers/Pokemon";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:poke" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};
export default MainRouter;
