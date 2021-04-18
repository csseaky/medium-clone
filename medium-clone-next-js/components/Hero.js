import React from "react";
import Image from "next/image";
import useGlobalContext from "./context/useGlobalContext";

const Hero = () => {
  const { setIsModalShown } = useGlobalContext();
  return (
    <div className="section-hero">
      <div className="hero-area">
        <div className="text-area">
          <div>
            <h2>Where good ideas find you</h2>
            <p>
              Read and share new perspectives on just about any topic.
              Everyone’s welcome. <a href="/">Learn more.</a>
            </p>
            <button className="btn-white" onClick={() => setIsModalShown(true)}>
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
