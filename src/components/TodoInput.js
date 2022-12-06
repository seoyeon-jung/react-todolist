import React, { useRef, useState } from "react";
import "../css/TodoInput.css";

const TodoInput = ({ onAdd }) => {
  const titleRef = useRef(""); // title
  const [title, setTitle] = useState("");
  const textRef = useRef(""); // 입력 후 input 에 focus해주기 위한 설정값
  const [text, setText] = useState(""); // 사용용자로부터 받은 입력값 상태

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const changeTitleInput = (e) => {
    const { value_title } = e.target;
    setTitle(value_title);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!text && !title) return; // 입력칸 공백 방지

    onAdd(text);
    onAdd(title);
    setText(""); // 입력 후 다시 공백으로
    setTitle("");
    // textRef.current.focus();
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        className="inputText"
        type="text"
        value={title}
        onChange={changeTitleInput}
        ref={titleRef}
        placeholder="제목"
      />
      <input
        className="inputText"
        type="text"
        value={text}
        onChange={changeInput}
        ref={textRef}
        placeholder="내용"
      />
      <button className="submitBtn" type="submit">
        추가하기
      </button>
    </form>
  );
};

export default TodoInput;
