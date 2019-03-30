export function reducer(state, action) {
  switch (action.type) {
    case "ADD_VALUE":
      return {
        ...state,
        values: [
          ...state.values,
          action.payload
        ]
      }

    default:
      return state;
  }
}