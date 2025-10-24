import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 shadow">
        <Link to="/" className="font-semibold">Accueil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
