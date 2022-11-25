import React from "react";
import Select from "react-dropdown-select";

function Platforms({ gamePlatforms, platformsChange }) {
  const options = [
    { label: "PC:Microsoft Windows", value: "PC:Microsoft Windows" },
    { label: "PC:MAC", value: "PC:MAC" },
    { label: "PlayStation 5", value: "PlayStation 5" },
    { label: "Nintendo Switch", value: "Nintendo Switch" },
    { label: "Xbox Series X", value: "Xbox Series X" },
    { label: "Xbox Series S", value: "Xbox Series S" },
    { label: "PlayStation 4", value: "PlayStation 4" },
    { label: "Xbox One", value: "Xbox One" },
    { label: "Android Mobile", value: "Android Mobile" },
    { label: "iOS", value: "iOS" },
  ];

  console.log("Platforms", gamePlatforms)

  return (
    <div className="gamefield">
      <label htmlFor="plt">Platforms:</label>
      <Select
        className="gamefield"
        value={gamePlatforms}
        options={options}
        placeholder="CLICK HERE"
        required={true}
        dropdownPosition="bottom"
        color="#ff5c5c"
        onChange={platformsChange}
      />
    </div>
  );
}

export default Platforms;
