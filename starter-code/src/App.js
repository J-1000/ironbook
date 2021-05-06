import React from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import users from "./users";

class App extends React.Component {

  state = {
    users: users,
    search: '',
    student: false,
    teacher: false,
    campus: ''
  }

  searchUsers = event => {
    let filteredUsers = this.state.campus ? users.filter(user => user.campus === this.state.campus) : users;
    filteredUsers = this.state.student ? filteredUsers.filter(user => user.role === "student") : filteredUsers;
    filteredUsers = this.state.teacher ? filteredUsers.filter(user => user.role === "teacher") : filteredUsers;
    filteredUsers = event.target.value ? filteredUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(event.target.value.toLowerCase())) : filteredUsers;
    this.setState({
      users: filteredUsers,
      search: event.target.value
    })
  }

  filterStudents = event => {
    let filteredUsers = this.state.campus ? users.filter(user => user.campus === this.state.campus) : users;
    filteredUsers = event.target.checked ? filteredUsers.filter(user => user.role === "student") : filteredUsers;
    filteredUsers = this.state.teacher ? filteredUsers.filter(user => user.role === "teacher") : filteredUsers;
    filteredUsers = this.state.search ? filteredUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())) : filteredUsers;
    this.setState({
      users: filteredUsers,
      student: event.target.checked
    })
  }

  filterTeachers = event => {
    let filteredUsers = this.state.campus ? users.filter(user => user.campus === this.state.campus) : users;
    filteredUsers = this.state.student ? filteredUsers.filter(user => user.role === "student") : filteredUsers;
    filteredUsers = event.target.checked  ? filteredUsers.filter(user => user.role === "teacher") : filteredUsers;
    filteredUsers = this.state.search ? filteredUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())) : filteredUsers;
    this.setState({
      users: filteredUsers,
      teacher: event.target.checked
    })
  }

  filterCampus = event => {
    let filteredUsers = event.target.value ? users.filter(user => user.campus === event.target.value) : users;
    filteredUsers = this.state.student ? filteredUsers.filter(user => user.role === "student") : filteredUsers;
    filteredUsers = this.state.teacher ? filteredUsers.filter(user => user.role === "teacher") : filteredUsers;
    filteredUsers = this.state.search ? filteredUsers.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())) : filteredUsers;
    this.setState({
      users: filteredUsers,
      campus: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <h1>IronBook</h1>
        <input
          type="text"
          name="search"
          placeholder="Search by name"
          value={this.state.search}
          onChange={this.searchUsers}
        />
        <input
          type="checkbox"
          name="student"
          id="student"
          checked={this.state.student}
          onChange={this.filterStudents}
        />
        <label htmlFor="student">Student</label>
        <input
          type="checkbox"
          name="teacher"
          id="teacher"
          checked={this.state.teacher}
          onChange={this.filterTeachers}
        />
        <label htmlFor="teacher">Teacher</label>
        <label htmlFor="campus">Campus: </label>
        <select name="campus" id="campus" value={this.state.campus} onChange={this.filterCampus}>
          <option value="">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
          </select>
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
            {this.state.users.map(user => 
              <tr key={uuidv4()}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin ?
                    <a href={user.linkedin}>
                      <img src="./linkedin.png" alt="LinkedIn" height="16px"/>
                    </a> : ''
                  }
                </td>
              </tr>  
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;