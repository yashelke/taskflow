import { FilterType, TaskCounts } from '../types/todo';

interface TaskStatsProps {
  taskCounts: TaskCounts;
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TaskStats = ({ taskCounts, filter, onFilterChange }: TaskStatsProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6 animate-slide-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Task Counter */}
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">{taskCounts.active}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Active</div>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{taskCounts.completed}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Completed</div>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">{taskCounts.total}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              filter === 'all' 
                ? 'bg-primary-500 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => onFilterChange('active')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              filter === 'active' 
                ? 'bg-primary-500 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            Active
          </button>
          <button 
            onClick={() => onFilterChange('completed')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              filter === 'completed' 
                ? 'bg-primary-500 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};
