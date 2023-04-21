import { store } from "../store/dogStore";

const initialState = store
const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return state.map(dog => {
        if (dog.chipNumber === action.chipNumber) {
          return { ...dog, present: action.status };
        }
        return dog;
      })
    case "ADD_DOG":
      return [
        action.payload, 
        ...state
        
      ]


    default:
      return state;
  }
}

export default dogReducer

