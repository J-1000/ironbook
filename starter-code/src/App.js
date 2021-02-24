import React from 'react';
import './App.css';
import users from "./users.json";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {


  render() {
    console.log(users)
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th><h3>First Name</h3></th>
              <th><h3>Last Name</h3></th>
              <th><h3>Campus</h3></th>
              <th><h3>Role</h3></th>
              <th><h3>Links</h3></th>
            </tr>
          {
            users.map((user)=> {
              return (
                    <tr key = {uuidv4()}>
                      <th className='table'>{user.firstName}</th>
                      <th className='table'>{user.lastName}</th>
                      <th className='table'>{user.campus}</th>
                      <th className='table'>{user.role}</th>
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