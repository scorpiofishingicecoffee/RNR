import React from "react";
import { useState } from "react";
function CreateGame() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");

  const onChangeName = e => {
          setName(e.target.value);
  }

  return <div className="App"></div>;
}

export default CreateGame;
