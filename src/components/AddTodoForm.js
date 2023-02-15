import React from 'react';

export default function AddTodoForm({ handleSubmit }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    // TODO write code to add new todo to list of todos
    handleSubmit(title);
    e.target.reset();
  };
  return (
    <>
      <h4>Add new todo</h4>
      <form onSubmit={onSubmit}>
        <input name='title' placeholder='title' />
        <button>add</button>
      </form>
    </>
  );
}
