import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

interface Task {
   id: number
   description: string
   deadline: string
   completed: boolean
}

function App() {
   const [tasks, setTasks] = useState<Task[]>([])

   const addTask = (task: Task) => {
      setTasks([...tasks, task])
   }

   const toggleComplete = (taskId: number) => {
      setTasks(
         tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
         )
      )
   }

   const deleteTask = (taskId: number) => {
      setTasks(tasks.filter((task) => task.id !== taskId))
   }

   return (
      <div>
         <TaskForm onAddTask={addTask} />
         <TaskList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
         />
      </div>
   )
}

export default App
