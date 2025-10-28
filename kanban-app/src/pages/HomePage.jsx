import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import KanbanBoard from "../components/KanbanBoard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const { tasks, addTask, editTask, removeTask, moveTask } = useTasks();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // 🔍 Fonction de filtrage combinée
  const filteredTasks = tasks.filter((task) => {
    const matchesQuery =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ? true : task.status === filterStatus;

    return matchesQuery && matchesStatus;
  });

  const handleEdit = (task) => {
    const newTitle = prompt("Modifier le titre :", task.title);
    const newDesc = prompt("Modifier la description :", task.description);
    if (newTitle) {
      editTask(task.id, { title: newTitle, description: newDesc || "" });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🧩 Kanban Board</h1>

      {/* Barre de recherche et filtrage */}
      <SearchBar
        onSearch={(query) => setSearchQuery(query)}
        onFilter={(status) => setFilterStatus(status)}
      />

      {/* Formulaire d’ajout */}
      <TaskForm onSubmit={addTask} />

      {/* Tableau Kanban filtré */}
      <KanbanBoard
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={removeTask}
        onMove={moveTask}
      />
    </div>
  );
}
