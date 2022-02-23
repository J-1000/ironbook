import { useState } from 'react';
import './App.css';
import usersArr from './users';
import { uid } from 'uid/single';
import LIicon from './assets/linkedin-icon.svg';

function App() {
  const [users, setUsers] = useState(usersArr);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchFieldChange = e => setSearchTerm(e.target.value);
  const handleSearch = () => {
    // console.log(users);

    const filteredUsers = users.filter(user => {
      return (
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 ||
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
      );
    });
    setUsers(filteredUsers);
  };
  return (
    <div className="App">
      <h1>IronBook</h1>
      <input
        type="text"
        autoFocus
        placeholder="Search by name or surname"
        value={searchTerm}
        onChange={handleSearchFieldChange}
        onKeyUp={handleSearch}
        // onKeyPress={e => e.key === 'Enter' && handleSearch()}
        style={{ width: '90%', padding: '5px 10px' }}
      />
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
