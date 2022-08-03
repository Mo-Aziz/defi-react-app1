import React from "react";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Developer/>
    </>
  );
}

export default App;
