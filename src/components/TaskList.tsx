import TaskItem from "./TaskItem";

interface Task {
  description: string;
  deadline: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (task: Task) => void;
  onDelete: (task: Task) => void;
}

function TaskList({ tasks, onToggleComplete, onDelete }: TaskListProps) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
