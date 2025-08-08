import { useState } from 'react';
import { Todo } from '../types/todo';
import { TaskItem } from './TaskItem';
import { DeleteConfirmModal } from './DeleteConfirmModal';

interface TaskListProps {
  todos: Todo[];
  editingId: string | null;
  onEdit: (id: string) => void;
  onCancelEdit: () => void;
  onUpdate: (id: string, text: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClearCompleted: () => void;
  hasCompletedTasks: boolean;
}

export const TaskList = ({ 
  todos, 
  editingId, 
  onEdit, 
  onCancelEdit, 
  onUpdate, 
  onToggle, 
  onDelete, 
  onClearCompleted,
  hasCompletedTasks 
}: TaskListProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setTaskToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      onDelete(taskToDelete);
    }
    setDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Tasks</h2>
            {hasCompletedTasks && (
              <button 
                onClick={onClearCompleted}
                className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
              >
                Clear Completed
              </button>
            )}
          </div>

          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks found</h3>
              <p className="text-gray-500 dark:text-gray-400">Get started by adding your first task above.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TaskItem
                  key={todo.id}
                  todo={todo}
                  isEditing={editingId === todo.id}
                  onToggle={onToggle}
                  onEdit={onEdit}
                  onUpdate={onUpdate}
                  onDelete={handleDeleteClick}
                  onCancelEdit={onCancelEdit}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};
