import React, { useState } from "react";
import "./App.css";
import users from "./users.json";

function App() {
  const [search, setSearch] = useState("");
  const [studentCheck, setStudentCheck] = useState(false);
  const [teacherCheck, setTeacherCheck] = useState(false);
  const [campusSearch, setCampusSearch] = useState('All');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleStudentCheck = (event) => {
    setStudentCheck(event.target.checked);
  };

  const handleTeacherCheck = (event) => {
    setTeacherCheck(event.target.checked);
  };

  const handleCampusSearch = (event) => {
    setCampusSearch(event.target.value)
  }

 let filteredUsers = users.filter(user => {
  
    return (
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
    )
  })

  if (studentCheck){
    filteredUsers = filteredUsers.filter(user => {
      return user.role === 'student'
    })
  }

  if (teacherCheck){
    filteredUsers = filteredUsers.filter(user => {
      return user.role === 'teacher'
    })
  }

  if (campusSearch !== 'All'){
    filteredUsers = filteredUsers.filter(user =>{
      return user.campus === campusSearch
    })
  }

  
  

  

  return (
    <div>
      <h1>IronBook</h1>

      <div className="App-header">
        <div class="filter-section">
          <input type="text" onChange={handleSearch} value={search} style={{ width: 800 }} />
          <div class="checkboxes-wrapper">
            <div class="checkbox">
              <label htmlFor="">Student </label>
              <input
                type="checkbox"
                checked={studentCheck}
                onChange={handleStudentCheck}
              />
            </div>
            <div class="checkbox">
              <label htmlFor="">Teacher </label>
              <input
                type="checkbox"
                checked={teacherCheck}
                onChange={handleTeacherCheck}
              />
            </div>
            <div>
            <label htmlFor="campus" style={{marginRight: 10}}>Campus:</label>
            <select name="campus" onChange={handleCampusSearch}>
              <option value="All">All</option>
              <option value="Berlin">Berlin</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Paris">Paris</option>
            </select>
            </div>
          </div>
        </div>

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
          {filteredUsers.map((user) => {
            return (
              <tbody>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                {user.linkedin && (
                  <td>
                    <a href={user.linkedin}>
                      <img
                        src="https://icons.iconarchive.com/icons/danleech/simple/256/linkedin-icon.png"
                        style={{ width: 18 }}
                        alt="linkedin-icon"
                      />
                    </a>
                  </td>
                )}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
