import axios from "axios";
import { SET_ITEMS, SET_SEARCH_QUERY } from "./types";

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

  categories.forEach((category, i) => {
    if (!colorPalette[paletteIndex]) {
      paletteIndex = 0;
    }

    category.color = colorPalette[paletteIndex];

    paletteIndex++;
  });

  dispatch({ type: SET_ITEMS, payload: categories });
};

export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: SET_SEARCH_QUERY, payload: query });
};
