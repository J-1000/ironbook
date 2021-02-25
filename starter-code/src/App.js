import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';

const usersList = users

class App extends React.Component {

  state = {
    search:'',
    searchStudent:true,
    searchTeacher:ture,
    searchCountry:''
  }

  handleChange = event => {
    const search = event.target.name
    this.setState({
      [search]: event.target.value
    })

  }

  handleCheckbox = event => { 
    this.setState({

      searchStudent: event.target.checked
    })
  }

  render() {

    const option = [...]

    const arrConc = usersList.map(user => ({...user, conc: user.firstName+user.lastName}))
    console.log(this.state.searchStudent)
    this.state.searchStudent ? let searchParam ="student"
    const usersH = arrConc
      .filter((filteredUser) => filteredUser.conc.includes(this.state.search))
      
      .map((user => {
      return(
        <tr key={uuidv4()}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        {user.linkedin ? <td><a href={user.linkedin}>Linkedin</a></td> : <td></td>}
        </tr>
      )
    }))


    return (
      <div>
        <h1>IronBook</h1>
        <input 
        type="text" 
        placeholder="Search.."
        name="search"
        id="search"
        value={this.state.search}
        onChange={this.handleChange}
        ></input>
        <input type="checkbox" id="checkbox" name="student" checked={this.state.searchStudent} onChange={this.handleCheckbox}></input>
        <label htmlFor="radcheckboxio">Student</label>
        <input type="checkbox" id="checkbox" name="teacher"></input>
        <label htmlFor="checkbox">Teacher</label>
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
          {usersH}
        </tbody>
        </table>
      </div>
    )
  }
}

export default App;