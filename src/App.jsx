import { useState } from 'react'
import './App.css'
import usersData from "./users";
import linkedinImg from "./linkedin.png"


function App() {
  const [users, setUsers] = useState(usersData)
  const [search, setSearch] = useState('')
  const [studentRole, setStudentRole] = useState(false)
  const [teacherRole, setTeacherRole] = useState(false)
  const [campus, setCampus] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const filteredUsers = usersData.filter((user) => {
      if (!user.firstName.includes(search) && !user.lastName.includes(search)) {
        return false
      }

      if (campus != "" && user.campus != campus) {
        return false
      }

      if (teacherRole && studentRole) {
        return true
      }

      if (teacherRole && user.role != "teacher") {
        return false
      }

      if (studentRole && user.role != "student") {
        return false
      }

      return true
    })

    setUsers(filteredUsers)
  }

const handleSearchChange = (event) => {
  setSearch(event.target.value)
}

const handleStudentRoleChange = (event) => {
  setStudentRole(event.target.checked)
}

const handleTeacherRoleChange = (event) => {
  setTeacherRole(event.target.checked)
}

const handleCampusChange = (event) => {
  setCampus(event.target.value)
}




  return (
    <div className='iron-books'>
      <h1>IronBook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Search by Name</label>
          <input type="text" value={search} onChange={handleSearchChange} />
        </div>
        <input type="checkbox" checked={studentRole} onChange={handleStudentRoleChange}/>
        <label htmlFor="role">Student</label>
        <input type="checkbox" checked={teacherRole} onChange={handleTeacherRoleChange}/>
        <label htmlFor="role">Teacher</label>
        <label htmlFor="campus">Campus</label>
        <select value={campus} onChange={handleCampusChange}>
          <option value="">Select Campus</option>
          <option value="Berlin">Berlin</option>
          <option value="Libsbon">Libsbon</option>
          <option value="Paris">Paris</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th><strong>First Name</strong></th>
            <th><strong>Last Name</strong></th>
            <th><strong>Campus</strong></th>
            <th><strong>Role</strong></th>
            <th><strong>Links</strong></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin && <img src={linkedinImg} alt="Linkedin Logo" style={{ width: 30 }} />}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
