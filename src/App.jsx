import { useState } from 'react'
import './App.css'
import usersData from "./users.json";


function App() {

  //Iteration 1
  const [users, setUsers] = useState(usersData)

  //Iteration 2
  const [input, setInput] = useState('')
  const handleChangeFilter = event => {
    setInput(event.target.value)
  }

  //Iteration 3
  const [isStudent, setIsStudent] = useState(false)
  const handleIsStudent = event => {
    setIsStudent(event.target.checked)
  }
  const [isTeacher, setIsTeacher] = useState(false)
  const handleIsTeacher = event => {
    setIsTeacher(event.target.checked)
  }

  //Iteration 4
  const [campus, setCampus] = useState()
  const handleCampus = event => {
    setCampus(event.target.value)
   // console.log(event.target.value)
  }




  return (
    <div className="App">
      <h1>IronBook</h1>

      <form>
        <input type="text" value={input} onChange={handleChangeFilter} />
      </form>

      <label htmlFor="">Student: </label>
      <input type="checkbox" checked={isStudent} onChange={handleIsStudent} />

      <label htmlFor="">Teacher: </label>
      <input type="checkbox" checked={isTeacher} onChange={handleIsTeacher} />

      {/* Iteration 4 */}
      <label htmlFor="campus">Campus:</label>
      <select onChange={handleCampus}>
        <option value="Tokyo">Tokyo</option>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Madrid">Madrid</option>
        <option value="default" selected>Choose..</option>
      </select>

      <table key={users.id}>
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

          {users
            //Iteration 4 
            .filter((user) => {
              if (campus === 'Tokyo') {
                return user.campus.includes(campus)
              } else if (campus === 'Berlin') {
                return user.campus.includes(campus)
              } else if (campus === 'Lisbon') {
                return user.campus.includes(campus)
              } else if (campus === 'Paris') {
                return user.campus.includes(campus)
              } else if (campus === 'Amsterdam') {
                return user.campus.includes(campus)
              } else if (campus === 'Madrid') {
                return user.campus.includes(campus)
              } 
              else {
                return user
              }
            })

            .filter((user) => {
              if (isTeacher !== false) {
                return user.role.includes('teacher')
              } else {
                return true
              }
            })
            .filter((user) => {
              if (isStudent !== false) {
                return user.role.includes('student')
              } else {
                return true
              }
            })

            .filter((user) => {
              if (input === '') {
                return user
              } else {
                return user.firstName.toLowerCase().includes(input) || user.lastName.toLowerCase().includes(input)
              }
            })
            .map(function (user) {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default App

