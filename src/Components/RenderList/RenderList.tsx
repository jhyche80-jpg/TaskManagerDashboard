import React, { useState } from "react";
import type { Task, TaskStatus } from "../types";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskInput from "../TaskForm/TaskForm";
import "./RenderList.css"
type RenderProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  incrementTotal: () => void;
};

export default function RenderList({ tasks, setTasks, incrementTotal }: RenderProps) {
  const [filters, setFilters] = useState<{ status?: TaskStatus }>({});
  const [showInput, setShowInput] = useState(false); // controls form visibility

  const handleFilterChange = (newFilters: any) => setFilters(newFilters);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(t => (t.id === taskId ? { ...t, status: newStatus } : t)));
  };

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
    incrementTotal();
  };

  const filteredTasks = tasks.filter(task => {
    if (filters.status && task.status !== filters.status) return false;
    return true;
  });

  return (
    <div id="Area">
      {/* Button to toggle input form */}
      <button onClick={() => setShowInput(prev => !prev)} id="ShowBtn">
        {showInput ? "Cancel" : "Add Task"}
      </button>
    <div id="Input">

{showInput && <TaskInput addTask={handleAddTask} />}

    </div>
      {/* Input form shows only if showInput is true */}
      

      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={id => setTasks(prev => prev.filter(t => t.id !== id))}
      />
    </div>
  );
}