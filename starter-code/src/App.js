import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';


console.log(users)

console.log(uuidv4())

const linkedinPicture = './linkedin.png'


class App extends React.Component {

  

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
           <td><a href={user.linkedin}><img src={user.linkedin ? linkedinPicture : user.linkedin} /></a></td>
         </tr>
       )
    })
    return (
      <div> 
      <h1>IronBook</h1>
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