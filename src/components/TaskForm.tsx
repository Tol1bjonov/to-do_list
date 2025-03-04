import { useState } from 'react'

interface Task {
   id: number
   description: string
   deadline: string
   completed: boolean
}

interface TaskFormProps {
   onAddTask: (task: Task) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
   const [description, setDescription] = useState<string>('')
   const [deadline, setDeadline] = useState<string>('')

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()

      if (!description.trim()) return

      const newTask: Task = {
         id: Date.now(), // Har bir vazifa uchun unikal ID yaratamiz
         description,
         deadline,
         completed: false,
      }

      onAddTask(newTask)
      setDescription('')
      setDeadline('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            id="description"
         />
         <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            id="date"
         />
         <button type="submit">Add Task</button>
      </form>
   )
}

export default TaskForm
