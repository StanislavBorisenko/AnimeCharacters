import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  transition: color 500ms ease;

  &:hover {
    color: #2b7fd9;
  }
`

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <NavBar>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/another-page">###</StyledLink>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;