import PropTypes from "prop-types";
import { useGlobalContext } from "../context";
import { useState } from "react";

function Task({ id, text, isDone, onEditToggle, isEditable }) {
  const { deleteTask, toggleCheck, updateTask } = useGlobalContext();
  const [editedText, setEditedText] = useState(text);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li>
      {isEditable ? (
        <input type="text" value={editedText} onChange={handleInputChange} />
      ) : (
        <label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => toggleCheck(id)}
          />
          {text}
        </label>
      )}
      <button
        onClick={() => {
          isEditable ? onEditToggle() : deleteTask(id);
        }}
      >
        {isEditable ? "cancel" : "delete"}
      </button>{" "}
      <button
        onClick={() => {
          if (isEditable) {
            updateTask(id, editedText);
          }
          onEditToggle();
        }}
      >
        {isEditable ? "save" : "edit"}
      </button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onEditToggle: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};

export default Task;
