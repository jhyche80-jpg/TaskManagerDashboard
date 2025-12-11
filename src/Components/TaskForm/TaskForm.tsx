import React, { useState } from "react";
import type { Task, TaskPrio, TaskCat } from "../types";
import "./TaskForm.css"
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
    <div id="AreaInput">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="Row1">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" id="InputTitle"/>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        maxLength={30}
        placeholder="Description (max 30 chars)"
      id="InputDec"/>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
    <div className="Row1">
      <input type="time" value={time} onChange={e => setTime(e.target.value)} id="InputTime"/>
      <select value={category} onChange={e => setCategory(e.target.value as TaskCat)} id="InputCat">
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="school">School</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
        <option value="other">Other</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value as TaskPrio)} id="InputPrio">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleTask}>Add Task</button>
    </div>
      
      
      
    </div>
  );
}