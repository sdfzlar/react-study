import React from "react";

export default function List() {
  const todos = [
    { id: 1, text: "AA" },
    { id: 2, text: "BB" },
    { id: 3, text: "CC" },
    { id: 4, text: "DD" },
  ];

  const Item = (props) => {
    // 만약 key를 출력하려면 id를 사용
    return <li>{props.id} {props.text}</li>;
  };

  // key를 입력해야 경고문구가 사라짐 (key가 없으면 index를 default key로 쓰기 때문)
  // 참고로 key는 props에 포함되지 않음 (고유하게 식별하기 위한 용도로만 사용)
  // key는 형제 사이에서만 고유하면 됨
  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
