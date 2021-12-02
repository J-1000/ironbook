import React, { useState } from 'react'
import './App.css';
import data from './users.json'
import logo from '../src/linkedin.png'
import { render } from '@testing-library/react';

function App() {

  //state for list of users
  const setInitialValue = () => {
    return data
  }
  const [users, setUsers] = useState(() => setInitialValue())
  //state for search bar
  const [search, setSearch] = useState('')


  //search bar
  const handleSearch = event => {
    setSearch(event.target.value)
  }

  let newSearch = users.filter((user) => {
    return (user.firstName.toLowerCase() + user.lastName.toLowerCase()).includes(search)
  })

  return (
    <div className="App">
      <form>
        <input type='text' value={search} onChange={handleSearch} />

      </form>

      <h1>IronBook</h1>
      <table class='center'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        <tbody>
          {newSearch.map(user => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin && <a href={user.linkedin}> <img src={logo} style={{ width: '15px' }} /></a>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;