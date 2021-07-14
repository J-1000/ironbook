import './App.css';
import linkedin from "./linkedin.png"
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import usersData from "./users";

function App() {
	const [users, setUsers] = useState(usersData);

	return (
		<>
		<div className="Header">
			<h1>IronBook</h1>
		</div>
		<div className="App">
			<table>
				<thead>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Campus</th>
					<th>Role</th>
					<th>Links</th>
				</thead>
				<tbody>
					{users.map(user => (
					// <tr key={contact.id}>
					<tr>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>{user.campus}</td>
						<td>{user.role}</td>
						<td>{user.linkedin? <a href={user.linkedin}><img src={linkedin} alt="LinkedIn" height="15px"></img></a> : ''}</td>
						{/* <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td> */}
					</tr>
					))}
				</tbody>
			</table>
		</div>
		</>
	);
}

export default App;
