import React, { useState, useContext } from "react";
import { BookContext } from "../ContextAPI/BookContext";

const AddNewBook = () => {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useState("");
  const handleAddBook = (e) => {
    e.preventDefault();
    addBook(book);
    setBook("");
  };
  return (
    <form onSubmit={handleAddBook}>
      <label>Add book:</label>
      <input
        type="text"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};
export default AddNewBook;
