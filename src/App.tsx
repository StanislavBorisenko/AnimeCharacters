import "./App.css";
import Header from "./components/Header";
import AnotherPage from "./pages/AnotherPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/another-page" element={<AnotherPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
