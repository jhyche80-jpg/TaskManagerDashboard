import React, { useState } from 'react'
import RenderList from '../RenderList/RenderList'
import TaskCounter from '../TaskCounter/taskCounter'
import type { Task } from '../types'
export default function Dashboard() {
  const[tasks,setTasks]= useState<Task[]>([])
  const[totalTasks,setTotalTasks]= useState(0)

  // calculate counts 
  const totalTask = tasks.length
  const totalPending = tasks.filter(t=> t.status === "pending").length
  const totalCompleted =+ tasks.filter(t=> t.status==="completed").length
  const totalInProgress= tasks.filter(t=>t.status==="in-progress").length
  return (
    <div>
      <h1>Dashboard</h1>
      <TaskCounter 
      TaskTotal={totalTask} 
      TaskCompleted={totalCompleted}
      TaskInProgress={totalInProgress}
      TaskPending={totalPending} />
      <RenderList tasks={tasks}
      setTasks={setTasks}
      incrementTotal={(()=> setTotalTasks(prev=>prev+1))}/>
    </div>
  )
}
