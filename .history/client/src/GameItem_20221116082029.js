import React from "react";
import { useContext, useEffect, useState } from "react";
import UpdateGameForm from "./UpdateGameForm";

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleUpdateGame(game) {
  }

  function handleDeleteGame() {
    fetch(`/api/v1/games/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteGame(game);
        alert("Game deleted successfully.");
      }
    });
  }

    function selectGame(id) {
      let item = games[id - 1];
      setName(item.name);
      setReleasedate(item.releasedate);
      setPlatforms(item.platforms);
      setGenre(item.genres);
    }

  return (
    <div className="conditional">
      {updategame ? (
        <UpdateGameForm />
      ) : (
        <div className="GameItem">
          <div className="details">
            <h2>{name}</h2>
            <p>Release Date: {release_date}</p>
            <p>Platforms: {platforms}</p>
            <p>Genres: {genres}</p>
            <p>
              <button className="sml-btn" onClick={handleUpdateGame}>
                Update Game
                <td>
                </td>
              </button>{" "}
              <button className="sml-btn" onClick={handleDeleteGame}>
                Delete Game
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameItem;
