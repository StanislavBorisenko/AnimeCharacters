import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  transition: color 500ms ease;

  &:hover {
    color: #2b7fd9;
  }
`;