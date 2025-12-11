
import type { TaskItemProps } from "../types";

export function Taskitem({ task, onStatusChange, onDelete }: TaskItemProps) {
    const handleStatusUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onStatusChange(task.id, e.target.value)
    }
    const Captilize= (status:string) =>{
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
    const getColor= (status:string)=>{
        switch (status) {
            case "pending":
            return "#403711ff";
            case "in-progress":
            return "#bfdbfe";
            case "completed":
            return "#1d5330ff";
            case "low":
            return "blue";
            case "medium":
            return "purple";
            case "high":
            return "red";
            default:
            return "white";

        }
}
return (
    <tr>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.dueDate} at {task.time} </td>
        <td>{task.category}</td>
        <td >{Captilize(task.priority)}</td>
        <td>
            <select

                name="status"
                id="status"
                value={task.status}
                onChange={handleStatusUpdate}
                style={{background: getColor(task.status)}}>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>

            </select>
        </td>
        <td><button onClick={() => onDelete(task.id)}>Delete</button></td>
    </tr>
)

}