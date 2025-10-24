import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import KanbanBoard from "../components/KanbanBoard";

export default function HomePage() {
  const { tasks, addTask, editTask, removeTask, moveTask } = useTasks();
  const navigate = useNavigate();

  const handleEdit = (task) => {
    navigate(`/edit/${task.id}`);
  };

  const handleDetail = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Tableau Kanban</h1>
      <TaskForm onSubmit={addTask} />
      <KanbanBoard
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={removeTask}
        onMove={moveTask}
        onDetail={handleDetail}
      />
    </div>
  );
}
