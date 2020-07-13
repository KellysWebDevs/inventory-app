import {
  SET_ITEMS,
  SET_ITEMS_LOADING,
  SET_SEARCH_QUERY,
  SET_CATEGORY_FILTER,
  SET_SINGLE_ITEM,
} from "../actions/types";

const initialState = {
  categories: [],
  itemsLoading: false,
  searchQuery: "",
  categoryFilter: "",
  error: "",
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ITEMS_LOADING:
      if (state.itemsLoading === action.payload) {
        return state;
      } else {
        return {
          ...state,
          itemsLoading: action.payload,
        };
      }
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
    case SET_SINGLE_ITEM:
      const categories = JSON.parse(JSON.stringify(state.categories));
      const categoryIndex = categories.findIndex(
        (category) => category.name === action.payload.categoryName
      );
      const itemIndex = categories[categoryIndex].items.findIndex(
        (item) => item._id === action.payload.itemInfo.id
      );

      categories[categoryIndex].items[itemIndex].name =
        action.payload.itemInfo.item_name;
      categories[categoryIndex].items[itemIndex].amount =
        action.payload.itemInfo.item_amount;

      return {
        ...state,
        categories,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
