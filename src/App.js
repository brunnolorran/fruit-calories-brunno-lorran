import React from "react";
import { GlobalStyle } from "./Styles/Global";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";

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
