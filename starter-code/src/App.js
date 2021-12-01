import React, { useState } from "react"
import "./App.css"
import users from "./users"
import UserList from './components/UserList'
import SearchBox from './components/SearchBox'
import Checkbox from './components/Checkbox'
import Select from './components/Select'

function App() {
  const [allUsers] = useState(users)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState({ student: true, teacher: false })
  const [selectedCampus, setSelectedCampus] = useState('')

  const filteredUser = (user) => {
    if (!sortBy[user.role]) {
      return false
    } else if (selectedCampus && user.campus !== selectedCampus) {
      return false
    }
    return (
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase())
    )
  }

  const handleSearch = (event) => {
    const searchPerson = event.target.value
    setSearch(search => search = searchPerson)
  }

  const handleChecked = (event) => {
    const { checked, name } = event.target
    console.log(checked)
    setSortBy((sortBy) => {
      return {
        ...sortBy,
        [name]: checked,
      }
    })
  }

  return (
    <div className='app'>
      <h1>IronBook</h1>
      <div className='container'>
        <SearchBox search={search} handleSearch={handleSearch} />
      </div>
      <div className='container'>
        <Checkbox sortBy={sortBy} handleChecked={handleChecked} />
        <Select setSelectedCampus={setSelectedCampus} users={allUsers} />
      </div>

      <div className='container'>
        <UserList users={allUsers} filteredUser={filteredUser}/>
      </div>
    </div>
  )
}

export default App;

