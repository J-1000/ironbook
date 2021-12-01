import React from 'react';
import './App.css';
import users from "./users";

const App = () => {
  return (
    <div>
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
          <tbody>
            {users.map((user, i) =>
              <tr key={i}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin}</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}

export default App;
