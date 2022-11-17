import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Games from "../Games";
import HomePage from "../HomePage";

  const API_URL = "/api/v1/games";
  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data);
  }

function Protected(){
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

//create new games
  const addGame = (game) => {
    game.id = games.length + 1;
    setGames([...games, game]);
  };
//delete a game
    const deleteGame = (id) => {
      setGames(games.filter((game) => game.id !== id));
    };

    const [editing, setEditing] = useState(false);

    const initialGame = { id: null, name: "", release_date: "", platforms: "", genres: "" };

    const [currentGame, setCurrentGame] = useState(initialGame);

    const editGame = (id, game) => {
      setEditing(true);
      setCurrentGame(game);
    };

    const updateGame = (newGame) => {
      setGame(
        games.map((game) => (game.id === currentGame.id ? newGame : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
    };

  return (
    <div className="App">
      <p>Email: {auth.email}</p>
      {/* <p>{JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>has been logged in.</p>}
      {!auth.authenticated && <p>You're not logged in.</p>}
      <HomePage />
      <Games games={games} />

    </div>
  );
};

export default Protected;
