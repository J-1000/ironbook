import { useState } from 'react';
import './App.css';
import usersArr from './users';
import { uid } from 'uid/single';
import LIicon from './assets/linkedin-icon.svg';

function App() {
  const [users, setUsers] = useState(usersArr);
  console.log(users);
  return (
    <div className="App">
      <h1>IronBook</h1>
      <table width="100%">
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
          {users.map(user => (
            <tr key={uid()}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin && (
                  <a href={user.linkedin}>
                    <img src={LIicon} alt="LinkedIn icon" height="20" />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
