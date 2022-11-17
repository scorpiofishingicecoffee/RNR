import HomePage from "./HomePage";
import { useEffect, useState } from "react";

function UpdateGameForm() {
  const [name, setName] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {}, []);

  function updategame() {
    let item = { name, releasedate, platforms, genres };
    console.warn(item);
    fetch(`/api/v1/games/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    }).then((result) => {
      result.json().then((response) => {
        console.warn(response);
        alert("Game updated successfully.");
      });
    });
  }


    function selectGame(id)
  {
    let item=games[id-1];
    setName(item.name)
        setReleasedate(item.)
        setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
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
        value={releasedate}
        onChange={(e) => {
          setReleasedate(e.target.value);
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
      <button className="sml-btn" type="submit" onClick={updategame}>
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
