import React, { useRef, useState } from "react";
import "../css/TodoInput.css";

const TodoInput = ({ onAdd }) => {
  const titleRef = useRef(""); // title
  const [title, setTitle] = useState("");
  const textRef = useRef(""); // 입력 후 input 에 focus해주기 위한 설정값
  const [text, setText] = useState(""); // 사용자로부터 받은 입력값 상태

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const changeTitleInput = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!text || !title) {
      alert("제목과 내용을 모두 입력하세요!");
      return;
    } // 입력칸 공백 방지

    onAdd(title, text);
    setTitle("");
    setText(""); // 입력 후 다시 공백으로
  };

  return (
    <form className="TodoInput">
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
      <button className="submitBtn" type="submit" onClick={onSubmit}>
        추가하기
      </button>
    </form>
  );
};

export default TodoInput;
