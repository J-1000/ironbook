import React from 'react';
import { useState } from 'react';
import './App.css';
import users from './users.json'
// import { v4 as uuid } from 'uuid';


function App () {
  
  const [query, setQuery] = useState('');
  const [teachers, setTeachers] = useState(true);
  const [students, setStudents] = useState(false);

  const handleInputChange = event => {
    // call setQuery in App.js via the prop
    setQuery(event.target.value)
  }
  const toggleTeachers = event => {
    // call setQuery in App.js via the prop
    setTeachers(event.target.checked)
  }
  const toggleStudents = event => {
    // call setQuery in App.js via the prop
    setStudents(event.target.checked)
  }
  return (
  
    <div>
    <input type="text" onChange={handleInputChange} />
    <form>
        <label>
          Teachers
          <input
            name="isTeacher"
            type="checkbox"
            checked={teachers}
            onChange={toggleTeachers} />
        </label>
        
        <label>
          Students
          <input
            name="isStudent"
            type="checkbox"
            checked={students}
            onChange={toggleStudents} />
        </label>
        
      </form>

    <table>
    <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Campus</th>
    <th>Linkedin</th>
    </tr>
    
    
    {[...users]
      .filter(user =>
        (user.firstName.includes(query) || user.lastName.includes(query)) && 
        ((students && user.role === 'student') || (teachers && user.role === 'teacher') )
        )
        .map(user => 
          <tr>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          { user.linkedin && <td>IN</td> }
          </tr>
          )}
          </table>
      </div>
          );
        }
        
        
        export default App;
        