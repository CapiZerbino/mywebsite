import React from "react";
import Portfolio from "../components/HomePage/Portfolio";
import Features from "./../components/HomePage/Features";
import HeroSection from "./../components/HomePage/HeroSection";

function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <Features></Features>
      <Portfolio></Portfolio>
    </>
  );
}

export default HomePage;
