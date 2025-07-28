import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 18px;
  font-weight: 500;
`;

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <NavBar>
        <a href="">Главная</a>
        <a href="">###</a>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;
