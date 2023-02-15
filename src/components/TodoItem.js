import React from 'react';

export default function TodoItem({ title, isChecked }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      {/* TODO write code to update item check state in todo list */}
      <input type='checkbox' checked={isChecked} />
      <p>{title}</p>
      {/* TODO write code to remove item from todo list */}
      <button style={{ height: 20 }}>delete</button>
    </div>
  );
}
