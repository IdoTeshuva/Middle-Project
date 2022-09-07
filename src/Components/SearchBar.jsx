import "./search-bar.css"

const SearchBar = () => {
  return (
      <div className="search-bar-container">
        <h1>Search Your Next Show</h1>
        <input className="search-input" placeholder="Search event..."></input>
        <button className="search-button">Search</button>
      </div>
  );
};

export default SearchBar;