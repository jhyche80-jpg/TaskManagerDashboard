//Task List  
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type  TaskCat = 'school'|'work'|'personal'|'fitness'|'finance'|'other'
export type TaskPrio = 'low' | 'medium' | 'high'

export type Theme = 'dark'|'light'
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface Dashboard{
    pending:number;
    running:number;
    total:number; 
    ended:number; 

}
export interface  ChartProps{
  labels:string[];
  values:number[]
}
export interface Taskcount{

TaskPending:number, 
TaskCompleted:number,
TaskTotal:number,
TaskInProgress:number,
TaskTotalCompleted:number

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
  onDelete: (taskId: string) => void;
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
export type Filters = {
  status?: TaskStatus;
  priority?: TaskPrio;
  category?: TaskCat;
  search?: string;
}
