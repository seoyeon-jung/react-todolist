import React, { useRef, useState } from "react";
import "../css/TodoInput.css";

const TodoInput = ({ onAdd }) => {
  const textRef = useRef(""); // 입력 후 input 에 focus해주기 위한 설정값
  const [text, setText] = useState(""); // 사용용자로부터 받은 입력값 상태

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!text) return; // 입력칸 공백 방지

    onAdd(text);
    setText(""); // 입력 후 다시 공백으로
    textRef.current.focus();
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoInput;
