import { create } from 'zustand';
import {
  getAllTodos,
  addTodo as dbAddTodo,
  updateTodo as dbUpdateTodo,
  deleteTodo as dbDeleteTodo,
  clearAllTodos as dbClearAllTodos,
  type Todo,
} from '../lib/db';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  loadTodos: () => Promise<void>;
  addTodo: (text: string) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  updateTodoText: (id: number, text: string) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  clearAllTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  isLoading: false,
  error: null,

  loadTodos: async () => {
    set({ isLoading: true, error: null });
    try {
      const todos = await getAllTodos();
      set({ todos, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to load todos',
        isLoading: false,
      });
    }
  },

  addTodo: async (text: string) => {
    if (!text.trim()) {
      set({ error: 'Todo text cannot be empty' });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const newTodo: Omit<Todo, 'id'> = {
        text: text.trim(),
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      
      await dbAddTodo(newTodo);
      await get().loadTodos();
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to add todo',
        isLoading: false,
      });
    }
  },

  toggleTodo: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const todo = get().todos.find((t) => t.id === id);
      if (!todo) {
        throw new Error('Todo not found');
      }

      await dbUpdateTodo(id, { completed: !todo.completed });
      await get().loadTodos();
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to toggle todo',
        isLoading: false,
      });
    }
  },

  updateTodoText: async (id: number, text: string) => {
    if (!text.trim()) {
      set({ error: 'Todo text cannot be empty' });
      return;
    }

    set({ isLoading: true, error: null });
    try {
      await dbUpdateTodo(id, { text: text.trim() });
      await get().loadTodos();
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to update todo',
        isLoading: false,
      });
    }
  },

  deleteTodo: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await dbDeleteTodo(id);
      await get().loadTodos();
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to delete todo',
        isLoading: false,
      });
    }
  },

  clearAllTodos: async () => {
    set({ isLoading: true, error: null });
    try {
      await dbClearAllTodos();
      set({ todos: [], isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to clear todos',
        isLoading: false,
      });
    }
  },
}));
