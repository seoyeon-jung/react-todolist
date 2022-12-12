import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Todos.css";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  //const no = useRef(1); // 할 일(item)의 고유 id
  const [todo, setTodo] = useState([]);

  // delete : 고유 id 값을 받아 해당 item 삭제 => filter
  const onDel = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  // toggle : 고유 id 값을 받아 해당 item의 체크 상태를 설정 => map
  const onToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  };

  // add : input 에서 입력받은 값을 새로운 item으로 추가
  const onAdd = (title, text) => {
    setTodo((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title,
          text,
          check: false,
        },
      ];
    });
  };

  // TodoInput => onAdd / TodoList => todo객체, onToggle, onDel
  return (
    <div className="Todos">
      <TodoHeader />
      <TodoInput onAdd={onAdd} />
      <TodoList check={false} todo={todo} onToggle={onToggle} onDel={onDel} />
      <TodoList check={true} todo={todo} onToggle={onToggle} onDel={onDel} />
    </div>
  );
};

export default Todos;
