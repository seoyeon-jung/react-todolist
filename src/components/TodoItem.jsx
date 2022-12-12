import React from "react";

const TodoItem = ({ item, onToggle, onDel }) => {
  const { id, title, text, check } = item;

  return (
    <li className={check ? `on` : ""}>
      <div className="todoBox">
        <div>
          <h3 className="title">{title}</h3>
          <p>{text}</p>
        </div>
        <button className="done" onClick={() => onToggle(id)}>
          {check ? <>취소</> : <>완료</>}
        </button>
        <button className="delBtn" onClick={() => onDel(id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
