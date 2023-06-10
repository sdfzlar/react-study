import React, { useState } from "react";

// Controlled Component는 input의 value를 state로 관리
export default function Controlled() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("Write essay");
  const [flavor, setFlavor] = useState("coconut");

  function handleValueChange(event) {
    setName(event.target.value);
  }

  function handleEssayChange(event) {
    setEssay(event.target.value);
  }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  function handleFlavorChange(event) {
    setFlavor(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleValueChange} />
      </label>
      <br />
      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <br />
      <label>
          Pick your favorite flavor:
          <select value={flavor} onChange={handleFlavorChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
