import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Platforms from "./Platforms";
import Genres from "./Genres";
import Releasedate from "./Releasedate";

const initialState = {
  name: "",
};

function NewGameForm({ onAddGame }) {
  const [formData, setFormData] = useState(initialState);
  const notify = () => toast("Has been added! ＼(^o^)／⏳🔧⚙️🕰️⏰");
  console.log("GameInfo", formData);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newGame) => {
        setFormData(initialState);
        onAddGame(newGame);
      });
  }

  return (
    <div className="Card">
      <h2>Add Some New Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="lbl">
          Name:
        </label>
        <br />
        <input
          className="gamefield"
          placeholder="TYPE HERE"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <Releasedate/>
        <div className="dropdown-container">
          <Platforms />
          <Genres />
        </div>
        <br />
        <button className="sml-btn" type="submit" onClick={notify}>
          Add
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default NewGameForm;
