import { useContext, type FC } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Button } from "./styles";

const ThemeButton: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>{theme === "dark" ? "🌙" : "☀️"}</Button>
  );
};

export default ThemeButton;
