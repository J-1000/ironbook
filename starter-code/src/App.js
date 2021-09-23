import React from 'react';
import { useState } from 'react';
import './App.css';
import users from './users.json'
// import { v4 as uuid } from 'uuid';


function App () {
  
  const [query, setQuery] = useState('');
  const [teachers, setTeachers] = useState(true);
  const [students, setStudents] = useState(false);
  const [campus, setCampus] = useState('all');
  
  const locations = new Set (users.map(user => user.campus))
  const campusOptions = ['all', ...locations].map(loc => <option value={loc}>{loc}</option>)
  
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const toggleTeachers = event => {
    setTeachers(event.target.checked)
  }
  const toggleStudents = event => {
    setStudents(event.target.checked)
  }
  const pickCampus = event => {
    setCampus(event.target.value)
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
    <label for="camps">Choose a campus</label>
    
    <select name="campus" id="campus" onChange={pickCampus}>
    {campusOptions}
    </select>
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
        (user.firstName.toLowerCase().includes(query) || user.lastName.toLowerCase().includes(query)) && 
        ((students && user.role === 'student') || (teachers && user.role === 'teacher')) && 
        ((user.campus === campus) || (campus === 'all'))
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
        