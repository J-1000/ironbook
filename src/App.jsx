import { useState } from 'react'
import users from "./users";
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [studentRole, setStudentRole] = useState(true)
  const [teacherRole, setTeacherRole] = useState(true)
  const [campus, setCampus] = useState('option')

  const handleSearchChange  = e => {
    setSearch(e.target.value)
  }
    
  const handleStudentRoleChange  = e => {
    setStudentRole(e.target.checked)

  }

  const handleTeacherRoleChange  = e => {
    setTeacherRole(e.target.checked)
  }

  const handleCampusChange  = e => {
    setCampus(e.target.value)
  }
  
   let filteredList = users.filter(user => user.firstName.toLowerCase().startsWith(search.toLowerCase()) || 
  user.lastName.toLowerCase().startsWith(search.toLowerCase()))
  
     filteredList = filteredList.filter(user => {
      if(studentRole && teacherRole){
        return user
      }
      else if(studentRole){
        return user.role === 'student'
      }
      else if(teacherRole) {
        return user.role === 'teacher'
      }
    
    } )
  
    
    filteredList = filteredList.filter(user => 
      
      { if (campus === 'option') {
        return user
      }
        return user.campus === campus})
  

  return (
    <div className="App">
      <form action="">

      <label htmlFor="name">Search by Name: </label>
      <input type="text" value={search} onChange={handleSearchChange}  id="name" />
      <div>
      <label htmlFor="student">Student</label>
      <input type="checkbox" checked={studentRole} onChange={handleStudentRoleChange}    id="student"/>

      <label htmlFor="teacher">Teacher</label>
      <input type="checkbox" checked={teacherRole} onChange={handleTeacherRoleChange}   id="teacher"/>
      </div>

      <div>
      <label htmlFor="campus">Campus</label>
        <select id="campus" onChange={handleCampusChange}>
            <option value="option">--Select Campus--</option>
            <option value="Berlin">Berlin</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Paris">Paris</option>
       </select>
      </div>

      </form>
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
     {filteredList.map(user => {
       return <tr>
         <td>{user.firstName}</td>
         <td>{user.lastName}</td>
         <td>{user.campus}</td>
         <td>{user.role}</td>
         <td>{user.linkedin}</td>
         </tr>
     })}
     </tbody>
     </table>
    </div>
  )
}

export default App
