import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css'

interface Task {
  description: string;
  deadline: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // LocalStorage'dan ma'lumotlarni yuklash
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
    setTasks(savedTasks);
  }, []);

  // LocalStorage'ga ma'lumotlarni saqlash
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Yangi vazifa qo‘shish
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  // Vazifani bajarilgan deb belgilash
  const toggleComplete = (taskToToggle: Task) => {
    setTasks(
      tasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Vazifani o‘chirish
  const deleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default App;
