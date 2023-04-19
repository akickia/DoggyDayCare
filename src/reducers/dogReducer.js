import { store } from "../store/dogStore";

const dogReducer = (state = store, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return state.map(dog => {
        if (dog.chipNumber === action.chipNumber) {
          return { ...dog, present: action.status };
        }
        return dog;
      });
    default:
      return state;
  }
}

export default dogReducer

