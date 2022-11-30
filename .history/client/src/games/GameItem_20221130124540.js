import React from "react";
import { useContext, useEffect, useState } from "react";
import UpdateGameForm from "./UpdateGameForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillTrashFill } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineGames } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { GiPlatform } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";


function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;
  const [games, setGames] = useState([]);
  const [updategame, setUpdategame] = useState(false);


  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleUpdateGame(game, id) {
    setUpdategame(true);
  }

  function handleDeleteGame() {
    fetch(`/api/v1/games/${game.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteGame(game);
        alert("Has been deleted successfully! Yay!( ﾟヮﾟ)/🎉🗑️🚮");
      }
    });
  }
  return (
    <div className="conditional">
      {updategame ? (
        <UpdateGameForm id={id} />
      ) : (
        <div className="GameItem">
          <div className="details">
            <h2>
              {id}-{name} <MdOutlineGames />
            </h2>
            <p>
              Release Date: {release_date} <MdDateRange />
            </p>
            <p>
              Platforms: {platforms} <GiPlatform />
            </p>
            <p>
              Genres: {genres}
              <BiCategoryAlt />
            </p>
            <p>
              <button className="sml-btn" onClick={handleUpdateGame}>
                Update Game
                <GrDocumentUpdate />
              </button>{" "}
              <button className="del-btn" onClick={handleDeleteGame}>
                Delete Game <BsFillTrashFill />
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameItem;
// this is ternary operation {state ? ("renders true") : ("renders false")}
