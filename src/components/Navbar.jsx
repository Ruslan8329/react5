import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0044cc;
  padding: 1rem 2rem;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  color: ${(props) => (props.active ? "#fff" : "#bbb")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #218838;
  }
`;

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <NavbarContainer>
      <Logo>MedicalGenuin</Logo>
      <NavItems>
        {["Home", "Product", "Pricing", "Contact"].map((item) => (
          <NavItem
            key={item}
            active={activeItem === item}
            onClick={() => handleClick(item)}
          >
            {item}
          </NavItem>
        ))}
      </NavItems>
      <Button>JOIN US</Button>
    </NavbarContainer>
  );
};

export default Navbar;
