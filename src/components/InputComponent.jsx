import { useState } from "react";
import { useGlobalContext } from "../context";

function InputComponent() {
  const [inputText, setInputText] = useState("");
  const { state, addTask } = useGlobalContext();
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(inputText);
          setInputText("");
          console.log(state.arr);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputComponent;
