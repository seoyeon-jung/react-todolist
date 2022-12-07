import TodoItem from "./TodoItem";
import "../css/TodoList.css";

const TodoList = ({ todo, onToggle, onDel, check }) => {
  return (
    <ul className="TodoList">
      {todo.map(
        (item) =>
          item.check === check && (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDel={onDel}
            />
          )
      )}
    </ul>
  );
};

export default TodoList;
