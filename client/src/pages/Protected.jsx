import { AuthContext } from "../auth/AuthProvider";
import { useContext, useEffect, useState } from "react";
import HomePage from "./HomePage";
import NewGameForm from "../games/NewGameForm";
import GameItem from "../games/GameItem";
import LoginForm from "../auth/LoginForm";

function Protected() {
    // const [user, setUser] = useState();
    const [user, setUser] = useState(null);

  //authentication
  const auth = useContext(AuthContext);
  //games display
  const [games, setGames] = useState([]);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
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
       <div className="GameListDelete">
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
