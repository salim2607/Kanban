import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
        <Route path="/new" element={<NewTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}
