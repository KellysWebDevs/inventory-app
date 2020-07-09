import {
  SET_ITEMS,
  SET_ITEMS_LOADING,
  SET_SEARCH_QUERY,
  SET_CATEGORY_FILTER,
} from "../actions/types";

const initialState = {
  categories: [],
  itemsLoading: true,
  searchQuery: "",
  categoryFilter: "",
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ITEMS_LOADING:
      return {
        ...state,
        itemsLoading: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
