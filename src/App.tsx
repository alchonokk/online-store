import React from "react";

import HeaderApp from "./components/HeaderApp";
import CardsBox from "./components/CardsBox";
import FooterApp from "./components/FooterApp";
import ModalWindow from "./components/ModalWindow";
import "./style.css";

function App() {
  return (
    <>
      <HeaderApp />
      <CardsBox />
      <ModalWindow />
      <FooterApp />
    </>
  );
}

export default App;
