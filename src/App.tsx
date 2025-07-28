import Header from "./components/Header";
import AnotherPage from "./pages/AnotherPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/another-page" element={<AnotherPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
