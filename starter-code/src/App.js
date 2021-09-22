import React from 'react';
import './App.css';
import allUsers from "./users";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import linkedin from './linkedin.png'

// class App extends React.Component {
function App() {
  const [users, setUsers] = useState(allUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [isStudent, setIsStudent] = useState(true)
  const [isTeacher, setIsTeacher] = useState(true)
  const [campus, setCampus] = useState('All')

  const handleCampus = event => {
    setCampus(event.target.value)
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }
  
  const handleIsStudent = event => {
    setIsStudent(event.target.checked)
  }

  const handleIsTeacher = event => {
    setIsTeacher(event.target.checked)
  }

  const handlefilter = () => {
    let filteredList = [...allUsers];
    if (searchTerm.length !== 0) {
      filteredList = allUsers
      .filter(user => (user["firstName"]+user["lastName"]).toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if (!isStudent) {
       filteredList = filteredList.filter(user => user.role === 'teacher')
    }
    if (!isTeacher) {
      filteredList = filteredList.filter(user => user.role === 'student')
    }
    if (campus === 'berlin') {
      filteredList = filteredList.filter(user => user.campus.toLowerCase() === 'berlin')
    }
    if (campus === 'paris') {
      filteredList = filteredList.filter(user => user.campus.toLowerCase() === 'paris')
    }
    if (campus === 'lisbon') {
      filteredList = filteredList.filter(user => user.campus.toLowerCase() === 'lisbon')
    }
   return filteredList
  }

  const filteredList = handlefilter()

  const usersList = filteredList.map(users => {
    return (
      <tr key={uuid()}>
        <td>{users.firstName}</td>
        <td>{users.lastName}</td>
        <td>{users.campus}</td>
        <td>{users.role}</td>
        <td>{users.linkedin ? <a href={users.linkedin}><img className="linkedin" src={linkedin}/></a> : "" }</td>
      </tr>
    )
  })

    return (
      <div className="App">
        <h1>IronBook</h1>
        <form>
          <input type="text" placeholder="Search by name" id="searchBar" value={searchTerm} onChange={handleSearch}/>
          <input type="checkbox" id="isStudent" checked={isStudent} onChange={handleIsStudent} />
          <label htmlFor="isStudent">Student</label>
          <input type="checkbox" id="isTeacher" checked={isTeacher} onChange={handleIsTeacher} />
          <label htmlFor="isTeacher">Teacher</label>
          <label htmlFor="campus" className="campus">Campus</label>
          <select id="campus" onChange={handleCampus}>
            <option value="all">All</option>
            <option value="berlin">Berlin</option>
            <option value="paris">Paris</option>
            <option value="lisbon">Lisbon</option>
          </select>
        </form>
        <div className="container">
          <table>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Campus</td>
                <td>Role</td>
                <td>Links</td>
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
