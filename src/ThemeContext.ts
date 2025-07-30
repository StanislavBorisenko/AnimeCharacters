import { createContext } from "react";
interface IThemeContext {
	theme: string;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
	theme: "dark",
	toggleTheme: () => {},
});
