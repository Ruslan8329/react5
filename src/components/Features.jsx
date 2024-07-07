import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1a2948;
  padding: 2rem;
  color: white;
`;

const FeaturesText = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const FeatureCards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  color: #1a2948;
  padding: 1rem;
  border-radius: 5px;
`;

const FeatureCardTitle = styled.h3`
  margin: 0;
  color: #e74c3c;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesText>
        <h2>Our Doctors Specialize in you</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <a href="#">Learn More</a>
      </FeaturesText>
      <FeatureCards>
        <FeatureCard>
          <FeatureCardTitle>Quick examination</FeatureCardTitle>
          <p>The gradual accumulation of information about</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureCardTitle>Best dental surgeons</FeatureCardTitle>
          <p>The gradual accumulation of information about</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureCardTitle>Emergency Case</FeatureCardTitle>
          <p>The gradual accumulation of information about</p>
        </FeatureCard>
      </FeatureCards>
    </FeaturesContainer>
  );
};

export default Features;
