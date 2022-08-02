import React from "react";
import "./Hero.css";
import MainVideo from "../../assets/video.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span> Protocol
        </h1>
        <p>
          Guranted liquidity trading for millions of users and top Ethereum
          stacking app
        </p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Volume Secured: $42,104,785,222,69</h2>
      </div>
    </div>
  );
};

export default Hero;
