import React from 'react';

const SearchBox = ({ search, handleSearch }) => {
  return (
    <input
      type='text'
      placeholder='Search by name'
      value={search}
      onChange={handleSearch}
    /> 
  )
}

export default SearchBox