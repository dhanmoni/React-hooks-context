import React from "react";
//import SongList from "./Hooks/Components/SongList";
import Navbar from "./Context/Components/Navbar";
import BookList from "./Context/Components/BookList";
import ThemeContextProvider from "./Context/ContextAPI/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* <SongList /> */}
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
