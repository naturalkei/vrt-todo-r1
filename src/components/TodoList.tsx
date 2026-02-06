import {
  CheckCircle,
  Circle,
  Leaf,
  PencilSimple,
  PlusCircle,
  Trash,
  X,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { useTodoStore } from '../stores/todo-store'

export default function TodoList() {
  const {
    todos,
    isLoading,
    error,
    loadTodos,
    addTodo,
    toggleTodo,
    updateTodoText,
    deleteTodo,
    clearAllTodos,
  } = useTodoStore()

  const [newTodoText, setNewTodoText] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoText.trim()) {
      await addTodo(newTodoText)
      setNewTodoText('')
    }
  }

  const handleStartEdit = (id: number, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  const handleSaveEdit = async (id: number) => {
    if (editText.trim()) {
      await updateTodoText(id, editText)
      setEditingId(null)
      setEditText('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-acnh-sky via-acnh-cream to-acnh-mint p-6 md:p-12">
      <div className="mx-auto max-w-2xl">
        {/* Header Card */}
        <div className="mb-8 rounded-bubbly border-4 border-acnh-brown-dark bg-acnh-cream p-6 shadow-bubble">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Leaf size={40} weight="duotone" className="text-acnh-green" />
            <h1 className="text-4xl font-bold text-acnh-brown-dark font-bubbly">
              My Todos
            </h1>
            <Leaf size={40} weight="duotone" className="text-acnh-green rotate-180" />
          </div>
          <p className="text-center text-acnh-brown font-korean text-sm">
            Write down the things you need to do today! ✨
          </p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className="mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Enter a new todo..."
              className="flex-1 rounded-bubble border-4 border-acnh-mint-dark bg-white px-6 py-4 text-lg font-korean text-acnh-brown-dark placeholder-acnh-brown/50 shadow-soft transition-all focus:border-acnh-green focus:outline-none focus:ring-0 focus:shadow-bubble"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-bubble border-4 border-acnh-green-dark bg-acnh-green px-6 py-4 font-bold text-white shadow-soft transition-all hover:bg-acnh-green-dark hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <PlusCircle size={28} weight="fill" />
              <span className="font-bubbly">Add</span>
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-bubble border-4 border-acnh-peach-dark bg-acnh-peach p-4 text-center font-korean text-acnh-brown-dark shadow-soft">
            ⚠️ {error}
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 && !isLoading && (
            <div className="rounded-bubbly border-4 border-acnh-cream-dark bg-white p-12 text-center shadow-soft">
              <p className="text-2xl font-bubbly text-acnh-brown mb-2">🌸</p>
              <p className="font-korean text-acnh-brown">
                No todos yet! Add one above.
              </p>
            </div>
          )}

          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`rounded-bubble border-4 ${
                todo.completed
                  ? 'border-acnh-mint-dark bg-acnh-mint'
                  : 'border-acnh-yellow-dark bg-acnh-yellow'
              } p-4 shadow-soft transition-all hover:shadow-bubble`}
            >
              {editingId === todo.id ? (
                // Edit Mode
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 rounded-bubble border-2 border-acnh-brown bg-white px-4 py-2 font-korean text-acnh-brown-dark focus:outline-none focus:border-acnh-green"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSaveEdit(todo.id!)}
                    className="rounded-full bg-acnh-green p-2 text-white transition-all hover:bg-acnh-green-dark active:scale-90"
                  >
                    <CheckCircle size={24} weight="fill" />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="rounded-full bg-acnh-peach p-2 text-acnh-brown-dark transition-all hover:bg-acnh-peach-dark active:scale-90"
                  >
                    <X size={24} weight="bold" />
                  </button>
                </div>
              ) : (
                // View Mode
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTodo(todo.id!)}
                    className="flex-shrink-0 transition-transform hover:scale-110 active:scale-90"
                    disabled={isLoading}
                  >
                    {todo.completed ? (
                      <CheckCircle size={32} weight="fill" className="text-acnh-green-dark" />
                    ) : (
                      <Circle size={32} weight="bold" className="text-acnh-brown" />
                    )}
                  </button>

                  <span
                    className={`flex-1 font-korean text-lg ${
                      todo.completed
                        ? 'text-acnh-brown line-through opacity-75'
                        : 'text-acnh-brown-dark font-medium'
                    }`}
                  >
                    {todo.text}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStartEdit(todo.id!, todo.text)}
                      className="rounded-full bg-acnh-sky p-2 text-acnh-brown-dark transition-all hover:bg-acnh-sky-dark active:scale-90"
                      disabled={isLoading}
                    >
                      <PencilSimple size={20} weight="fill" />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id!)}
                      className="rounded-full bg-acnh-peach p-2 text-acnh-brown-dark transition-all hover:bg-acnh-peach-dark active:scale-90"
                      disabled={isLoading}
                    >
                      <Trash size={20} weight="fill" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clear All Button */}
        {todos.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={clearAllTodos}
              disabled={isLoading}
              className="rounded-bubble border-4 border-acnh-brown bg-acnh-brown-dark px-8 py-3 font-bubbly text-lg font-bold text-acnh-cream shadow-soft transition-all hover:bg-acnh-brown hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              🗑️ Clear All
            </button>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-8 rounded-bubbly border-4 border-acnh-cream-dark bg-white/80 p-4 text-center shadow-soft">
          <p className="font-korean text-sm text-acnh-brown">
            Total <span className="font-bold text-acnh-brown-dark">{todos.length}</span> items ·{' '}
            Completed <span className="font-bold text-acnh-green-dark">{todos.filter(t => t.completed).length}</span> items ·{' '}
            Remaining <span className="font-bold text-acnh-yellow-dark">{todos.filter(t => !t.completed).length}</span> items
          </p>
        </div>
      </div>
    </div>
  )
}
