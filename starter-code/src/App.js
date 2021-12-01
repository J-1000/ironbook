import React, { useState } from 'react'
import './App.css';
import Users from './users.json'
import logo from './linkedin.png'

function App() {
  const [users, setUsers] = useState(Users)
  const [search, setSearch] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  const [isStudent, setIsStudent] = useState(false)
  // role, set role, {student false, teacher true}
  // const [role, setRole] = useState({ student: true, teacher: true })
  // console.log('users', users)



  // This is for search
  const handleSearchChange = event => {
    setSearch(event.target.value)
  }


  let newSearchList = users.filter((user) => {
    return (user.firstName.toLowerCase() + user.lastName.toLowerCase()).includes(search) 
    // && role[user.role]
    // && (user.campus === campus || ! campus)
  })
  // end of search



  // this is for teacher checkbox
  const handleisTeacherChange = event => {
    setIsTeacher(event.target.checked)
    
  }

  if (isTeacher == true){
    newSearchList = users.filter((user) => {
    return user.role ===  'teacher'
  })
}
// end of teacher checkbox


// this is for student checkbox
const handleIsStudentChange = event => {
  setIsStudent(event.target.checked)
}

if (isStudent == true){
  newSearchList = users.filter((user) => {
    return user.role === 'student'
  })
}
// end of student checkbox


  
    return (
      <div className="App">
         <form>
           <input type="text" value={search} onChange={handleSearchChange}/>

           <label htmlFor="">Teacher: </label>
           <input type="checkbox" checked={isTeacher} onChange={handleisTeacherChange}/>

           <label htmlFor="">Student: </label>
           <input type="checkbox" checked={isStudent} onChange={handleIsStudentChange}/>
         </form>
  
        <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        {newSearchList.map(user => {
          return (
            <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td>{user.linkedin && <a href={user.linkedin}><img src={logo}style={{width:'20px'}}/></a>}</td>
            </tr>
          )
        })}

        </table>
      </div>
    );
  
}

export default App;
