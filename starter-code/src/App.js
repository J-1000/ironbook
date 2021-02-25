import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';


console.log(users)

console.log(uuidv4())



class App extends React.Component {
  
   state = {
    search: '',
    teacher: false,
    student: false

   }


   handleChange = event => {
     //console.log(event.target.value)
     //console.log(event.target.name) 
    this.setState({
      search : event.target.value
    })
  }

  handleTeacherChange = event => {
    this.setState({
      teacher: event.target.checked
    })
  }

  handleStudentChange = event => {
    this.setState({
      student: event.target.checked
    })
  }


  render() {
 
    const filteredUsers = users.filter(user => {
      return `${user.lastName}${user.firstName}`.toLowerCase().includes(this.state.search.toLowerCase())
       || (this.state[user.role] === this.state.teacher)})
    
    return (
      <div> 
      <h1>IronBook</h1>
  
        <div className="container">
          <label htmlFor="search"> </label>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleTeacherChange}
          />
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleStudentChange}
          />
          <label htmlFor="student">Student</label>
    </div>

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
        {filteredUsers.map(user => {
          user.id = uuidv4()
       return (
         <tr key={user.id}>
           <td>{user.firstName}</td>
           <td>{user.lastName}</td>
           <td>{user.campus}</td>
           <td>{user.role}</td>
           <td><a href={user.linkedin}><img src={user.linkedin ? '/linkedin.png' : ''}  alt="" style={{width: '25px'}} /></a></td>
         </tr>
       )
    })}
        </tbody>

      </table>
      </div>
    );
  }
}

export default App;