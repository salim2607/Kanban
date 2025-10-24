import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks, updateTask } from "../api/tasksApi";

export default function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", status: "todo" });

  useEffect(() => {
    const fetchTask = async () => {
      const all = await getTasks();
      const found = all.find((t) => t.id === Number(id));
      if (found) setTask(found);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">✏️ Modifier la tâche</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
          required
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="border p-2 w-full mb-2 rounded"
        />
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="border p-2 w-full mb-4 rounded"
        >
          <option value="todo">À faire</option>
          <option value="in-progress">En cours</option>
          <option value="done">Terminé</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
          💾 Enregistrer
        </button>
      </form>
    </div>
  );
}
