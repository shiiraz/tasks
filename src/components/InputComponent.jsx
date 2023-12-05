import { useState } from "react";
import { useGlobalContext } from "../context";

function InputComponent() {
  const [inputText, setInputText] = useState("");
  const { state, addTask } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    addTask(inputText);
    setInputText("");
    console.log(state.arr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputComponent;
