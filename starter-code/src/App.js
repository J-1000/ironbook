import React from 'react';
import './App.css';
import users from "./users";

class App extends React.Component {


  render() {
    console.log(users[0].firstName)
    return(
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
            {users.map((user, index) => {
              return (

            <tr key={index}>
              <td>{ user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
                <td><a href={user.linkedin} target='blank'><img src={user.linkedin ? '/linkedin-logo.png' : ''} style={ {width: '20px'}}/></a></td>
              </tr>

              )
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;