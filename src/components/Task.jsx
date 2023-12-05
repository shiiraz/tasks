import PropTypes from "prop-types";
import { useGlobalContext } from "../context";

function Task({ id, text, isTrue }) {
  const { deleteTask, toggleCheck } = useGlobalContext();
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isTrue}
          onChange={() => toggleCheck(id)}
        />
        {text}
      </label>{" "}
      <button onClick={() => deleteTask(id)}>delete</button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isTrue: PropTypes.bool,
};

export default Task;
