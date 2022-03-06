import Header from "./Components/Header";
import Fruits from "./Pages/Fruits";
import Challenge from "./Pages/Challenge";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Styles/Global";

function App() {
  return (
    <>
      <div id="main-container">
        <Header />
        <Router>
          <Routes>
            <Route path="/challenge" element={<Challenge />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Fruits />}></Route>
          </Routes>
        </Router>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
