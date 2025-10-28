import { useState } from "react";
import TaskCard from "./TaskCard";

export default function KanbanBoard({ tasks, onEdit, onDelete, onMove }) {
  const columns = [
    { key: "todo", title: "À faire" },
    { key: "in-progress", title: "En cours" },
    { key: "done", title: "Terminé" },
  ];

  const [draggedTask, setDraggedTask] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.setData("text/plain", task.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, columnKey) => {
    e.preventDefault();
    setDragOverColumn(columnKey);
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOverColumn(null);
    }
  };

  const handleDrop = (e, columnKey) => {
    e.preventDefault();
    setDragOverColumn(null);
    
    if (draggedTask && draggedTask.status !== columnKey) {
      onMove(draggedTask.id, columnKey);
    }
    setDraggedTask(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {columns.map((col) => (
        <div
          key={col.key}
          className={`bg-gray-50 p-4 rounded shadow min-h-[300px] transition-colors ${
            dragOverColumn === col.key ? "bg-blue-100" : ""
          }`}
          onDragOver={(e) => handleDragOver(e, col.key)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, col.key)}
        >
          <h2 className="text-lg font-semibold text-center mb-3">{col.title}</h2>

          {tasks.filter((t) => t.status === col.key).length === 0 ? (
            <p className="text-center text-sm text-gray-400">Aucune tâche</p>
          ) : (
            <div className="space-y-2">
              {tasks
                .filter((t) => t.status === col.key)
                .map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                    className="cursor-move"
                  >
                    <TaskCard
                      task={task}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onMove={onMove}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}