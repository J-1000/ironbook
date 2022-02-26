import { useState } from 'react'
import './App.css'
import linkedinIcon from "./linkedin.png"
import usersJson from "./users";

function App() {

  let [users, setUsers] = useState(usersJson)
  let [search, setSearch] = useState('')
  let [studentFilter, setStudentFilter] = useState(false)
  let [teacherFilter, setTeacherFilter] = useState(false)
  let [campus, setCampus] = useState('All')

  const handleSearchForm = event => {
    event.preventDefault()

    let searchResults = users.filter(user => {

      if(user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()))
        return true
    })

    setUsers(searchResults)
  }

  const handleSearchChange = (event) =>{
    setSearch(event.target.value)
  }

  const handleStudentFilter = () => {
    if(studentFilter){
      
      setStudentFilter(false)
      setUsers(usersJson)
    }

    else{
      let filteredUsers = users.filter(user => {

        if(user.role === 'student')
          return true
      })
      setUsers(filteredUsers)
      setStudentFilter(true)
    }
  }

  const handleTeacherFilter = () => {
    if(teacherFilter){
      setUsers(usersJson)
      setTeacherFilter(false)
    }

    else{
      let filteredUsers = users.filter(user => {

        if(user.role === 'teacher')
          return true
      })
      setUsers(filteredUsers)
      setTeacherFilter(true)
    }
  }

  const handleCampus = (event) => {

    console.log(event.target.value)
    setCampus(event.target.campus)

    let campusFilter = event.target.value

    if(campusFilter === 'All')
      setUsers(usersJson)

    else{
      let filteredCampus = users.filter(user => {

        if(user.campus === campusFilter)
          return true
      })

      setUsers(filteredCampus)
    }
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="5"><h1>IronBook</h1></th>
          </tr>
          <tr>
            <th colSpan="5">
              <form onSubmit={handleSearchForm}>
                <input type="text" value={search} onChange={handleSearchChange} placeholder="Search by Name"/>
              </form>
            </th>          
          </tr>
          <tr>
            <th>             
              <input type="checkbox" onChange={handleStudentFilter}/>
              <label>Student</label>
            </th>
            <th>
              <input type="checkbox" onChange={handleTeacherFilter}/>
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

          {users.map((user, index) => {
            return(

            <tr key={index}>
                <td>{user.firstName}</td>
                <td>{(user.lastName)}</td>
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
