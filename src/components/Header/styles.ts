import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const StyledLink = styled(Link)< {theme: string}>`
  color: ${props => props.theme === "dark" ? "#A8AEBF" : "#0c3d71"};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 500ms ease;
  
  &:hover {
    color: ${props => props.theme === "dark" ? "#0c3d71" : "#175ca7ff"}
  }
`;