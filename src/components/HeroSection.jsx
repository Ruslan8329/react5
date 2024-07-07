import React from "react";
import styled from "styled-components";
// import bgImage from "./assets/bg-img.png";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("assets/bg-img.png");
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #218838;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Meet the Best Hospital</HeroTitle>
      <HeroSubtitle>
        We are always fully focused on helping your child and you
      </HeroSubtitle>
      <HeroButton>Join Us</HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
