import React from 'react';

const SearchBox = ({ search, handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search by name" value={search} onChange={handleSearch} />
    </div>
  )
}

export default SearchBox