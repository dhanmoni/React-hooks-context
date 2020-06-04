import { v4 as uuid } from "uuid";

export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { title: action.title, id: uuid() }];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
  }
};
