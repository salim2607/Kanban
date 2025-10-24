export default function TaskCard({ task, onEdit, onDelete, onMove }) {
    return (
      <div className="bg-white p-3 rounded shadow mb-2">
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{task.description}</p>
  
        <div className="flex justify-between">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 text-sm hover:underline"
          >
            ✏️ Modifier
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 text-sm hover:underline"
          >
            🗑️ Supprimer
          </button>
        </div>
  
        <div className="flex justify-around mt-2">
          {task.status !== "todo" && (
            <button onClick={() => onMove(task.id, "todo")} className="text-xs">
              ⬅️ À faire
            </button>
          )}
          {task.status !== "in-progress" && (
            <button onClick={() => onMove(task.id, "in-progress")} className="text-xs">
              ⚙️ En cours
            </button>
          )}
          {task.status !== "done" && (
            <button onClick={() => onMove(task.id, "done")} className="text-xs">
              ✅ Terminé
            </button>
          )}
        </div>
      </div>
    );
  }
  