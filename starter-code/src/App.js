import React from 'react';
import './App.css';
import users from "./users";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import linkedin from './linkedin.png';

function App () {
    // const [currentUsers, setCurrentUsers] = useState(users);
    const [searchName, setSearchName] = useState('');
    const [isStudent, setIsStudent] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    // const filteredStudents = users.filter(user => {
    //   if(user.role === "student") {
    //     return user;
    //   }
    // })

    const handleNameChange = event => {
      setSearchName(event.target.value)
    }

    const handleStudentChange = event => {
      setIsStudent(event.target.checked)
    }

    const handleTeacherChange = event => {
      setIsTeacher(event.target.checked)
    }

    // if (isStudent) {  (hacker.role.includes('student')) }
    // else if (isTeacher) { (hacker.role.includes('teacher')) }

    const filteredUsers = users.filter(user => {
      return (!searchName ? true: `${user.firstName}${user.lastName}`.toLowerCase().includes(searchName) )
        && (!isTeacher ? true: user.role === 'teacher') && (!isStudent ? true: user.role === 'student')
    })


    // const filteredUsers = users.filter(user => {
    //   return  (user.firstName.toLowerCase().includes(searchName.toLowerCase()) 
    //     || user.lastName.toLowerCase().includes(searchName.toLowerCase()))
    //     && isTeacher ? true : user.role === 'teacher'
    // })

    return (
      <div>
        <h1>Ironbook</h1>
        <div>
          <form>
          <label htmlFor="search"></label>
          <input type="search" name="search" id="search" placeholder="Search by name" value={searchName} onChange={handleNameChange} />
          <div>
            <label htmlFor="isStudent">Student</label>
            <input type="checkbox" name="isStudent" id="isStudent" checked={isStudent} onChange={handleStudentChange} />
            <label htmlFor="isTeacher">Teacher</label>
            <input type="checkbox" name="isTeacher" id="isTeacher" checked={isTeacher} onChange={handleTeacherChange} />
          </div>
        </form>
        </div>
        <div>
          <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Roles</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin && <img src={linkedin} alt="linkedin" width="40" height="40"/>}</td>
                </tr>
              )
            })}
          </tbody>
          </table>
        </div>
      </div>
    )
}

export default App;
