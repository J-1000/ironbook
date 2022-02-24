import { useState } from 'react'
import './App.css'
import users from './users.json'
import img from './linkedin.png'

function App() {
  const [search, setSearch] = useState('')
  const [allUsers, setAllUsers] = useState(users)
  const [teacher, setTeacher] = useState(false)
  const [student, setStudent] = useState(false)
  const [campus, setCampus] = useState('select campuses')

  const inputHandler = (event) => {
    setSearch(event.target.value.toLowerCase())
    event.preventDefault()
  }
  console.log(student)

  const handleTeacher = (event) => {
    setTeacher(event.target.checked)
  }

  const handleStudent = (event) => {
    setStudent(event.target.checked)
  }
  const handleCampus = (event) => {
    setCampus(event.target.value)
  }
  let searchTerm = allUsers.filter((arr) =>
    `${arr.firstName}${arr.lastName}`.toLowerCase().includes(search)
  )
  searchTerm = searchTerm.filter((user) => {
    if (teacher && student) {
      return user
    } else if (student) {
      return user.role === 'student'
    } else if (teacher) {
      return user.role === 'teacher'
    } else {
      return true
    }
  })
  searchTerm = searchTerm.filter((user) => {
    if (campus === 'Paris') {
      return user.campus === 'Paris'
    } else if (campus === 'Berlin') {
      return user.campus === 'Berlin'
    } else if (campus === 'Lisbon') {
      return user.campus === 'Lisbon'
    } else {
      return true
    }
  })

  return (
    <div className='App'>
      <form>
        <input
          type='text'
          value={search}
          onChange={inputHandler}
          placeholder='search by name'
        />
        <label htmlFor=''>Teacher</label>
        <input type='checkbox' checked={teacher} onChange={handleTeacher} />
        <label htmlFor=''>Student</label>
        <input type='checkbox' checked={student} onChange={handleStudent} />
        <select onChange={handleCampus}>
          <option value='campus'>select a campus</option>
          <option value='Paris'>paris</option>
          <option value='Berlin'>Berlin</option>
          <option value='Lisbon'>Lisbon</option>
        </select>
      </form>
      <table>
        <thead>
          <tr>
            <th>First-name</th>
            <th>last-name</th>
            <th>campus</th>
            <th>role</th>
            <th>links</th>
          </tr>
        </thead>
        <tbody>
          {searchTerm.map((user) => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin && (
                    <a href={user.linkedin}>
                      <img src={img} alt='linkedinlogo' style={{ width: 10 }} />
                    </a>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
