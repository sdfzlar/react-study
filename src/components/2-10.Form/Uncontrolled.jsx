import React, { useRef } from "react";

// UnControlledComponent는 form element 자체의 내부 상태 활용
export default function Uncontrolled() {
    const fileInputRef = useRef(null);

  function handleSubmit(event) {
    alert(`Selected File - ${fileInputRef.current.files[0].name}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
