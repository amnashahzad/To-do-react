import React, { useState } from 'react';

function TodoItem({ todo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() !== '') {
      editTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
