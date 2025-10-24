import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 shadow flex justify-between">
      <Link to="/" className="font-semibold text-lg">🧩 Kanban</Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/new" className="hover:underline text-blue-600 font-semibold">+ Nouvelle tâche</Link>
      </div>
    </nav>
  );
}
