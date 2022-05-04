import { useState } from 'react';
import './App.css';
import users from './users';
import linkedIn from './linkedin.png'

function App() {
  const campus = getCampusFromUsers();

  function getCampusFromUsers() {
    let campus = [];
    users.forEach(user => {
      if (!campus.includes(user.campus))
      campus.push(user.campus);
    })
    return campus;
  }

  const [usersList, setUsers] = useState(users);
  const [search, setSearch] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [fromCampus, setFromCampus] = useState();

  const handleSearch = event => {
    setSearch(event.target.value);
  }

  const handleIsTeacherChange = event => {
    setIsTeacher(event.target.checked);
  }

  const handleIsStudentChange = event => {
    setIsStudent(event.target.checked);
  }

  const handleFromCampusChange = event => {
    setFromCampus(event.target.value);
  }

  return (
    <div className="App">
      <>
        <h1>IronBook</h1>
        <form>
          <input type="text" value={search} onChange={handleSearch}></input>
          <label htmlFor="">Is Teacher: </label>
          <input type="checkbox" checked={isTeacher} onChange={handleIsTeacherChange}></input>
          <label htmlFor="">Is Student: </label>
          <input type="checkbox" checked={isStudent} onChange={handleIsStudentChange}></input>
          <label htmlFor="">Select Country: </label>
          <select onChange={handleFromCampusChange}>
          <option value="undefined"></option>
            {campus
            .map(campus => (
              <option value={campus} >{campus}</option>
            ))}
          </select>
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
              {usersList
              .filter(user => {
                return user.lastName.includes(search);
              })
              .filter(user => {
                if (isTeacher && user.role !== 'teacher') {
                  return false;
                }

                if (isStudent && user.role !== 'student') {
                  return false;
                }

                return true;
              })
              .filter(user => {
                if (fromCampus) {
                  return user.campus === fromCampus;
                }

                return true;
              })
              .map(user =>
              (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>{user.linkedin && <a href={user.linkedin}><img src={linkedIn}/></a>}</td>
                </tr>   
              ))}
          </tbody>
        </table>

      </>
    </div>
  )
}

export default App
