import { useState } from 'react';
import './App.css';
import usersData from "./users";
import { v4 as uuid } from 'uuid';
import React from 'react';



function App() {
  const [users, setUsers] = useState(usersData)
  const [query, setQuery] = useState('');

  const handleSearch = event => {
    setQuery(event.target.value);
  };


  const results = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(query)
  );
  

  const usersList = results.map(user => {
    return (
    <tr key={ uuid()}>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.campus}</td>
    <td>{user.role}</td>
    {user.linkedin && <td><a href={user.linkedin}><i className="fab fa-linkedin"></i></a></td>}
    </tr>
    )
  })

  return (
      <div>
        <header>
          <h1>Ironbook</h1>
        </header>
        <form >
          <input type="search" value={query} onChange={handleSearch} id="search" className="search" aria-label="Search" />
        </form>

        <div>
        <table className="center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
          {usersList}
          </tbody>
        </table>
        </div>
      </div>
    );
}

export default App;
