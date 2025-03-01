interface Task {
   description: string
   deadline: string
   completed: boolean
}

interface TaskItemProps {
   task: Task
   onToggleComplete: (task: Task) => void
   onDelete: (task: Task) => void
}

function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
   return (
      <div
         className="wrapper"
         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
         <div>
            <span>
               {task.description} (Date: {task.deadline})
            </span>
            <button onClick={() => onToggleComplete(task)}>✔</button>
            <button onClick={() => onDelete(task)}>🗑</button>
         </div>
      </div>
   )
}

export default TaskItem
