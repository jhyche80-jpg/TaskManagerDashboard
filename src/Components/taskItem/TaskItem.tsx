import { div } from "motion/react-client";
import type { TaskItemProps } from "../types";

export function Taskitem({task,onStatusChange,onDelete}:TaskItemProps){
    const handleStatusUpdate= (e:React.ChangeEvent<HTMLSelectElement>){
        onStatusChange(task.id, e.target.value)
    }
    // const getColor{
    //     switch(status){
    //         case "pending":
    //             return "orange"
    //     }
    // }
    return(
        <tr>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate} at {task.time} </td>
            <td>{task.category}</td>
            <td >{task.priority}</td>
            <td>
                <select 
                
                name="status" 
                id="status" 
                value={task.status}
                onChange={handleStatusUpdate }>
            
                 <option value="pending">Pending</option>
                 <option value="in-progress">In progress</option>
                 <option value="completed">Completed</option>
                 
                 </select>{task.status}
                 </td>
                 <td><button onClick={onDelete(task.id)}>Delete</button></td>
        </tr>
    )

}