import { useState } from 'react'
import './App.css'
import userData from "./users.json";
import LinkedInBadge from "./linkedin.png"

function App() {
const [users, setUsers] = useState(userData)
  return (
    <div className="App">
      <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Campus</th>
        <th>Role</th>
        <th>Link</th>
      </tr>
      <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>
            {user.linkedin ? <a href={user.linkedin} target="_blank">
              <img src={LinkedInBadge} alt="LinkedIn Badge" width="20px"/>
            </a> : null}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
  )
}

export default App;


