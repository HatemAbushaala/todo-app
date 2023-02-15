import React from 'react';

export default function TodoItem({
  title,
  handleDelete,
  isChecked,
  onCheckChange,
}) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <input
        onChange={(e) => onCheckChange(e.target.checked)}
        type='checkbox'
        checked={isChecked}
      />
      <p>{title}</p>
      <button onClick={(e) => handleDelete()} style={{ height: 20 }}>
        delete
      </button>
    </div>
  );
}
