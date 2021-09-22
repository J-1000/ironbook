import React from 'react';
import './App.css';
import users from "./users";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import linkedin from './linkedin.png';

function App () {
    const [currentUsers, setCurrentUsers] = useState(users);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [searchName, setSearchName] = useState('');
    
    const filteredUsers = users.filter(user => {
      return user.firstName.toLowerCase().includes(searchName.toLowerCase()) || user.lastName.toLowerCase().includes(searchName.toLowerCase())
    })

    const handleNameChange = event => {
      setSearchName(event.target.value)
      setCurrentUsers(filteredUsers);
    }

    return (
      <div>
        <h1>Ironbook</h1>
        <div>
        <form>
        <label htmlFor="search"></label>
        <input type="search" name="search" id="search" value={searchName} onChange={handleNameChange} />
        </form>
        </div>
        <div>
          <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Roles</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => {
              return (
                <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin ? <img src={linkedin} alt="linkedin" width="40" height="40"/> : ""}</td>
                </tr>
              )
            })}
          </tbody>
          </table>
        </div>
      </div>
    )
}

export default App;
