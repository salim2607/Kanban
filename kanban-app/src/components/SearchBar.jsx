import { useState } from "react";

export default function SearchBar({ onSearch, onFilter }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    onFilter(value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow mb-6">
      <input
        type="text"
        placeholder="🔍 Rechercher une tâche..."
        value={query}
        onChange={handleSearchChange}
        className="border p-2 rounded w-full sm:w-2/3"
      />
      <select
        value={status}
        onChange={handleFilterChange}
        className="border p-2 rounded w-full sm:w-1/3"
      >
        <option value="all">Tous les statuts</option>
        <option value="todo">À faire</option>
        <option value="in-progress">En cours</option>
        <option value="done">Terminé</option>
      </select>
    </div>
  );
}
