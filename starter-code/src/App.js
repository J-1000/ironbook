import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuid } from 'uuid';


const usersList = users.map(user => {
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


class App extends React.Component {


  render() {
    return (
      <div>
        <header>
          <h1>Ironbook</h1>
        </header>
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
}

export default App;
