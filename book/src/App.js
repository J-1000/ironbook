import './App.css';
import users from './users.json';
import React from 'react';
import linkedInlogo from './LinkedIn-Logo.png';


class App extends React.Component {

  state= {
    nameSearch: '',
    students: true,
    teachers: true,
    campus: 'All'
  }


  updateFilters = event => {
    const changedFilter = event.target.name;
    const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
      [changedFilter]: newValue
    })
  }

  render() {
    
    const filteredPeople =  
      users.filter(person => 
        ((this.state.students && person.role === 'student') || (this.state.teachers && person.role === 'teacher')) 
          && (person.firstName.toLowerCase().includes(this.state.nameSearch) || person.lastName.toLowerCase().includes(this.state.nameSearch.toLowerCase())) 
          && (person.campus === this.state.campus || this.state.campus === 'All')
      )

    
    
   
    const mappedPeople = filteredPeople.map(person => (
      <tr>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.campus}</td>
        <td>{person.role}</td>
        {person.linkedin && <td><a href={person.linkedin}><img style={{width: '20px'}} src={linkedInlogo} alt="linkedIn logo link"/></a></td>}
      </tr>

    )) 

    return (
      <div className="App">
      <h1>IronBook</h1>
      <input name="nameSearch" onChange={this.updateFilters} value={this.state.search} />
      <label htmlFor="students" >Students</label>
      <input name="students" id="students" type="checkbox" onChange={this.updateFilters} defaultChecked/>
      <label htmlFor="teachers" >Teachers</label>
      <input name="teachers" id="teachers" type="checkbox" onChange={this.updateFilters} defaultChecked />
      <select type="select" name="campus" onChange={this.updateFilters}>
        <option name="All">All</option>
        <option name="Paris">Paris</option>
        <option name="Berlin">Berlin</option>
        <option name="Lisbon">Lisbon</option>
      </select>

      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        <tbody>
          {mappedPeople}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
