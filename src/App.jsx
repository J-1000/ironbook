import { useState } from 'react'
import './App.css'
import usersData from "./users.json";


function App() {

  //Iteration 1
  const [users, setUsers] = useState(usersData)

  //Iteration 2
  const [input, setInput] = useState('')
  const handleChangeFilter = event => {
    setInput(event.target.value)
  }

  //Iteration 3
  const [isStudent, setIsStudent] = useState(false)
  const handleIsStudent = event => {
    setIsStudent(event.target.checked)
  }




  return (
    <div className="App">
      <h1>IronBook</h1>

      <form>
        <input type="text" value={input} onChange={handleChangeFilter} />
      </form>



      <table key={users.id}>
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


          {users.filter((user) => {

            if (input === '') {
              return user
            } else {
              return user.firstName.toLowerCase().includes(input) || user.lastName.toLowerCase().includes(input)
            }

          }).map(function (user) {
            return (

              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
              </tr>
            )
          })}

        </tbody>
      </table>

    </div>
  )
}

export default App

