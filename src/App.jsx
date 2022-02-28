import { useState } from 'react'
import './App.css'
import linkedinIcon from "./linkedin.png"
import usersJson from "./users";

function App() {

  let [users, setUsers] = useState(usersJson)
  let [search, setSearch] = useState('')
  let [studentFilter, setStudentFilter] = useState(true)
  let [teacherFilter, setTeacherFilter] = useState(true)
  let [campus, setCampus] = useState('All')

    //setUsers(searchResults)

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }

  const handleStudentFilter = (event) => {
    setStudentFilter(event.target.checked)
  }

  const handleTeacherFilter = (event) => {
    setTeacherFilter(event.target.checked)
  }

  const handleCampus = (event) => {
    setCampus(event.target.value)
  }

  let results = usersJson.filter(user => {

    if(user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()))
      return true
  })

  results =results.filter(user => {
    if(studentFilter && teacherFilter)
      return true

    else if(studentFilter){
      if(user.role === 'student')
        return true
    }

    else if(teacherFilter){
      if(user.role === 'teacher')
      return true
    }
      
    else{
      return false
    }  
  })

  results = results.filter(user => {
    if(campus !== 'All'){
      if(user.campus == campus)
        return true
    }

    else{
      return true
    }
  })

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="5"><h1>IronBook</h1></th>
          </tr>
          <tr>
            <th colSpan="5">
              <form>
                <input type="text" value={search} onChange={handleSearch} placeholder="Search by Name"/>
              </form>
            </th>          
          </tr>
          <tr>
            <th>             
              <input type="checkbox" checked={studentFilter} onChange={handleStudentFilter}/>
              <label>Student</label>
            </th>
            <th>
              <input type="checkbox" checked={teacherFilter} onChange={handleTeacherFilter}/>
              <label>Teacher</label>
            </th>
            <th>
              <label>Campus: </label>
              <select onChange={handleCampus}>
                <option value="All">All</option>  
                <option value="Berlin">Berlin</option>
                <option value="Paris">Paris</option>
                <option value="Lisbon">Lisbon</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>

          {results.map((user, index) => {
            return(

            <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
               <td>{user.linkedin && <img src={linkedinIcon} className="linkedinIcon"/>}</td>
            </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default App
