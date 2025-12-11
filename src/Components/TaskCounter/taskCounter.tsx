
import type { Taskcount } from '../types'
import "./Counter.css"
export default function TaskCounter({

  TaskPending,
  TaskCompleted,
  TaskTotal,
  TaskInProgress,
  TaskTotalCompleted
}: Taskcount) {

  return (
    <div className='Total'>
      <div className='divs'>
        <p>Total Tasks: </p>
        <p>{TaskTotal}</p>
      </div>
      <div className='divs'>
        <p>Pending:</p>
      <p> {TaskPending}</p>

      </div>
      <div className='divs'>
        <p>In Progress:</p>
        <p>{TaskInProgress}</p>

      </div>
      <div className='divs'>
        <p>Completed:</p>
        <p> {TaskCompleted}</p></div>
      <div className='divs'> 
        <p>Total Task Completed:</p>
        <p>{TaskTotalCompleted}</p>
        </div>

      
      
      
     
    </div>
  )
}