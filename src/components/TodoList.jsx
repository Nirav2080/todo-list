import { TodoItem } from "./todoItem";

export const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
        />
      ))}
    </div>
  );
};