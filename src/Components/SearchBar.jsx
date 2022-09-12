import { useRef, useState } from "react";
import {Link} from "react-router-dom";
import "./search-bar.css";
const data = require("./artist-data.json");

const SearchBar = () => {
  const [value, setValue] = useState("");
  const ref = useRef('')
  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const inputFocusHandler=()=>{
    ref.current?.classList.remove('hidden')
    }

const inputBlurHandler=()=>{

setTimeout(()=>{ref.current?.classList.add('hidden')
},200)
}

  return (
    <div className="search-container">
      <div className="search-inner">
        <h1>Who's your favourite artist?</h1>
        <input
          className="search-input"
          type="text"
          value={value}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          onChange={onChangeInput}
          placeholder="Find Your Artist..."
        ></input>
        <div className="dropdown" ref={ref}>
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