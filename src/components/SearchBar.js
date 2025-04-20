import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
    />
  );
};

export default SearchBar;
