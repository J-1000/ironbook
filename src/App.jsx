import {useState} from 'react'
import './App.css'
import users from "./users";

function App() {
  const [search, setSearch] = useState()
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [studentIsChecked, setStudentChecked] = useState(false)
  const [teacherIsChecked, setTeacherChecked] = useState(false)
  const [currentCampus, setCampus] = useState('')

  const filter = (e) => {
    const filterValue = e.target.value
    const filtered = users.filter(user => !!user.firstName.toLowerCase().match(filterValue.toLowerCase()) || !!user.lastName.toLowerCase().match(filterValue.toLowerCase()))
    console.log(filtered);
    setFilteredUsers(filtered)
  }

  const studentStatusChanged = event => {
    setStudentChecked(event.target.checked)
    filterUsers(event.target.checked, teacherIsChecked, currentCampus)
  }

  const teacherStatusChanged = event => {
    setTeacherChecked(event.target.checked)
    filterUsers(studentIsChecked, event.target.checked, currentCampus)
  }

  const chooseCampus = event => {
    console.log(event.target.value);
    setCampus(event.target.value)
    filterUsers(studentIsChecked, teacherIsChecked, event.target.value)
  }

  const filterUsers = (isStudentChecked, isTeacherChecked, campus) => {
    console.log(campus);
    const filtered = users.filter(user => ((user.role === "student" && isStudentChecked) || (user.role === "teacher" && isTeacherChecked))  && !!user.campus.match(campus))
    setFilteredUsers(filtered)
  }

  return (
    <div className="App">
      <label htmlFor=""></label>
      <input type="text" onChange={filter}/>
      <div>
        <label htmlFor="">Student </label>
        <input type="checkbox" checked={studentIsChecked} onChange={studentStatusChanged}/>

        <label htmlFor="">Teacher </label>
        <input type="checkbox" checked={teacherIsChecked} onChange={teacherStatusChanged}/>

        <label>Campus:</label>
        <select onChange={chooseCampus}>
          <option value="" >Select Campus</option>
          <option value="Berlin" >Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>
      </div>
      <table>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Link</th>
        </tr>
        </thead>
        <tbody>
        {filteredUsers.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
