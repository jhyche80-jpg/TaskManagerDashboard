import React from 'react'
import type { Taskcount } from '../types'

export default function TaskCounter({
 
  TaskPending,
  TaskCompleted,
  TaskTotal,
  TaskInProgress
}: Taskcount) {

  return (
    <div>
      <h3>Task Summary</h3>
      <p>Total Tasks: {TaskTotal}</p>
      <p>Pending: {TaskPending}</p>
      <p>In Progress: {TaskInProgress}</p>
      <p>Completed: {TaskCompleted}</p>
    </div>
  )
}