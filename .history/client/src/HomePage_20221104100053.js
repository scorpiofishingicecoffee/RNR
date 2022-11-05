import React from "react";
import axios from "axios";
import NavBarPage from "./NavBarPage";
import Games from "./Games";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


  const API_URL = "/api/v1/games";
  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data);
  }
function HomePage() {
  //games
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

  //create new game
  const [name, setName] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, releasedate, platforms, genre }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/games");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  //users
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <div className="App">
      <NavBarPage />
      <Games games={games} />
    </div>
  );
}

export default HomePage;
