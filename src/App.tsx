import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/Another";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/another-page" element={<AnotherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
