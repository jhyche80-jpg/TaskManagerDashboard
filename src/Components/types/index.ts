//Task List  
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type  TaskCat = 'school'|'work'|'personal'|'fitness'|'finance'|'other'
export type TaskPrio = 'low' | 'medium' | 'high'
export interface Dashboard{
    pending:number;
    running:number;
    total:number; 
    ended:number; 

}
export interface Taskcount{

TaskPending:number, 
TaskCompleted:number,
TaskTotal:number,
TaskInProgress:number
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority:TaskPrio;
  dueDate: string;
  time: string;
  category:TaskCat
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => string;
}

//Task Item 
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  
}

// Task Filter 
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?:TaskPrio;
    category:TaskCat
  }) => void;
}