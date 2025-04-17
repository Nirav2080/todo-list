import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    if (!editText.trim()) return;
    dispatch(editTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-xl font-bold text-white mb-4">Todos</div>
      <ul>
        {todos.length > 0 && todos.map((todo) =>  (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {editId === todo.id ? (
                <input
                  type="text"
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="flex space-x-2 ml-4">
              {editId === todo.id ? (
                <button
                  className="text-white bg-green-500 py-1 px-4 rounded hover:bg-green-600"
                  onClick={() => handleUpdate(todo.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
              )}
              <button
                className="text-white bg-red-500 py-1 px-4 rounded hover:bg-red-600"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
