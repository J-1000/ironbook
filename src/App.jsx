import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import users from "./users";

function App() {
  const [count, setCount] = useState(0)

  const [query, setQuery] = useState('')

  const [teacher, setTeacher] = useState(false)

  const [student, setStudent] = useState(false)

  const [campus, setCampus] = useState('')


  const handleSearch = event => {
    setQuery(event.target.value)
  }

  const handleTeacher = event => {
    console.log(teacher)
    setTeacher(event.target.checked)
  }

  const handleStudent  = event => {
    console.log(student)
    setStudent(event.target.checked)
  }

  const handleCampus = event => {
    console.log(campus)
    setCampus(event.target.value)
  }

  return (

    <div className="App">
    
    <h1>IronBook</h1>

    <div class='input'>

    <input placeholder="Search" onChange={handleSearch}/>

    <label htmlFor=''>Teacher</label>
    <input type='checkbox' onChange={handleTeacher}/>

    <label htmlFor=''>Student</label>
    <input type='checkbox' onChange={handleStudent}/>

    <label htmlFor=''>Campus</label>
    <select onChange={handleCampus}>
     <option value='' ></option>
      <option value='paris' >Paris</option>
      <option value='lisbon' >Lisbon</option>
      <option value='berlin' >Berlin</option>
    </select>

    </div>

 
    
   

    <table>
    <tr><th> First Name </th><th> Last Name </th><th> Campus </th><th> Role </th><th> Links </th></tr>
    {users.filter(user => {
      return (user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())) 
      &&
      (teacher === true ? user.role === 'teacher' : user)
      &&
      (student === true ? user.role === 'student' : user)
      &&
      (campus === 'paris' ? user.campus === 'Paris' : user)
      &&
      (campus === 'lisbon' ? user.campus === 'Lisbon' : user)
      &&
      (campus === 'berlin' ? user.campus === 'Berlin' : user)



      

  }).map((user,i) => 
  
  <tr key={i}><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.campus}</td><td>{user.role}</td><td>{user.linkedin?<h4>!</h4>:<h4></h4>}</td></tr>
 
)}

</table>



   

     
    </div>
  )
}

export default App
