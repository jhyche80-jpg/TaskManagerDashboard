import type { TaskStatus } from '../types'

type Props = {
  onFilterChange: (filters: {
    status?: TaskStatus
    priority?: 'low' | 'medium' | 'high'
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
            priority: (e.target.value as 'low' | 'medium' | 'high') || undefined
          })
        }
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  )
}