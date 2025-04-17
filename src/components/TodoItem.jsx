import { useEffect, useRef, useState } from "react";

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const inputRef = useRef(null);
  

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

   useEffect(() => {
     if (isEditing) {
       inputRef.current?.focus();
     }
   }, [isEditing]);

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2"
      />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => e.target.value}
          className="flex-1 border p-1 mr-2"
        />
      ) : (
        <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave} className="mx-2 text-green-500 cursor-pointer">
          Save
        </button>
      ) : (
        <button
          onClick={() => setEditText(true)}
          className="mx-2 text-blue-500 cursor-pointer"
        >
          Edit
        </button>
      )}
      <button onClick={() => onDelete(todo.id)} className="text-red-500 cursor-pointer">
        Delete
      </button>
    </div>
  );
};
