import { createContext } from "react";
import type { IThemeContext } from "./types/ThemeContext";

export const ThemeContext = createContext<IThemeContext>({theme: "dark", toggleTheme: () => {}});