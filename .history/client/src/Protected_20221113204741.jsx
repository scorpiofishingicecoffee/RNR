import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import Games from "./Games";
import NewGameForm from "./NewGameForm";
import GameItem from "./GameItem";


const API_URL = "/api/v1/games";
function getAPIDATA() {
  return axios.get(API_URL).then((response) => response.data);
}
function Protected() {
  const 
  //authentication
  const auth = useContext(AuthContext);
  //games display
  const [games, setGames] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIDATA().then((items) => {
      if (mounted) {
        setGames(items);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleAddGame(addedGame) {
    setGames((games) => [...games, addedGame]);
  }

    function handleUpdateGame(updatedGame) {
      setGames((games) =>
        games.map((game) => {
          return game.id === updatedGame.id ? updatedGame : game;
        })
      );
    }

    function handleDeleteGame(deletedGame) {
      setGames((game) => games.filter((game) => game.id !== deletedGame.id));
    }

  return (
    <div className="Protected">
      <HomePage />
      <div className="UsersandCreate">
        <p>{auth.email}</p>
        {/* just displays additional info about the user in a json format*/}
        {/* <p>{JSON.stringify(auth)}</p> */}
        {auth.authenticated && <p>has been logged in.</p>}
        {/* ! means if the person is not authenticated */}
        {!auth.authenticated && <p>You're not logged in.</p>}

        <NewGameForm onAddGame={handleAddGame} />
      </div>
      {/*similar to game item excepts without button*/}
      {/* <div className="GameList"> */}
      {/* <Games games={games} /> */}
      {/* </div> */}
      <div className="GameListDeleteUpdate">
        <h1 className="App-Title">Upcoming Games</h1>
        {games.map((game) => (
          <GameItem
            key={game.id}
            game={game}
            onUpdateGame={handleUpdateGame}
            onDeleteGame={handleDeleteGame}
          />
        ))}
      </div>
    </div>
  );
}

export default Protected;
