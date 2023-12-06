const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case "DELETE_TASK": {
      const newArr = state.arr.filter((x) => x.id !== action.payload.id);
      return { ...state, arr: newArr };
    }
    case "TOGGLE_CHECK": {
      const newArr = state.arr.map((x) => {
        if (x.id === action.payload.id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      });
      return { ...state, arr: newArr };
    }
    case "UPDATE_TASK": {
      const newArr = state.arr.map((x) => {
        if (x.id === action.payload.id) {
          return { ...x, text: action.payload.text };
        }
        return x;
      });
      return { ...state, arr: newArr };
    }
    default:
      throw new Error("No matching Action Type");
  }
};

export default reducer;
