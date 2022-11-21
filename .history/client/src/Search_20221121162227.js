import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:3000/api/v1/games"
      );
      setGames(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="Card">
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchGames(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchGames === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((game) => <h5 key={game.id}>{game.name}</h5>)
      )}
    </div>
  );
}

export default Search;
