import { SET_ITEMS, SET_SEARCH_QUERY } from "../actions/types";

const initialState = {
  categories: [],
  searchQuery: "",
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
