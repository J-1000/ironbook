import React, { useState } from 'react'
import './App.css';
import usersData from './users.json'

// console.log(usersData)
function App() {
  
  //*************USERS INITIALIZATION */
  //Setting the initialize of the user state
  const setInitialValue = () => {
    return usersData
  }

  //lets create a state
  const [users, setUsers] = useState(() => setInitialValue())
  const [search, setSearch] = useState('')
  //render some HTML with Javacript
  // console.log(users)
  //creating a list of users ready to by displayed in the HTML
  const usersList = users.filter(function(user){
    return user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)
  }).map(user => {
    return (
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        {user.linkedin && <td><a href={user.linkedin}>Linked In</a></td>}
      </tr>
    );
  })



  const handleSearchChange = event => {
    // console.log('Key pressed')
    setSearch(event.target.value)
    
  }

  return (
  <div className="App">
    <h1>IronBook</h1>
    <input type='text' value={search} onChange={handleSearchChange} style={{width: "80vw", margin: "0 30px 50px 30px"}} />
    <table id='table'>
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
         {usersList}
       </tbody>
     </table>
     
  </div>
    );
}

export default App;
