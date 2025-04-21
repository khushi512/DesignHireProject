import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search designers by name or skill..."
      />
    </div>
  );
};

export default SearchBar;
// // This code defines a SearchBar component that allows users to search for designers by name or skill. It takes in a searchTerm and an onSearch function as props, which are used to manage the search input and trigger the search action respectively.