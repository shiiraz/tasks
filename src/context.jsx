import { useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const persistedState = localStorage.getItem("tasks");
const initialState = persistedState ? JSON.parse(persistedState) : { arr: [] };

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  function addTask(text) {
    const newId =
      state.arr.length > 0 ? state.arr[state.arr.length - 1].id + 1 : 0;
    dispatch({
      type: "ADD_TASK",
      payload: { id: newId, isDone: false, text: text },
    });
  }

  function deleteTask(id) {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  }

  function toggleCheck(id) {
    dispatch({ type: "TOGGLE_CHECK", payload: { id } });
  }
  function updateTask(id, text) {
    dispatch({ type: "UPDATE_TASK", payload: { id, text } });
  }

  return (
    <AppContext.Provider
      value={{ state, addTask, deleteTask, toggleCheck, updateTask }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
