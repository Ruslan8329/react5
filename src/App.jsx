import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </AppContainer>
  );
};

export default App;
