import HomePage from "./HomePage";
import { useEffect, useState } from "react";

function UpdateGameForm() {

    const [name, setName] = useState("");
    const [release_date, setRelease_date] = useState("");
    const [platforms, setPlatforms] = useState("");
    const [genres, setGenres] = useState("");

     useEffect(() => {
       getGames();
     }, []);
     function getUsers() {
       fetch("http://localhost:4000/todo").then((result) => {
         result.json().then((resp) => {
           // console.warn(resp)
           setUser(resp);
           setName(resp[0].name);
           setMobile(resp[0].mobile);
           setEmail(resp[0].email);
           setUserId(resp[0].id);
         });
       });
     }

    function updateGame() {
      let item = { name, release_date, platforms, genres };
      console.warn("item", item);
      fetch(`http://127.0.0.1:3000/api/v1/games/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          getUsers();
        });
      });
    }

  return (
    <div className="UpdateCard">
      <h2>Updating the Game</h2>
      <label htmlFor="title">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input
        type="text"
        id="release_date"
        value={release_date}
        onChange={(e) => {
          setRelease_date(e.target.value);
        }}
      />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input
        type="text"
        id="platforms"
        value={platforms}
        onChange={(e) => {
          setPlatforms(e.target.value);
        }}
      />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input
        type="text"
        id="genres"
        value={genres}
        onChange={(e) => {
          setGenres(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="sml-btn" type="submit" onClick={updateGame}>
        Save changes
      </button>
      <br />
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;
