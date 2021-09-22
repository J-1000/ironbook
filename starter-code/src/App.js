import { useState } from 'react';
import './App.css';
import usersData from "./users";
import { v4 as uuid } from 'uuid';
import React from 'react';



function App() {
  const [users, setUsers] = useState(usersData)
  const [query, setQuery] = useState('');
  const [studentRole, setStudentRole] = useState(false);
  const [teacherRole, setTeacherRole] = useState(false);

  const handleSearch = event => {
    setQuery(event.target.value);
  };

  let results = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(query)
  );

  const handleStudentChange = event => {
    setStudentRole(event.target.checked)
  };

  const handleTeacherChange = event => {
    setTeacherRole(event.target.checked)
  }
  
  if (studentRole) {
    results = results.filter(user => {
      return user.role === 'student';
    })
  }

  if (teacherRole) {
    results = results.filter(user => {
      return user.role === 'teacher';
    })
  }
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

          <label htmlFor="studentRole">Student </label>
          <input type="checkbox" name="studentRole" id="studentRole" checked={studentRole} onChange={handleStudentChange} />
        
          <label htmlFor="teacherRole">Teacher </label>
          <input type="checkbox" name="teacherRole" id="teacherRole" checked={teacherRole} onChange={handleTeacherChange} />
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
