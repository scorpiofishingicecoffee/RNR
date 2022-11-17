import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
const Home = () => {
  const [games, setGames]
  const auth = useContext(AuthContext);
  useEffect(()=> {
    getGames()
  }, [])

  const getGames = async ()=> {
    try{
      let res = axios.get("/api/games");
      setGames(res.data);
    }catch(err){
      alert("err in getGames(")
    }
  };

  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <code>{JSON.stringify(games)}</code>
    </div>
  );
};

export default Home;
