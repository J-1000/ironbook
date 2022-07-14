import { useState } from 'react'
import './App.css'
import users from "./users";
import linkPic from "./linkedin.png"


function App() {

const [search, setSearch] = useState('')
const [userList, setUserList] = useState(users)
const [isStudent, setIsStudent] = useState(false)
const [isTeacher, setIsTeacher] = useState(false)
const [selectedCountry, setSelectedCountry] = useState('')

const handleSearchChange = event => {
  setSearch(event.target.value)
}

const handleChangeCountry = event => {
  setSelectedCountry(event.target.value)
}

const filteredUsers = userList.filter(user => {
  if(user.lastName.toLowerCase().includes(search.toLowerCase()) || user.firstName.toLowerCase().includes(search.toLowerCase())){
    return true
  } else {
    return false
  }
})

const handleIsStudentChange = event => {
  setIsStudent(event.target.checked)
  const checkIfStudent = userList.slice().filter(user => user.role === 'student')
  console.log(checkIfStudent)
  setUserList(checkIfStudent);
}

const handleIsTeacherChange = event => {
  setIsTeacher(event.target.checked)
  const checkIfTeacher = userList.slice().filter(user => user.role === 'teacher')
  setUserList(checkIfTeacher);
}




  return (
    <div className="App">
      <h1>IronBook</h1>

    <form>
        <input className="Input"
            type="text"
            value={search}
            placeholder="Search by name"
            name="input" 
            onChange={handleSearchChange}
        />
    </form>

    <div>
      <input className="Checkbox" type="checkbox" name="student" value="Student" checked={isStudent} onChange={handleIsStudentChange} />Student
      <input className="Checkbox" type="checkbox" name="teacher" value="Teacher" checked={isTeacher} onChange={handleIsTeacherChange} />Teacher
    </div>
      <p>Campus:</p>
      <select value={selectedCountry} onChange={handleChangeCountry}>
        <option value='Berlin'></option>
        <option value='Tokyo'></option>
        <option value='Lisbon'></option>
        <option value='Paris'></option>
      </select>
    <div>

    </div>

      <div className='Table'>
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
      {filteredUsers.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td>{user.linkedin ? <img height="16" src={linkPic}/> : ""}</td>
        </tr>
        ))}
      </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default App
