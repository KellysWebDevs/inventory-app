import { GET_ITEMS } from "../actions/types";

const initialState = {
  categories: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
