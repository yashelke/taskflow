export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TaskCounts {
  total: number;
  active: number;
  completed: number;
}
