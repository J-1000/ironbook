import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';

const usersList = users

class App extends React.Component {

  state = {
    search:'',
    student:true,
    teacher:true,
    campus:''
  }

  handleChange = event => {
    const search = event.target.name
    this.setState({
      [search]: event.target.value
    })
    console.log(this.state.campus)
  }

  handleCheckbox = event => { 
    const role = event.target.name
    this.setState({
      [role]: event.target.checked
    })
    console.log('student' + this.state.student)
    console.log('teacher' + this.state.teacher)
  }

  render() {

    const campuses = [...new Set(usersList.map(user => user.campus))].map(campus => {
      return <option value={campus}>{campus}</option>
    })
    console.log(campuses)
    

    
    const arrConc = usersList.map(user => ({...user, conc: user.firstName+user.lastName}))
    
    const filteredUsers = arrConc.filter (user => {
      return user.conc.toLowerCase().includes(this.state.search.toLowerCase())
      && this.state[user.role]
      && ((user.campus == this.state.campus) || !this.state.campus)
    })
    
    const usersH = filteredUsers

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
        <input type="checkbox" id="checkbox" name="student" checked={this.state.student} onChange={this.handleCheckbox}></input>
        <label htmlFor="radcheckboxio">Student</label>
        <input type="checkbox" id="checkbox" name="teacher" checked={this.state.teacher} onChange={this.handleCheckbox}></input>
        <label htmlFor="checkbox">Teacher</label>
        <select name="campus" value={this.state.campus} onChange={this.handleChange}>
          <option value="">All</option>
          {campuses}
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
          {usersH}
        </tbody>
        </table>
      </div>
    )
  }
}

export default App;