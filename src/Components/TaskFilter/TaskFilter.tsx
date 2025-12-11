import type { TaskCat, TaskPrio, TaskStatus } from '../types'

type Props = {
  onFilterChange: (filters: {
    status?: TaskStatus
    priority?:TaskPrio
    category?: TaskCat
  }) => void
}

export default function TaskFilter({ onFilterChange }: Props) {
  return (
    <div className="taskFilter">
      <select
        onChange={(e) =>
          onFilterChange({ status: e.target.value || undefined })
        }
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        onChange={(e) =>
          onFilterChange({
            priority: (e.target.value as TaskPrio) || undefined
          })
        }
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select  onChange={(e) =>
          onFilterChange({ category: e.target.value as TaskCat }) }>
        <option value="">All Categories</option>
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}