import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import users from "./users";

function App() {
  const [search, setSearch] = useState('')
  const [teacher, setTeacher] = useState('false')
  const [student, setStudent]= useState('false')
  const [campus, setCampus] = useState()

  return (
    <div className="App">
      <form>
        <input type="text" name="firstName" value={users.firstName} onChange={event =>{setSearch(event.target.value)}}  />
      </form>
      <label for="student">Student </label>
      <input  type="checkbox" checked={student} onChange={event =>{setStudent(event.target.checked)}} ></input>
      
      <label for="teacher">Teacher </label>
      <input  type="checkbox" checked={teacher} onChange={event =>{setTeacher(event.target.checked)}} ></input>
      
      <label for="campus">Campus: </label> 
      <select onChange={event =>{setCampus(event.target.value)}}>
        <option value="Tokyo">Tokyo</option>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Madrid">Madrid</option>
        <option value="default" selected>Choose..</option>
      </select>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        {users.filter((val)=>{
          if(search == ''){
            return val
          }
          else if(val.firstName.toLowerCase().includes(search.toLowerCase())) {
           return val
          }
        })
        .filter((user) => {
          if (student !== false) {
            return user.role.includes('student')
          } else {
            return true
          }
        })
        .filter((user) => {
          if (teacher !== false) {
            return user.role.includes('teacher')
          } else {
            return true
          }
        })
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
        .map(user => {
          return(
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              {user.linkedin && <th>LI</th>}
              {!user.linkedin && <th> </th>}  
            </tr>
        )})}
      </table>
    </div>
  )
}

export default App
