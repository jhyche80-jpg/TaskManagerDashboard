//Task List  
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 export type  TaskCat = 'school'|'work'|'personal'|'fitness'|'finance'|'other'
export interface Dashboard{
    pending:number;
    running:number;
    total:number; 
    ended:number; 

}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
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
    priority?: 'low' | 'medium' | 'high';
    category:TaskCat
  }) => void;
}