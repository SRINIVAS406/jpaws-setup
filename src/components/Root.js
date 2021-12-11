import Navbar from "./Navbar";
import About from "./About";
// import Carousels from "./Carousels";
import React, { useState } from "react";
import CarouselObj from "../JS_CSS/carousel/Carousel";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Root() {
  // Toggle mode from light to dark
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  //   Carousel obj
  //   const carouselObj = [
  //     {
  //       srcurl: "../Images/CarouselImg/desktopsoftware.webp",
  //       title: "Wep App",
  //       shortDesc: "We build your buissiness app",
  //     },
  //     {
  //       srcurl: "../Images/CarouselImg/webdesign.webp",
  //       title: "Windows app",
  //       shortDesc: "We build software for you system",
  //     },
  //   ];
  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        aboutText="About"
        toggleMode={toggleMode}
      ></Navbar>
      <h1>Hell srinivas</h1>
      <CarouselObj />
      <div className="">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            {/* <Carousels carouselObj={carouselObj}></Carousels> */}
          </Route>
        </Switch>

        <About></About>
      </div>
    </Router>
  );
}
