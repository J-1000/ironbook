import React from 'react';
import './App.css';
import users from "./users";


class App extends React.Component {

  state = {
    search: ''
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {

    const filteredUsers = users.filter(contact => {
      return contact.firstName.toLowerCase().includes(this.state.search.toLowerCase())
    })

    const ironhackerList = filteredUsers.map((user, index) => {
      return
      <tr key={index}> 
          <td>{users.firstName}</td>
          <td>{users.lastName}</td>
          <td>{users.campus}</td>
          <td>{users.role}</td>
          {users.linkedin ?
            <td>
              <a href={user.linkedin}>
                <img src='/linkedin.png' alt='linkedin' width='20'/>
              </a>
            </td> : <td></td>}
            </tr>
    })
   
    return (
      <>
        <h1>IronBook</h1>
        <table>
          <thead>
            <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Campus
            </th>
            <th>
              Role
            </th>
            <th>
              Links
            </th>
            </tr>
          </thead>
          <tbody>
            {ironhackerList}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;

{/* <form onSubmit={this.handleSubmit}>
<label htmlFor="search">Title: </label>
  <input
    type="text"
    name="search"
    id="search"
    value={this.state.search}
    onChange={this.handleChange}
  />
          </form> */}
