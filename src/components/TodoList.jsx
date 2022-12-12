import TodoItem from "./TodoItem";
import "../css/TodoList.css";

const TodoList = ({ todo, onToggle, onDel, check }) => {
  return (
    <div className="TodoList">
      <h2>{check ? "완료" : "진행 중"}</h2>
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
    </div>
  );
};

export default TodoList;
