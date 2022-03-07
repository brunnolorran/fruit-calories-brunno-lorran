import React from "react";
import { Routes, Route } from "react-router-dom";

import Fruits from "./Pages/Fruits";
import Challenge from "./Pages/Challenge";
import Details from "./Pages/Details";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Fruits />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default MainRoutes;
