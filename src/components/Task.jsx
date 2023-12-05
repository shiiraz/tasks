import { useGlobalContext } from "../context";

function Task({ id, text }) {
  const { deleteTask } = useGlobalContext();
  return (
    <li>
      <label>
        <input type="checkbox" />
        {text}
      </label>{" "}
      <button onClick={() => deleteTask(id)}>delete</button>
    </li>
  );
}

export default Task;
