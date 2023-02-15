import React, { useState } from 'react';
import todosData from '../todo.data';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState(todosData);

  return (
    <div style={{ width: '50vh', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm />
      <hr />
      {todos.map((item, index) => {
        return (
          <TodoItem title={item.title} isChecked={item.isChecked} key={index} />
        );
      })}
    </div>
  );
}
