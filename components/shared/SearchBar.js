// react library
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <label htmlFor="search-bar">
        <input name="search-bar" type="text" placeholder="Search for Note..." />
      </label>
    </div>
  );
};

export default SearchBar;
