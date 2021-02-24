import React from 'react';
import users from "./users";
import './App.css';



class App extends React.Component {
  render() {
    const list = users.map((user,index) => {
      return (
        <tr key={user.id} style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <p style={{margin: '10px', width: '20%'}}>{user.firstName}</p>
          <p style={{margin: '10px', width: '20%'}}>{user.lastName}</p>
          <p style={{margin: '10px', width: '20%'}}>{user.campus}</p>
          <p style={{margin: '10px', width: '20%'}}>{user.role}</p>
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
          <tr style={{display: 'flex', justifyContent: 'space-between', width: '800px'}}>
            <th style={{paddingLeft: '10px'}}>First Name</th>
            <th style={{paddingLeft: '50px'}}>Last Name</th>
            <th style={{paddingLeft: '90px'}}>Campus</th>
            <th style={{paddingLeft: '90px'}}>Role</th>
            <th style={{paddingLeft: '50px'}}>Links</th>
          </tr>
            {list}
        </table>
      </div>
    )
  }
}

export default App;