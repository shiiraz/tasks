import { useGlobalContext } from "../context";
import Task from "./Task";

function Tasklist() {
  const { state } = useGlobalContext();
  return (
    <ul>
      {state.arr.map((x) => (
        <Task key={x.id} id={x.id} text={x.text} />
      ))}
    </ul>
  );
}

export default Tasklist;
