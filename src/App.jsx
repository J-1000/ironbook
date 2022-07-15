import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import users from "./users";
import linkedInIcon from '../linkedInIcon.png'

function App() {

  // console.log(users);
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [allUsers, setAllUsers] = useState(users)
  const [isStudent, setIsStudent] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)
  const [country, setCountry] = useState('')
  
  const inputHandler = event => {
    let lowerCase = event.target.value.toLowerCase()
    setSearch(lowerCase)
  }

  const handleIsStudentChange = event => {
    setIsStudent(event.target.checked)
  }

  const handleIsTeacherChange = event => {
    setIsTeacher(event.target.checked)
  }

  const handleCountry = event => {
    setCountry(event.target.value)

  }

  let allCountries = []
  users.map(user => allCountries.push(user.campus))
  

  const uniqueCountries = allCountries.filter((country, index, array) => array.indexOf(country) == index)

 
 let usersFiltered = allUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))

  // if (isTeacher === true && isStudent === false) {
  //   usersFiltered = allUsers.filter(user => user.role === 'teacher' && `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  // }

  // if (isStudent === true && isTeacher === false) {
  //   usersFiltered = allUsers.filter(user => user.role === 'student' && `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  // }

  // if (isStudent === true && isTeacher === true) {
  //   usersFiltered = allUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  // }

  // if (country) {    
  //   usersFiltered = allUsers.filter(user => user.campus === country)  
  // } 

  // if (country === 'deselect') {
  //   usersFiltered = allUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  // }

  if (isTeacher) {
    usersFiltered = usersFiltered.filter(user => user.role === 'teacher')
  }
  
  if (isStudent) {
    usersFiltered = usersFiltered.filter(user => user.role === 'student')
  }

  if (isStudent && isTeacher) {
    usersFiltered = allUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  }

  if (country) {    
    usersFiltered = usersFiltered.filter(user => user.campus === country)  
  }

  if (country === 'allCountries') {
    usersFiltered = allUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(search))
  }


  

  console.log(search)
  console.log( 'is Student:', isStudent);
  console.log( 'is Teacher:', isTeacher);
  console.log( 'unique countries: ', uniqueCountries);
  console.log( 'all countries: ', allCountries);
  console.log( 'selected country: ', country);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
        <input type="text" value={search} onChange={inputHandler}/>
        <label htmlFor="">Student</label>
        <input type='checkbox' checked={isStudent} onChange={handleIsStudentChange}/>
        <label htmlFor="">Teacher</label>
        <input type='checkbox' checked={isTeacher} onChange={handleIsTeacherChange}/> 
        <label>Campus</label>
        <select type='checkbox' name='countries' value={country} onChange={handleCountry} >
          <option value="" disabled selected hidden>Select your option</option>
          {uniqueCountries.map(county => (
            <option>{county}</option>
          ))}
          <option value='allCountries'>All Campuses</option>
          

        </select>
        </form>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>LinkedIn</th>
            </tr>
            {usersFiltered.map(user => (
            <tr>
              <th>{user.firstName}</th>
              <th>{user.lastName}</th>
              <th>{user.campus}</th>
              <th>{user.role}</th>
              <th>{user.linkedin ? <a href={user.linkedin}><img style={{width:'20px'}} src={linkedInIcon} alt ='linkedIn'/></a> : ''}</th>
            </tr>
            ))}
            
          </tbody>
        </table>
       
        
      </header>
    </div>
  )
}

export default App
