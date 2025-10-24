import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import KanbanBoard from "../components/KanbanBoard";

export default function HomePage() {
  const { tasks, addTask, editTask, removeTask, moveTask } = useTasks();

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
      <TaskForm onSubmit={addTask} />
      <KanbanBoard tasks={tasks} onEdit={handleEdit} onDelete={removeTask} onMove={moveTask} />
    </div>
  );
}
