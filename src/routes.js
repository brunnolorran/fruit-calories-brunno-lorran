import React from "react";
import { Routes, Route } from "react-router-dom";

import Fruits from "./pages/Fruits";
import Challenge from "./pages/Challenge";
import Details from "./pages/Details";

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
