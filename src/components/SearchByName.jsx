import { useState } from "react";

export const SearchByName = ({search, setSearch}) => {

    const handleNamesChange = (event) => {
        setSearch(event.target.value);
      };

  return (
    <div className="col-12">
    <input
      type="text"
      value={search}
      onChange={handleNamesChange}
      placeholder="Search by name"
    />
  </div>
  )
}
