import React from 'react'
import type { TaskListProps } from '../types'
import { table } from 'motion/react-client'
import { Taskitem } from '../taskItem/TaskItem'

export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    return (
        <table>
            <th>Task</th>
            <th>Description</th>
            <th>Due</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Delete</th>
            {
                tasks.map(tasks => (
                    <Taskitem
                        key={tasks.id}
                        task={tasks}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))}
        </table>
    )
}
