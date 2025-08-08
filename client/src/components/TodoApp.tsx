import { useThemeContext } from './ThemeProvider';
import { useTodos } from '../hooks/useTodos';
import { TaskInput } from './TaskInput';
import { TaskStats } from './TaskStats';
import { TaskList } from './TaskList';

export const TodoApp = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const {
    todos,
    filter,
    setFilter,
    editingId,
    setEditingId,
    taskCounts,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  const hasCompletedTasks = taskCounts.completed > 0;

  const exportTasks = () => {
    const dataStr = JSON.stringify(todos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'todos.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">TaskFlow</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stay organized, get things done</p>
            </div>
          </div>
          
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="group relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <div className={`w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-sm transform transition-transform duration-300 group-hover:scale-110 ${isDark ? 'translate-x-6' : ''}`}>
              <svg className={`w-4 h-4 text-yellow-500 absolute top-1 left-1 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <svg className={`w-4 h-4 text-gray-700 absolute top-1 left-1 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Task Input */}
        <TaskInput onAddTask={addTodo} />

        {/* Task Stats */}
        <TaskStats 
          taskCounts={taskCounts}
          filter={filter}
          onFilterChange={setFilter}
        />

        {/* Task List */}
        <TaskList
          todos={todos}
          editingId={editingId}
          onEdit={setEditingId}
          onCancelEdit={() => setEditingId(null)}
          onUpdate={updateTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onClearCompleted={clearCompleted}
          hasCompletedTasks={hasCompletedTasks}
        />

        {/* Footer */}
        <div className="mt-8 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-xs">⌘</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-xs">K</kbd>
              <span className="ml-2">Quick add</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-xs">⌘</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-xs">/</kbd>
              <span className="ml-2">Search</span>
            </div>
            <button 
              onClick={exportTasks}
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Export Tasks
            </button>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            Made with ❤️ using React + Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
};
