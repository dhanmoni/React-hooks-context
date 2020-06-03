import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Stressed Out", id: uuid() },
    { title: "Heathens", id: uuid() },
    { title: "We don't talk anymore", id: uuid() },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("useEffect hook ran on songs", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect hook ran on age", age);
  }, [age]);
  return (
    <div className="sing-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
