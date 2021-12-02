import React, { useState } from 'react'
import './App.css';
import data from './users.json'
import logo from '../src/linkedin.png'
import { render } from '@testing-library/react';

function App() {

  //state for list of users
  const setInitialValue = () => {
    return data
  }
  const [users, setUsers] = useState(() => setInitialValue())
  //state for search bar
  const [search, setSearch] = useState('')
  // state for teacher search
  const [isTeacher, setIsTeacher] = useState('false')
  //state for student search
  const [isStudent, setIsStudent] = useState('false')
  //state for country search
  const [campus, setCampus] = useState('All')

  //search 
  const handleSearch = event => {
    setSearch(event.target.value)
  }
//define Search
  let newSearch = users.filter((user) => {
    return (user.firstName.toLowerCase() + user.lastName.toLowerCase()).includes(search)
  })

  //teacher and student checkboxes
  const handleTeacherSearch = event => {
    setIsTeacher(event.target.checked)
  }

  if (isTeacher == true) {
    newSearch = users.filter((user) => {
      return user.role === 'teacher'
    }
    )
  }

  const handleStudentSearch = event => {
    setIsStudent(event.target.checked)
  }

  if (isStudent == true) {
    newSearch = users.filter((user) => {
      return user.role === 'student'
    }
    )
  }

  //campus search
  const handleCampusSearch = event => {
    setCampus(event.target.value)
  }

  if(campus!== 'All') {
    newSearch = newSearch.filter((user) => {
      return campus=== user.campus
    }
      )
  }


  return (
    <div className="App">
      <h1>IronBook</h1>
      <form>
        <input type='text' value={search} onChange={handleSearch} style={{ margin: '20px' }} placeholder='Search by name' /> <br></br>
        <label htmlFor="">Teacher:</label>
        <input type='checkbox' checked={isTeacher} onChange={handleTeacherSearch} />
        <label htmlFor="">Student:</label> 
        <input type='checkbox' checked={isStudent} onChange={handleStudentSearch} /> <br></br>
        <label htmlFor="campus">Campus:</label>
            <select name="campus" id="campus" onChange={handleCampusSearch} style={{ margin: '20px' }}>
              <option value="All">All</option>
              <option value="Berlin">Berlin</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Paris">Paris</option>
            </select>
      </form>

      <table class='center'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        <tbody>
          {newSearch.map(user => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin && <a href={user.linkedin}> <img src={logo} style={{ width: '15px' }} /></a>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;