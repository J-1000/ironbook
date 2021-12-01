import React, { useState } from 'react'
import './App.css';
import data from './users.json'

function App() {
  
  const setInitialValue = () => {
    return data
  }

  //create a state
  const [users, setUsers] = useState(() => setInitialValue())
 
  //creating a list of users
  const usersList = users.map(user => {
    return (
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        {user.linkedin && <td><a href={user.linkedin}>Linked In</a></td>}
      </tr>
    )
  })
    
    return (
      <div className="App">
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
          {usersList}
        </tbody>
      </table>
      
    </div>
    );
    }
export default App;