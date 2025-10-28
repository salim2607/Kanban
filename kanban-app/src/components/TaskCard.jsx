export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{task.description}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ✏️ Modifier
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
}
