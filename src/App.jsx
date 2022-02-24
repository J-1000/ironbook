import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import usersList from "./users"

// const usersArr = [...users];
// console.log(usersArr)

function App() {
 
// React States
  const [users, setUsers] = useState(usersList)
  const [search, setSearch] = useState("")
  const [isStudent, setCheckStudent] = useState(false)
  const [isTeacher, setCheckTeacher] = useState(false)
  

// React Handlers (function saved in a variable)
// handleSearchInput saves the typed-in info as a value
const handleSearchInput = function (searchInput) {
  console.log(searchInput.target.value)
setSearch(searchInput.target.value)
}
// Check if Checkbox is checked and asign value to State
// input in the field = target
const handleCheckboxInputStudent = function (checkInput) {
  console.log(checkInput.target.checked)
  setCheckStudent(checkInput.target.checked)
}
const handleCheckboxInputTeacher = function (checkInput) {
  console.log(checkInput.target.checked)
  setCheckTeacher(checkInput.target.checked)
}

// Filter - search in firstName and lastName 
  let filteredUsers = users.filter ((user) => {
    if(user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)){
      return user
    }
    else if(isStudent === true){
        return user.role === "student"
    }
  })
  
  // filteredUsers = users.filter((user) => {
  //   if(isStudent === true && user.role === "student") { 
  //     return user
  //   }
  // })
  // let teachersFilter = filteredUsers.filter((user) => {
  //   if(isTeacher === true && user.role === "teacher") { 
  //     return user
  //   }
  // })

return (
    <div className="App">
    <h1>IronBook</h1>
    <form>
{/* onChange - is activating the handler when input is changed  */}
      <input type="search" value={search} onChange={handleSearchInput} placeholder='Search by name...'></input>
      <input type="checkbox" name="student" onChange={handleCheckboxInputStudent}></input> Student
      <input type="checkbox"name="teacher" onChange={handleCheckboxInputTeacher} ></input> Teacher
    </form>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
         { filteredUsers.map(user => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                {user.linkedin && <td><a href={user.linkedin}><img src="./linkedin.png" alt="logo"/></a></td>}
              </tr>)
          })
         }
          </tbody>  
      </table>
      <form>
      </form>
    </div>
  )
}

export default App
