import React from "react";
import "./styles.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <div>
      <NavBar />
          <Header />
          <Portfolio/>
      <Footer />
    </div>
  );
};

export default App;
