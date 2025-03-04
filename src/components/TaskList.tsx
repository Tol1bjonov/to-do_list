import TaskItem from './TaskItem'

interface Task {
   id: number
   description: string
   deadline: string
   completed: boolean
}

interface TaskListProps {
   tasks: Task[]
   onToggleComplete: (taskId: number) => void
   onDelete: (taskId: number) => void
}

function TaskList({ tasks, onToggleComplete, onDelete }: TaskListProps) {
   return (
      <div>
         {tasks.length === 0 ? (
            <p>No Tasks added yet.</p>
         ) : (
            tasks.map((task) => (
               <TaskItem
                  key={task.id}
                  task={task}
                  onToggleComplete={onToggleComplete}
                  onDelete={onDelete}
               />
            ))
         )}
      </div>
   )
}

export default TaskList
