import { useState } from 'react';
import { Todo } from '../types/todo';

interface TaskItemProps {
  todo: Todo;
  isEditing: boolean;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onCancelEdit: () => void;
}

export const TaskItem = ({ 
  todo, 
  isEditing, 
  onToggle, 
  onEdit, 
  onUpdate, 
  onDelete, 
  onCancelEdit 
}: TaskItemProps) => {
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText);
    } else {
      onCancelEdit();
      setEditText(todo.text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      onCancelEdit();
      setEditText(todo.text);
    }
  };

  const handleCancel = () => {
    onCancelEdit();
    setEditText(todo.text);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) {
      return minutes <= 1 ? 'Just now' : `${minutes} minutes ago`;
    } else if (hours < 24) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else {
      return days === 1 ? 'Yesterday' : `${days} days ago`;
    }
  };

  const getItemClasses = () => {
    let baseClasses = "group flex items-center space-x-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md";
    
    if (isEditing) {
      return `${baseClasses} border-2 border-primary-500 shadow-md bg-primary-50 dark:bg-primary-900/10`;
    } else if (todo.completed) {
      return `${baseClasses} border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 bg-green-50 dark:bg-green-900/10`;
    } else {
      return `${baseClasses} border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 bg-gray-50 dark:bg-slate-700/50`;
    }
  };

  return (
    <div className={getItemClasses()}>
      <button 
        onClick={() => onToggle(todo.id)}
        disabled={isEditing}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-colors duration-200 flex items-center justify-center ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 dark:border-gray-500 hover:border-primary-500'
        } ${isEditing ? 'opacity-50' : ''}`}
      >
        {todo.completed && (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {!todo.completed && (
          <svg className="w-4 h-4 text-primary-500 opacity-0 group-hover:opacity-50 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              autoFocus
              className="w-full px-0 py-1 text-gray-900 dark:text-white bg-transparent border-0 focus:outline-none focus:ring-0 font-medium"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">Press Enter to save, Escape to cancel</div>
          </>
        ) : (
          <>
            <div className={`font-medium truncate ${
              todo.completed 
                ? 'text-gray-500 dark:text-gray-400 line-through' 
                : 'text-gray-900 dark:text-white'
            }`}>
              {todo.text}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {todo.completed && todo.completedAt 
                ? `Completed ${formatTime(todo.completedAt)}`
                : `Added ${formatTime(todo.createdAt)}`
              }
            </div>
          </>
        )}
      </div>

      <div className={`flex-shrink-0 flex items-center space-x-2 transition-opacity duration-200 ${
        isEditing ? '' : 'opacity-0 group-hover:opacity-100'
      }`}>
        {isEditing ? (
          <>
            <button 
              onClick={handleSave}
              className="p-2 text-green-500 hover:text-green-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button 
              onClick={handleCancel}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => onEdit(todo.id)}
              className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button 
              onClick={() => onDelete(todo.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
