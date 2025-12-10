import React, { useState, useEffect } from 'react';
import RenderList from '../RenderList/RenderList';
import TaskCounter from '../TaskCounter/taskCounter';
import type { Task } from '../types';

export default function Dashboard() {
 const [show,setShow]= useState(false)
  // Load saved tasks from localStorage if available
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Running total of all tasks ever added
  const [totalTasks, setTotalTasks] = useState<number>(() => {
    const savedTotal = localStorage.getItem("totalTasks");
    return savedTotal ? parseInt(savedTotal) : 0;
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save running total to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("totalTasks", totalTasks.toString());
  }, [totalTasks]);

  // Counts for current tasks
  const totalPending = tasks.filter(t => t.status === "pending").length;
  const totalCompleted = tasks.filter(t => t.status === "completed").length;
  const totalInProgress = tasks.filter(t => t.status === "in-progress").length;

  return (
    <div>
      <h1>Dashboard</h1>
    
      <TaskCounter
        TaskTotal={totalTasks}            // running total
        TaskCompleted={totalCompleted}    // current completed
        TaskInProgress={totalInProgress}  // current in-progress
        TaskPending={totalPending}        // current pending
      />

    
      <div> 
        <RenderList
        tasks={tasks}
        setTasks={setTasks}
        incrementTotal={() => setTotalTasks(prev => prev + 1)} // increment running total
      />
      </div>
      
      
    </div>
  );
}