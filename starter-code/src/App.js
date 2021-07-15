import React from 'react';
import './App.css';
import users from "./users";


class App extends React.Component {

  state = {
    search:'',
    teacher: false,
    student: false,
    campus: 'all'
  }

  
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    })
  }

  

  render() {

    let filteredUsers;

    filteredUsers = users.filter(user => {
      return user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())
    })

    if (this.state.student) {
      filteredUsers = filteredUsers.filter(user => {
        return user.role === 'student';
      })
    }

    if (this.state.teacher) {
      filteredUsers = filteredUsers.filter(user => {
        return user.role === 'teacher';
      })
    }

    switch (this.state.campus) {
      case 'berlin':
        filteredUsers = filteredUsers.filter(user => {
          return user.campus === 'Berlin';
        })
        break;
      
      case 'lisbon':
        filteredUsers = filteredUsers.filter(user => {
          return user.campus === 'Lisbon';
        })
        break;
      
      case 'paris':
        filteredUsers = filteredUsers.filter(user => {
          return user.campus === 'Paris';
        })
        break;

      default:
        break;
    }

    const ironhackerList = filteredUsers.map((user, index) => {
      return (
        <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            {user.linkedin ? <td>
              <a href={user.linkedin}>
                <img src='/linkedin.png' alt='linkedin' width='20'/>
              </a>
            </td> : <td></td>}
        </tr>
      )
    })

    return (
      <>
        <h1>IronBook</h1>
        <form>
          <label htmlFor="search"></label>
          <input
            type="search"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />

          <label htmlFor="student">Student:</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            value={this.state.student}
            onChange={this.handleChange}
          />

          <label htmlFor="teacher">Teacher:</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            value={this.state.teacher}
            onChange={this.handleChange}
          />

            <label htmlFor='campus'>Campus:</label>
            <select name='campus' id='campus' value={this.state.campus} onChange={this.handleChange}>
              <option value='paris'>Paris</option>
              <option value='berlin'>Berlin</option>
              <option value='lisbon'>Lisbon</option>
              <option value='all'>All</option>
            </select>
        </form>

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
            {ironhackerList}
          </tbody>
        </table>
      </>
    );
  }
}
export default App;
