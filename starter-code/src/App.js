import React from 'react';
import users from "./users";
import './App.css';



class App extends React.Component {
  render() {
    const list = users.map((user,index) => {
      return (
        <tr key={user.id} style={{width: '1000px', display:'flex', alignItems: 'center'}}>
          <p style={{width: '200px'}}>{user.firstName}</p>
          <p style={{width: '200px'}}>{user.lastName}</p>
          <p style={{width: '200px'}}>{user.campus}</p>
          <p style={{width: '200px'}}>{user.role}</p>
          {user.linkedin && <a style={{width: '200px'}} href={user.linkedin}>linkedin</a>}
          {/* <button style={{width: '60px', height: '20px', margin: '20px'}}onClick={() => this.deleteHandler(index)}>Delete</button> */}
        </tr>
      )  
    })

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <h1>IronBook</h1>
        <table>
          <tr style={{tableLayout: 'fixed', display: 'flex', justifyContent: 'space-between', width: '1000px', textAlign: 'left'}}>
            <th style={{width: '200px'}}>First Name</th>
            <th style={{width: '200px'}}>Last Name</th>
            <th style={{width: '200px'}}>Campus</th>
            <th style={{width: '200px'}}>Role</th>
            <th style={{width: '200px'}}>Links</th>
          </tr>
            {list}
        </table>
      </div>
    )
  }
}

export default App;