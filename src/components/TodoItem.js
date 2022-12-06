import React from "react";

const TodoItem = ({ item, onToggle, onDel }) => {
  const { id, text, check } = item;

  return (
    <li className={check ? `on` : ""}>
      <span className="done" onClick={() => onToggle(id)}>
        &#10003;
      </span>
      <em className="text">{text}</em>
      <button className="delBtn" onClick={() => onDel(id)}>
        &#10799;
      </button>
    </li>
  );
};

export default TodoItem;
