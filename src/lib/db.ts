import { openDB, type IDBPDatabase } from 'idb';

export interface Todo {
  id?: number;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

const DB_NAME = 'todo-db';
const DB_VERSION = 1;
const STORE_NAME = 'todos';

let dbInstance: IDBPDatabase | null = null;

async function getDB(): Promise<IDBPDatabase> {
  if (dbInstance) {
    return dbInstance;
  }

  dbInstance = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('createdAt', 'createdAt');
        store.createIndex('completed', 'completed');
      }
    },
  });

  return dbInstance;
}

export async function getAllTodos(): Promise<Todo[]> {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}

export async function getTodoById(id: number): Promise<Todo | undefined> {
  const db = await getDB();
  return db.get(STORE_NAME, id);
}

export async function addTodo(todo: Omit<Todo, 'id'>): Promise<number> {
  const db = await getDB();
  return db.add(STORE_NAME, todo);
}

export async function updateTodo(id: number, todo: Partial<Todo>): Promise<void> {
  const db = await getDB();
  const existing = await db.get(STORE_NAME, id);
  
  if (!existing) {
    throw new Error(`Todo with id ${id} not found`);
  }

  const updated = {
    ...existing,
    ...todo,
    id,
    updatedAt: Date.now(),
  };

  await db.put(STORE_NAME, updated);
}

export async function deleteTodo(id: number): Promise<void> {
  const db = await getDB();
  await db.delete(STORE_NAME, id);
}

export async function clearAllTodos(): Promise<void> {
  const db = await getDB();
  await db.clear(STORE_NAME);
}
