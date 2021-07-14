import './App.css';
import linkedin from "./linkedin.png"
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import users from "./users";

class App extends Component {
	state = {
		search: '',
		students: true,
		teachers: true,
		campus: 'All'
	}

	handleChange = event => {
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({
			[name]: value
		})
	}

	render() {

		const filteredUsers = users.filter(user => 
			((this.state.students && user.role === 'student') || (this.state.teachers && user.role === 'teacher')) &&
			(user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())) &&
			(this.state.campus === 'All' || (user.campus === this.state.campus))
		)

		return (
			<>
			<div className="header">
				<h1>IronBook</h1>
			</div>
			<div className="search">
				<div>
					<input type="text" name="search" placeholder="Search..." onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="students">Students</label><input type="checkbox" name="students" onChange={this.handleChange} defaultChecked></input>
				</div>
				<div>
					<label htmlFor="students">Teachers</label><input type="checkbox" name="teachers" onChange={this.handleChange} defaultChecked></input>
				</div>
				<div>
					<label htmlFor="campus">Campus: </label>
					<select name="campus" onChange={this.handleChange}>
						<option value="All">All</option>
						<option value="Paris">Paris</option>
						<option value="Berlin">Berlin</option>
						<option value="Lisbon">Lisbon</option>
					</select>
				</div>
			</div>
			<div className="App">
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
						{filteredUsers.map(user => (
						<tr key={uuidv4()}>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.campus}</td>
							<td>{user.role}</td>
							<td>{user.linkedin? <a href={user.linkedin} target="_blank"><img src={linkedin} alt="LinkedIn" height="15px"></img></a> : ''}</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
			</>
		);
	}
}

export default App;