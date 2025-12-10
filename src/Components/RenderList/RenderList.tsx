import React from 'react'
import type { Task,TaskStatus, TaskCat, TaskPrio } from '../types'
import { useState } from 'react'
import TaskList from '../TaskList/TaskList'

export default function RenderList() {
    const [task, setTask]= useState<Task[]>([])
    const[date,setDate] = useState("")
    const [title,setTitle]= useState('')
    const [description,setDescription]=useState('')
    const [priority,setPriority]= useState<TaskPrio>('low')
    const[category,setCategory]=useState<TaskCat>('personal')
    const[time,setTime]= useState('')
    const handleTask = ()=>{
        const newTask:Task={
            id: Date.now().toString(),
            title, 
            description, 
            priority,
            dueDate:date, 
            time,
            category,
            status:'pending'
        
        }
        setTask(prev=>[...prev,newTask])
    }
    const handleDelete=(taskid:string) =>{
        setTask(prev => prev.filter(task=> task.id !== taskid))

    }
   
  return (
    <div>
        <h2>Enter information here:</h2>
      <input type="text" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <textarea 
      name="Description"
       id="Description"
        maxLength={30}
        placeholder='Task description max 30 characters '
        onChange={(e)=> setDescription(e.target.value)}
        />
      <input type="date" value={date} 
      onChange={(e)=> setDate(e.target.value)}
      />
      <input type="time" 
      value={time} 
      onChange={(e)=> setTime(e.target.value)}
       />
      <select name="Cat" id="Cat" value={category}
      onChange={(e)=>setCategory(e.target.value as TaskCat)}
      >
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
        <option value="other">Other</option>
      </select>
      <select name="Priority" id="Priority"
      value={priority} 
      onChange={(e)=>setPriority(e.target.value as TaskPrio)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleTask}>Add task</button>

    
    <TaskList/>
    </div>
  )
}
