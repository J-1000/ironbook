import React, { useState } from 'react'
import "./App.css";
import users from "./users.json";

function App() {
  const [search, setSearch] = useState('')
 

  const userData = users.filter(user => user.firstName.toLowerCase().includes(search.toLowerCase()) || search === '').map(user => {
    return (
      <tbody>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        {user.linkedin && (
          <td>
            <a href={user.linkedin}>
              <img
                src="https://icons.iconarchive.com/icons/danleech/simple/256/linkedin-icon.png"
                style={{ width: 18 }} alt="linkedin-icon"
              />
            </a>
          </td>
        )}
      </tbody>
    );
  });


  const handleSearch = event => {
    setSearch(event.target.value)
  }
 

  return (
    <div>
      <h1>IronBook</h1>

     

      <div className="App-header">
     
        <input type="text" onChange={handleSearch} style={{width: 800}} />

        {/* <label htmlFor="">Director: </label>
        <input type="text" value={director} onChange={handleDirectorChange} />

        <label htmlFor="">Oscars: </label>
        <input
          type="checkbox"
          checked={hasOscars}
          onChange={handleHasOscarsChange}
        />

        <label htmlFor="IMDBRating">Rating: </label>
        <input
          type="number"
          value={IMDBRating}
          onChange={handleIMDBRatingChange}
        />

        <button type="submit">Add this movie</button> */}
  
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          {}
          {userData}
        </table>
      </div>
    </div>
  );
}

export default App;