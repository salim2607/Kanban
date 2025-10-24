import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

// 🔹 Récupérer toutes les tâches
export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// 🔹 Créer une nouvelle tâche
export const createTask = async (task) => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

// 🔹 Modifier une tâche
export const updateTask = async (id, updatedTask) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedTask);
  return res.data;
};

// 🔹 Supprimer une tâche
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
