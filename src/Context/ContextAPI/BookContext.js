import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", id: uuid() },
    { title: "The way of kings", id: uuid() },
    { title: "The final empire", id: uuid() },
    { title: "The hero of ages", id: uuid() },
  ]);
  const addBook = (title) => {
    setBooks([...books, { title, id: uuid() }]);
  };
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
