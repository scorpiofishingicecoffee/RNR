import React from "react";
import DatePicker from "react-date-picker";
import { useState } from "react";

function Releasedate() {
  const [value, onChange] = useState(new Date());
  console.log("Date", value);

  return (
    <div>
      <label htmlFor="releasedate" className="lbl">
        Release Date:
      </label>
      <br/>
      <DatePicker
        className="gamefield"
        id="release_date"
        onChange={onChange}
        value={value}
        minDate={new Date()}
      />
    </div>
  );
}

export default Releasedate;
