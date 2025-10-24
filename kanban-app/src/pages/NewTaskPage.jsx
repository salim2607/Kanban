import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export default function NewTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = async (task) => {
    await addTask(task);
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">➕ Nouvelle tâche</h1>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
