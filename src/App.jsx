import { useState } from 'react';
import './App.css';
import usersArr from './users';
import { uid } from 'uid/single';
import LIicon from './assets/linkedin-icon.svg';

function App() {
  const [users, setUsers] = useState(usersArr);
  const [searchTerm, setSearchTerm] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const handleSearchFieldChange = e => setSearchTerm(e.target.value);
  const handleSearch = () => {
    const filteredUsers = users.filter(user => {
      return (
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 ||
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
      );
    });
    setUsers(filteredUsers);
  };

  const handleIsStudentChange = e => {
    setIsStudent(e.target.checked);
    if (!isStudent) setUsers(users.filter(user => user.role === 'student'));
    if (isStudent) setUsers(usersArr);
  };
  const handleIsTeacherChange = e => {
    setIsTeacher(e.target.checked);
    if (!isTeacher) setUsers(users.filter(user => user.role === 'teacher'));
    if (isTeacher) setUsers(usersArr);
  };
  return (
    <div className="App">
      <h1>IronBook</h1>
      <div>
        <input
          type="text"
          autoFocus
          placeholder="Search by name or surname"
          value={searchTerm}
          onChange={handleSearchFieldChange}
          onKeyUp={handleSearch}
          onKeyPress={e => e.key === 'Enter' && handleSearch()}
          style={{ width: '90%', padding: '5px 10px' }}
        />
        <div style={{ float: 'left', marginLeft: '5%', padding: '20px 0px' }}>
          <input
            type="checkbox"
            id="student"
            value={isStudent}
            onChange={handleIsStudentChange}
          />
          <label htmlFor="student" style={{ marginRight: '20px' }}>
            Student
          </label>
          <input
            type="checkbox"
            id="teacher"
            value={isTeacher}
            onChange={handleIsTeacherChange}
          />
          <label htmlFor="teacher">Teacher</label>
        </div>
      </div>
      <table width="70%">
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
