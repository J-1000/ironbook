import React from 'react';
import './App.css';
import users from "./users.json";
import { useState } from 'react';



function App() {
  
  const [query, setQuery] = useState('');
  const [studentRole, setStudentRole] = useState(false)
  const [teacherRole, setTeacherRole] = useState(false)
  const [campus, setCampus] = useState('all Campuses')

  const handleSearch = event => {
    setQuery(event.target.value)
  } 

  const handleStudentRole = event => {
    setStudentRole(event.target.checked)
  }

  const handleTeacherRole = event => {
    setTeacherRole(event.target.checked)
  }

  
  let results = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(query)
  );

  if (studentRole) {
    results = results.filter(user => {
      return user.role === "student";
    })
  }

    if (teacherRole){
      results = results.filter(user => {
        return user.role === 'teacher'
      })
    }

    const userList = results.map(user => {
      return (
      <tr >
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.campus}</td>
      <td>{user.role}</td>
          {user.linkedin && <td><a href={user.linkedin}>Linked In</a></td>}
      </tr>
      )
    })



    const handleCampus = event => {
      setCampus(event.target.value)
    }
    if (campus !== 'all Campuses') {
      results = results.filter(user => {
        return campus === user.campus;
      })
    }
  
    return (
     
      <div>       
        
        <h1>Ironbooks</h1>
        <form onSubmit={handleSearch}>
        <input type="text" id="search" className="search"value={query} onChange={handleSearch} />
         
         <input type="checkbox" className="student" checked={studentRole} onChange={handleStudentRole}/>
         <label htmlFor="" >Student</label>
         <input type="checkbox" className="teacher" checked={teacherRole} onChange={handleTeacherRole}/>
         <label htmlFor="" >Teacher</label>

         <label htmlFor="campus"
         className="campus">Campus: </label>
         <select name="campus"  onChange={handleCampus}>
          <option value="all Campuses"> all Campuses</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
         </select>

        </form>      
        <tr> 
         <td> First Name </td>
         <td> Last Name </td> 
         <td> Campus </td>
         <td> Role </td>
         <td> Links</td>        
        </tr>
        {userList}
      </div>     
    );
}


export default App;
