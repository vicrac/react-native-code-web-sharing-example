import React, { useState } from 'react'

interface Todo {
  text: string
  isDone: boolean
}

export enum Filter {
  ALL = 'all',
  DONE = 'done',
  NOT_DONE = 'not_done'
}

interface TodoAppProps {
  render: React.FC<{
    todos?: Array<Todo>
    toggleDone: (text: string) => void
    addTodo: () => void
    removeTodo: (text: string) => void
    newTodoInputValue: string
    setNewTodoInputValue: (text: string) => void
    filter: Filter
    setFilter: (newFilter: Filter) => void
  }>
}

export const TodoApp: React.FC<TodoAppProps> = ({ render }) => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { text: 'Do laundry', isDone: false },
    { text: 'Buy milk', isDone: false },
    { text: 'Walk the dog', isDone: false }
  ])
  const [filter, setFilter] = useState(Filter.ALL)
  const [newTodoInputValue, setNewTodoInputValue] = useState('')

  const filteredTodos = todos?.filter((todo) =>
    filter === Filter.ALL
      ? true
      : filter === Filter.DONE
      ? todo.isDone
      : !todo.isDone
  )

  const addTodo = () => {
    if (newTodoInputValue)
      setTodos([...(todos || []), { text: newTodoInputValue, isDone: false }])
  }

  const toggleDone = (text: string) => {
    const toggled = todos?.map((todo) =>
      todo.text === text ? { ...todo, isDone: !todo.isDone } : todo
    )
    setTodos(toggled)
  }

  const removeTodo = (text: string) => {
    const removed = todos?.filter((todo) => todo.text !== text)
    setTodos(removed)
  }

  return render({
    todos: filteredTodos,
    addTodo,
    removeTodo,
    newTodoInputValue,
    setNewTodoInputValue,
    filter,
    setFilter,
    toggleDone
  })
}

export const styles = {
  color: 'red'
}
