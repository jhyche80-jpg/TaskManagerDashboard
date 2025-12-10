import React, { useState } from "react";
import type { Task, TaskPrio, TaskCat } from "../types";

type TaskInputProps = {
  addTask: (task: Task) => void; // function to add task in parent
};

export default function TaskInput({ addTask }: TaskInputProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState<TaskPrio>("low");
  const [category, setCategory] = useState<TaskCat>("personal");
  const [error, setError] = useState("");

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

    addTask(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setPriority("low");
    setCategory("personal");
    setError("");
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        maxLength={30}
        placeholder="Description (max 30 chars)"
      />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value as TaskCat)}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="school">School</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
        <option value="other">Other</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value as TaskPrio)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
}