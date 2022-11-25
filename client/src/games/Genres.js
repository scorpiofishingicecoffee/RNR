import React from "react";
import Select from "react-dropdown-select";
import propTypes from "prop-types";

function Genres({ gameGenres, genresChange }) {
  const options = [
    { label: "action", value: "action" },
    { label: "adventure", value: "adventure" },
    { label: "castle", value: "castle" },
    { label: "casual", value: "casual" },
    { label: "match 3", value: "match 3" },
    { label: "medieval", value: "medieval" },
    { label: "mmo", value: "mmo" },
    { label: "mmorpg", value: "mmorpg" },
    { label: "multiplayer", value: "multiplayer" },

    { label: "puzzle", value: "puzzle" },
    { label: "pvp", value: "pvp" },

    { label: "robot", value: "robot" },
    { label: "rpg", value: "rpg" },
    { label: "shooters", value: "shooters" },
    { label: "solitaire", value: "solitaire" },
    { label: "Strategy", value: "Strategy" },
    { label: "Survival", value: "Survival" },
    { label: "War", value: "War" },
    { label: "Horror", value: "Horror" },
  ];
  return (
    <div className="gamefield">
      <label htmlFor="plt">Genres:</label>
      <Select
        className="gamefield"
        value={gameGenres}
        options={options}
        placeholder="CLICK HERE"
        required={true}
        dropdownPosition="bottom"
        className="select"
        color="#ff5c5c"
        onChange={genresChange}
      />
    </div>
  );
}

export default Genres;
