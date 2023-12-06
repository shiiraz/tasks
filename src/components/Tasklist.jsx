import { useGlobalContext } from "../context";
import Task from "./Task";

function Tasklist() {
  const { state } = useGlobalContext();
  if (state.arr.length < 1) {
    return <h2>No Tasks!</h2>;
  }
  return (
    <ul>
      {state.arr.map((x) => (
        <Task key={x.id} id={x.id} text={x.text} isDone={x.isDone} />
      ))}
    </ul>
  );
}

export default Tasklist;
