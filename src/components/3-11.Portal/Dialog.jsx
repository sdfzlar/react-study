import React, { useState } from "react";

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button 
        style = {{  
          position: "absolute",
          left: 100 // 이 부분이 없으면 open 버튼이 안보임. 왜냐하면 PortalExample에 Hi 버튼과 위치가 같기 때문
        }}
        onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          {typeof props.desc === "string" ? <h5>{props.desc}</h5> : props.desc}
          {typeof props.button === "string" ? (
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => setIsOpen(false)}
            >
              {props.button}
            </button>
          ) : (
            <div onClick={() => setIsOpen(false)}>{props.button}</div>
          )}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "lightgray",
          }}
        />
      )}
    </>
  );
}
