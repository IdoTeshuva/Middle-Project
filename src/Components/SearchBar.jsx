import { useState } from "react";
import {Link} from "react-router-dom";
import "./search-bar.css";
const data = require("./artist-data.json");

const SearchBar = () => {
  const [value, setValue] = useState("");
  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-inner">
        <h1>Who's your favourite artist?</h1>
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={onChangeInput}
          placeholder="Search event..."
        ></input>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return searchTerm && fullName.startsWith(searchTerm);
            })
            .map((item) => (
              <Link
                className="dropdown-row"
                key={item.full_name}
                to={`${item.link}`}
              >
                {item.full_name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;