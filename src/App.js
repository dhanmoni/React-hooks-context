import React from "react";
//import SongList from "./Hooks/Components/SongList";
import Navbar from "./Context/Components/Navbar";
import BookList from "./Context/Components/BookList";

function App() {
  return (
    <div className="App">
      {/* <SongList /> */}
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
