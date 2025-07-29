import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.getElementById("root");

    if (theme === "dark") {
      root?.style.setProperty("background-color", "#121829");
    } else {
      root?.style.setProperty("background-color", "rgb(158 161 178)");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
