const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case "DELETE_TASK": {
      const newArr = state.arr.filter((x) => x.id != action.payload.id);
      return { ...state, arr: [...newArr] };
    }
  }
  return state;
};

export default reducer;
