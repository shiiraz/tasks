import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const AppContext = createContext();
const initialState = {
  s: "hello",
  arr: [{ id: 1, isTrue: false, text: "this is some text" }],
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTask(text) {
    const newId =
      state.arr.length > 0 ? state.arr[state.arr.length - 1].id + 1 : 0;
    dispatch({
      type: "ADD_TASK",
      payload: { id: newId, isTrue: false, text: text },
    });
  }

  function deleteTask(id) {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  }

  return (
    <AppContext.Provider value={{ state, addTask, deleteTask }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
