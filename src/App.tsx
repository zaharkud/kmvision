import React from "react";

import "assets/styles/App.scss";
import Header from "sections/header/header";
import Promo from "pages/main/promo/promo";
import Services from "pages/main/services/services";
import Advantages from "pages/main/advantages/advantages";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Promo></Promo>
        <Services></Services>
        <Advantages></Advantages>
      </div>
    </div>
  );
}

export default App;
