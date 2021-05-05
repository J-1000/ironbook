
import './App.css';
import users from './users.json';
import React from 'react';
import linkedinlogo from './linkedin.png'

class App extends React.Component {
  state = {
    search: '',
    isStudent: false,
    isTeacher: false,
    campus: 'all'
  }

  /* handleChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    })
  }

  handleChangeStudent = event => {
    const value = event.target.checked;
    this.setState({
      isStudent: value
    })
  }

  handleChangeTeacher = event => {
    const value = event.target.checked;
    this.setState({
      isTeacher: value
    })
  }
  handleChangeCampus = event => {
    const value = event.target.value;
    this.setState({
      campus: value
    })
  } */

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })

  }

  render() {

    const filteredUsers = users.filter(user => {
      return `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.includes(this.state.search.toLowerCase())
        && (this.state.isStudent === true ? user.role === 'student' : true)
        && (this.state.isTeacher === true ? user.role === 'teacher' : true)
        && (this.state.campus === 'all' ? true : user.campus === this.state.campus);
    })

    const userList = filteredUsers.map((user, index) => {
      return <tr key={index}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        <td>{user.linkedin &&
          <a href={user.linkedin}>
            <img style={{ width: '15px' }} src={linkedinlogo} alt="linkedin" />
          </a>
        }</td>
      </tr>
    })


    return (
      <div className="App" >
        <h1>IronBook</h1>
        <form action="">
          <div>
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <label htmlFor="isStudent">Student</label>
        <input type='checkbox'
          name='isStudent'
          id='isStudent'
          checked={this.state.isStudent}
          onChange={this.handleInputChange}
        />
        <label htmlFor="isTeacher">Teacher</label>
        <input type='checkbox'
          name='isTeacher'
          id='isTeacher'
          checked={this.state.isTeacher}
          onChange={this.handleInputChange}
        />
        <label for="campus" style={{ marginLeft: '20px', marginRight: '10px' }}>Campus:</label>
        <select name="campus" id="campus" value={this.state.campus} onChange={this.handleInputChange}>
          <option value="All">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>

        <table className='table'>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Campus</td>
              <td>Links</td>
            </tr>
            {userList}
          </thead>
        </table>

      </div>
    );
  }
}

export default App;
