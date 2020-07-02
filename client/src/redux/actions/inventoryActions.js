import axios from "axios";
import { SET_ITEMS, SET_ITEMS_LOADING, SET_SEARCH_QUERY } from "./types";

export const getItems = () => (dispatch) => {
  axios
    .get("/api/items")
    .then((res) => {
      const items = res.data;
      const categories = [];

      items.forEach((item, i) => {
        if (!categories.find((category) => category.name === item.category)) {
          categories.push({
            name: item.category,
            items: [],
          });
        }
      });

      categories.forEach((category) => {
        items.forEach((item, i) => {
          if (category.name === item.category) {
            category.items.push(item);
          }
        });
      });

      setItems(categories)(dispatch);
    })
    .catch((err) => console.error(err));
};

export const setItems = (categories) => (dispatch) => {
  const colorPalette = [
    "deep-purple",
    "blue",
    "pink",
    "cyan",
    "red",
    "green",
    "purple",
    "lime",
    "indigo",
    "amber",
    "light-blue",
    "deep-orange",
    "teal",
    "grey",
    "light-green",
    "blue-grey",
    "yellow",
    "brown",
    "orange",
  ];
  let paletteIndex = 0;
  let lightenNumber = 3;

  categories.forEach((category, i) => {
    if (!colorPalette[paletteIndex]) {
      paletteIndex = 0;
    }
    if (lightenNumber > 5) {
      lightenNumber = 3;
    }

    category.color = colorPalette[paletteIndex];
    category.lighten = lightenNumber;

    paletteIndex++;
    lightenNumber++;
  });

  dispatch({ type: SET_ITEMS, payload: categories });
  dispatch({ type: SET_ITEMS_LOADING, payload: false });
};

export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: SET_SEARCH_QUERY, payload: query });
};
