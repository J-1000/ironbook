import React, { useState } from 'react'
import './App.css'
import users from './users'
import linkedinLogo from './linkedin.png'
import SearchBox from './components/SearchBox'
import Checkbox from './components/Checkbox'
import Select from './components/Select'

const App = () => {
  const [search, setSearch] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const [selectedCampus, setSelectedCampus] = useState('')
  const [showAllUsers, setShowAllUsers] = useState(true)
  const [sortBy, setSortBy] = useState('')

  const showUsers = showAllUsers ? users : filteredUsers

  const handleSearch = (event) => {
    let searchPerson = event.target.value
    let filteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchPerson.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchPerson.toLowerCase())
      )
    })
    setSearch(searchPerson)

    if (searchPerson === '') {
      setShowAllUsers((users) => (users = showUsers))
    } else {
      setFilteredUsers((filtered) => (filtered = filteredUsers))
      setShowAllUsers((users) => (users = !showAllUsers))
    }
  }

  const handleSelectedCampus = (event) => {
    let selectedCampus = event.target.value
  }

  return (
    <div className='container'>
      <div className=''>
        <SearchBox search={search} handleSearch={handleSearch} />
        <Checkbox />
        <Select />
      </div>
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
          {showUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                <a href={`/${user.linkedin}`}>
                  {' '}
                  <img
                    src={linkedinLogo}
                    alt='linkedin-logo'
                    className='linkedin'
                  />{' '}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
