import React, { useState } from 'react';
import './App.css';
import users from "./users";

function App() {


  //const [user, setUser] = useState(users)
  const [search, setSearch] = useState('')
  const [teacher, setTeacher] = useState(false)
  const [student, setStudent] = useState(false)
  const [campus, setCampus] = useState('All')

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }


  const handleTeacherChange = (event) => {

    //changes the state from false to true
    setTeacher(event.target.checked)

  }

  const handleStudentChange = (event) => {
    setStudent(event.target.checked)
  }

  const handleCampusChange = (event) => {
    setCampus(event.target.value)
  }


  let filteredList = users.filter(user => {
    return (user.firstName.toLowerCase() + user.lastName.toLowerCase()).includes(search)
  })


  if (teacher === true) {
    filteredList = users.filter(user => {
      return user.role === 'teacher'
    })
  }

  if (student === true) {
    filteredList = users.filter(user => {
      return user.role === 'student'
    })
  }
  
  if (campus !== 'All') {
    filteredList = users.filter(user => {
      return campus === user.campus
    })
  }

  return (
    <div>
      <h1> Ironbook </h1>

      <div className="checkboxes">
        <input className="input" type="text" value={search} onChange={handleSearchChange} />



        <label htmlFor="student">Student</label>
        <input type="checkbox" id="student" checked={student} onChange={handleStudentChange} />


        <label htmlFor="teacher" name="teacher">Teacher</label>
        <input type="checkbox" id="teacher" checked={teacher} onChange={handleTeacherChange} />

        <label htmlFor="campus">Campus:</label>
        <select name="campus" id="campus" onChange={handleCampusChange}>
          <option value="All">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>

      </div>

      <table className="TblCenter">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>


        {filteredList.map(user => {
          return (
            <tbody>
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                {user.linkedin && <td><a href={user.linkedin}>Linked In</a></td>}

              </tr>
            </tbody>

          )

        })}

      </table>

    </div>
  )
}

export default App;
