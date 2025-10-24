import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks } from "../api/tasksApi";

export default function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const all = await getTasks();
      const found = all.find((t) => t.id === Number(id));
      setTask(found);
    };
    fetchTask();
  }, [id]);

  if (!task) return <p className="p-8 text-center">Chargement...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="mb-4 text-gray-700">{task.description}</p>
      <p className="text-sm text-gray-500 mb-6">
        Statut : <span className="font-semibold">{task.status}</span><br/>
        Créée le : {new Date(task.createdAt).toLocaleString()}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        ⬅️ Retour
      </button>
    </div>
  );
}
