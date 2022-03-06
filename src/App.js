import Header from "./Components/Header";
import Fruits from "./Pages/Fruits";

import { GlobalStyle } from "./Styles/Global";

function App() {
  return (
    <>
      <div id="main-container">
        <Header />
        <Fruits />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
