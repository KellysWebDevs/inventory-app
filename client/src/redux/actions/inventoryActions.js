import axios from "axios";
import { GET_ITEMS } from "./types";

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

      dispatch({ type: GET_ITEMS, payload: categories });
    })
    .catch((err) => console.error(err));
};
