import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./Styles/Global";

import Header from "./components/Header";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <div id="main-container">
        <Header />
        <Routes />
      </div>
      <GlobalStyle />
    </Router>
  );
}

export default App;
