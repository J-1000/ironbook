import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuidv4 } from 'uuid';


console.log(users)

console.log(uuidv4())



class App extends React.Component {
  
   state = {
    search: '',
    teacher: true,
    student: true,
    campus: ''
   }


   handleChange = event => {
     //console.log(event.target.value)
     //console.log(event.target.name) 
    this.setState({
      search : event.target.value
    })
  }

  // handleTeacherChange = event => {
  //   this.setState({
  //    teacher: event.target.checked
  //   })
  // }

  // handleStudentChange = event => {
  //   this.setState({
  //     student: event.target.checked
  //   })
  // }

  handleCheckBoxChange = event => {
    console.log(event.target.name)
    const name = event.target.name
    this.setState({
      [name] : event.target.checked
    })
  }

  handleCampusChange = event => {
    console.log(event.target.name)
    this.setState({
      campus : event.target.value
    })

  }


  render() {
    let campus = [...new Set(users.map(user => user.campus))]
    console.log(campus)
    let options = campus.map(city => {
      return <option key={city}>{city}</option>
    })

    console.log(campus)
    const filteredUsers = users.filter(user => {
      console.log(!this.state.campus)
      return this.state[user.role] 
      && `${user.lastName}${user.firstName}`.toLowerCase().includes(this.state.search.toLowerCase())
      && ((user.campus === this.state.campus) || !this.state.campus)
      
    })
    
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
            onChange={this.handleCheckBoxChange}
          />
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleCheckBoxChange}
          />
          <label htmlFor="student">Student</label>
          <label htmlFor="campus">Campus:</label>
            <select name="campus" 
            id="campus" 
            value={this.state.campus} 
            onChange={this.handleCampusChange}>
            {/* I need to leave the value empty to be able to execute the filtering condition  */}
            <option value="">All</option>
            {options}
  </select>
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