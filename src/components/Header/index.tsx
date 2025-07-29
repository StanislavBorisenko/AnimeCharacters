import { type FC } from "react";
import { HeaderBar, NavBar, StyledLink } from "./styles";
import ThemeButton from "../ThemeButton";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Header: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderBar>
      <NavBar>
        <ThemeButton />
        <StyledLink theme={theme} to="/">
          Главная
        </StyledLink>
      </NavBar>
    </HeaderBar>
  );
};

export default Header;
