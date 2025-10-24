import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasksApi";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  // Charger les tâches
  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Erreur lors du chargement des tâches :", error);
    }
  };

  // Ajouter une tâche
  const addTask = async (task) => {
    try {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  // Modifier une tâche
  const editTask = async (id, updatedTask) => {
    try {
      const updated = await updateTask(id, updatedTask);
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
    }
  };

  // Supprimer une tâche
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Déplacer une tâche dans une autre colonne
  const moveTask = async (id, newStatus) => {
    try {
      const task = tasks.find((t) => t.id === id);
      if (!task || task.status === newStatus) return;

      const updated = await updateTask(id, { ...task, status: newStatus });
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    } catch (error) {
      console.error("Erreur lors du déplacement :", error);
    }
  };

  return { tasks, addTask, editTask, removeTask, moveTask };
}
