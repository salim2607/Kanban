import TaskCard from "./TaskCard";

export default function KanbanBoard({ tasks, onEdit, onDelete, onMove }) {
  const columns = [
    { key: "todo", title: "À faire" },
    { key: "in-progress", title: "En cours" },
    { key: "done", title: "Terminé" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {columns.map((col) => (
        <div key={col.key} className="bg-gray-50 p-4 rounded shadow min-h-[300px]">
          <h2 className="text-lg font-semibold text-center mb-3">{col.title}</h2>

          {tasks.filter((t) => t.status === col.key).length === 0 ? (
            <p className="text-center text-sm text-gray-400">Aucune tâche</p>
          ) : (
            tasks
              .filter((t) => t.status === col.key)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onMove={onMove}
                />
              ))
          )}
        </div>
      ))}
    </div>
  );
}
