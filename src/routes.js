import React from "react";
import { Routes, Route } from "react-router-dom";

import Fruits from "./pages/Fruits";
import Challenge from "./pages/Challenge";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Fruits />} />
      <Route path="/challenge" element={<Challenge />} />
    </Routes>
  );
};

export default MainRoutes;
