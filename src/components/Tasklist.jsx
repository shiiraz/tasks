import { useGlobalContext } from "../context";
import Task from "./Task";
import { useState } from "react";

function Tasklist() {
  const { state } = useGlobalContext();
  const [editableTaskId, setEditableTaskId] = useState(null);

  const handleEditToggle = (taskId) => {
    setEditableTaskId(taskId === editableTaskId ? null : taskId);
  };

  if (state.arr.length < 1) {
    return <h2>No Tasks!</h2>;
  }

  return (
    <ul>
      {state.arr.map((x) => (
        <Task
          key={x.id}
          id={x.id}
          text={x.text}
          isDone={x.isDone}
          onEditToggle={() => handleEditToggle(x.id)}
          isEditable={x.id === editableTaskId}
        />
      ))}
    </ul>
  );
}

export default Tasklist;
