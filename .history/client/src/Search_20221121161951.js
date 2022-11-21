import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:3000/api/v1/games"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="Search">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((game) => <h5 key={item.id}>{item.name}</h5>)
      )}
    </div>
  );
}

export default Search;
