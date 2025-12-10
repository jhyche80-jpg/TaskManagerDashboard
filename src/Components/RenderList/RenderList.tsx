import React, { useState } from 'react';
import type { Task, TaskStatus, TaskCat, TaskPrio } from '../types';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';

type RenderProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function RenderList({ tasks, setTasks }: RenderProps) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPrio>("low");
  const [category, setCategory] = useState<TaskCat>("personal");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: TaskPrio }>({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  const handleTask = () => {
    if (!title.trim()) return setError("Please enter a Task!");
    if (!description.trim()) return setError("Please enter a description!");
    if (!date) return setError("Please enter a due date!");
    if (!time) return setError("Please enter a time!");

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      dueDate: date,
      time,
      category,
      status: "pending",
    };

    setTasks(prev => [...prev, newTask]);

    // Reset form
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("low");
    setCategory("personal");
    setTime("");
    setError("");
  };

  const handleDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div>
      <h2>Enter information here:</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={30}
        placeholder="Task description max 30 characters"
      />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value as TaskCat)}>
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
        <option value="other">Other</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPrio)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleTask}>Add Task</button>

      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}