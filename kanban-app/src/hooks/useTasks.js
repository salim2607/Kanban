import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasksApi";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const editTask = async (id, updatedTask) => {
    const updated = await updateTask(id, updatedTask);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const moveTask = async (id, newStatus) => {
    const task = tasks.find((t) => t.id === id);
    if (!task || task.status === newStatus) return;
    const updated = await updateTask(id, { ...task, status: newStatus });
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  return { tasks, addTask, editTask, removeTask, moveTask };
}
