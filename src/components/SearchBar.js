import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-search"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
