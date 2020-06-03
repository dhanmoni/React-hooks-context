import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const onAddSong = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={onAddSong}>
      <label>Song Name:</label>
      <input type="text" required value={title} onChange={onTitleChange} />
      {/* <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} /> */}
      <input type="submit" value="add song" />
    </form>
  );
};
export default NewSongForm;
