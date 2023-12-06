import PropTypes from "prop-types";
import { useGlobalContext } from "../context";
import { useState } from "react";

function Task({ id, text, isDone }) {
  const { deleteTask, toggleCheck, updateTask } = useGlobalContext();
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li>
      {edit ? (
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
          edit ? handleEditToggle() : deleteTask(id);
        }}
      >
        {edit ? "cancel" : "delete"}
      </button>{" "}
      <button
        onClick={() => {
          if (edit) {
            updateTask(id, editedText);
          }
          handleEditToggle();
        }}
      >
        {edit ? "save" : "edit"}
      </button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
};

export default Task;
