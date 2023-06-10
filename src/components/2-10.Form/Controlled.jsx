import React, { useState } from "react";

// Controlled Component는 input의 value를 state로 관리
export default function Controlled() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("Write essay");
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {
    const name = event.target.name;

    if (name === 'name') {
        setName(event.target.value);
    }
    if (name === 'essay') {
        setEssay(event.target.value);
    }
    if (name === 'flavor') {
        setFlavor(event.target.value);
    }    
  }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <label>
          Pick your favorite flavor:
          <select name="flavor" value={flavor} onChange={handleChange}>
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
