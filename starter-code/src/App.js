import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';


console.log(users)

console.log(uuidv4())



class App extends React.Component {
  
   state = {
    search: ''

   }


   handleChange = event => {
     //console.log(event.target.value)
     //console.log(event.target.name)
     const filteredUsers = users.filter(user => {
      `${user.firstName}${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())

    })
    this.setState({
      search : event.target.value
    })
  }


  render() {
    //console.log(users)
  
    
     const usersList = users.map(user => {
          user.id = uuidv4()
       return (
         <tr key={user.id}>
           <td>{user.firstName}</td>
           <td>{user.lastName}</td>
           <td>{user.campus}</td>
           <td>{user.role}</td>
           <td><a href={user.linkedin}><img src={user.linkedin ? '/linkedin.png' : ''}  alt="" style={{width: '25px'}} /></a></td>
         </tr>
       )
    })

    // const filteredUsers = usersList.filter(user => {
    //   `${user.firstName}${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())

    // })

  
    
    return (
      <div> 
      <h1>IronBook</h1>

          <label htmlFor="search"> </label>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
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
          {usersList}
        </tbody>

      </table>
      </div>
    );
  }
}

export default App;