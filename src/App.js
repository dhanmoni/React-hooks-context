import React from "react";
//import SongList from "./Hooks/Components/SongList";
import Navbar from "./Context/Components/Navbar";
import BookList from "./Context/Components/BookList";
import ThemeContextProvider from "./Context/ContextAPI/ThemeContext";
import ThemeToggle from "./Context/Components/ThemeToggle";
import AuthContextProvider from "./Context/ContextAPI/AuthContext";
import BookContextProvider from "./Context/ContextAPI/BookContext";
import AddNewBook from "./Context/Components/AddNewBook";

function App() {
  return (
    <div className="App">
      {/* <SongList /> */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
            <AddNewBook />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
