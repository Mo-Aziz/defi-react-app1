import React from "react";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Developer/>
       <Subscribe/>
    </>
  );
}

export default App;
