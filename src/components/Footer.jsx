import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #0044cc;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Medical Center. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
