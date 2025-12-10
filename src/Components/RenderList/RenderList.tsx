import React from 'react'
import type { Task,TaskStatus, TaskCat, TaskPrio } from '../types'
import { useState } from 'react'
import TaskList from '../TaskList/TaskList'
import TaskFilter from '../TaskFilter/TaskFilter'

export default function RenderList() {
    const [task, setTask]= useState<Task[]>([])
    const[date,setDate] = useState("")
    const [title,setTitle]= useState('')
    const [description,setDescription]=useState('')
    const [priority,setPriority]= useState<TaskPrio>('low')
    const[category,setCategory]=useState<TaskCat>('personal')
    const[time,setTime]= useState('')
    const [filters, setFilters] = useState<{
    status?: TaskStatus
    priority?: 'low' | 'medium' | 'high'
  }>({})
   const handleFilterChange = (newfilters: any) => {
    setFilters(newfilters)
  }
   const handleStatusChange = (taskid: string, newStatus: TaskStatus) => {
    setTask(prev => prev.map(task => task.id === taskid ? { ...task, status: newStatus } : task))

  }
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
    const filteredTask = task.filter(task=>{
        if (filters.status && task.status !== filters.status) return false
    if (filters.priority && task.priority !== filters.priority) return false
    return true
    })
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

    <TaskFilter onFilterChange={handleFilterChange}/>
    <TaskList
    tasks={filteredTask}
    onStatusChange={handleStatusChange}
    onDelete={handleDelete}
    />
    </div>
  )
}
