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
  const [campus, setCampus] = useState('');

  const handleSearchFieldChange = e => setSearchTerm(e.target.value);

  const handleIsStudentChange = e => {
    setIsStudent(e.target.checked);
  };
  const handleIsTeacherChange = e => {
    setIsTeacher(e.target.checked);
    if (!isTeacher) setUsers(users.filter(user => user.role === 'teacher'));
    if (isTeacher) setUsers(usersArr);
  };
  const handleCampusChange = e => {
    setCampus(e.target.value);
  };
  const filteredUsers = () => {
    let prefilteredUsers = [...users];
    if (isStudent) {
      prefilteredUsers = users.filter(user => user.role === 'student');
    }
    return prefilteredUsers.filter(user => {
      return (
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 ||
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
      );
    });
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
          style={{ width: '100%', padding: '5px 10px' }}
        />
        <div style={{ float: 'left', marginLeft: '5%', padding: '20px 0px' }}>
          <input
            type="checkbox"
            id="student"
            value={isStudent}
            onChange={handleIsStudentChange}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            id="teacher"
            value={isTeacher}
            // onChange={handleIsTeacherChange}
          />
          <label htmlFor="teacher">Teacher</label>
          <label htmlFor="campus">Campus</label>
          <select
            name="campus"
            id="campus"
            value={campus}
            // onChange={handleCampusChange}
          >
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Berlin">Berlin</option>
          </select>
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
          {filteredUsers().map(user => (
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
