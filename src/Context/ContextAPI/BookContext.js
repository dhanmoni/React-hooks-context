import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../Reducer/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

// { title: "Name of the wind", id: uuid() },
// { title: "The way of kings", id: uuid() },
// { title: "The final empire", id: uuid() },
// { title: "The hero of ages", id: uuid() },
//const addBook = (title) => {
// setBooks([...books, { title, id: uuid() }]);
//};
