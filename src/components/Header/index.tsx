import { type FC } from "react";
import { HeaderBar, NavBar, StyledLink } from "./styles";

const Header: FC = () => {
  return (
    <HeaderBar>
      <NavBar>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/another-page">Другая страница</StyledLink>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;
