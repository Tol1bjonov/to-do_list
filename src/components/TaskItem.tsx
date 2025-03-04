interface Task {
   id: number
   description: string
   deadline: string
   completed: boolean
}

interface TaskItemProps {
   task: Task
   onToggleComplete: (taskId: number) => void
   onDelete: (taskId: number) => void
}

function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
   return (
      <div className="wrapper">
         <p
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
         >
            {task.description} - {task.deadline}
         </p>
         <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? 'Undo✔' : 'Complete✔'}
         </button>
         <button onClick={() => onDelete(task.id)}>Delete🗑</button>
      </div>
   )
}

export default TaskItem
