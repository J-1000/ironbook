import { useState } from 'react'
import './App.css'
import users from "./users";

let ironhackers = users
// console.log(ironhackers)

// let teacher = ironhackers.filter(ironhacker => ironhacker.role === 'teacher')
// console.log(teacher)


// create a student ID


function App() {

  const [search, setSearch] = useState('')

  const [checkStudent, setCheckedStudent] = useState(false)

  const [checkTeacher, setCheckedTeacher] = useState(false)

  const [select, setSelected] = useState('Berlin')
  console.log(`checked1`, checkStudent)

  const filterName = (e) => {
    setSearch(e.target.value)
  }

  let filtered = ironhackers.filter(ironhacker => {
    if (ironhacker.firstName.toLowerCase().includes(search.toLowerCase()) || ironhacker.lastName.toLowerCase().includes(search.toLowerCase())) 
     return ironhacker 
  })

if (checkStudent || checkTeacher){
      filtered = filtered.filter(ironhacker => {
        if (ironhacker.role === 'student' && checkStudent || ironhacker.role === 'teacher' && checkTeacher) {
          return ironhacker
        } 
      })
    }

  console.log(filtered)

  const handleCheckedStudent = (e) => {
    setCheckedStudent(!checkStudent)
    // console.log(`checked2`, checkStudent)
    // setChecked(e.target.checked)

  }

  const handleCheckedTeacher = (e) => {
    setCheckedTeacher(!checkTeacher)

  }

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

//   if (checkStudent === true){
//   filtered = filtered.filter(ironhacker => {
//     if (ironhacker.role === 'student') {
//       return ironhacker
//     }
//   })
// }

  // const teacher = ironhackers.filter(ironhacker => {
  //   if (ironhacker.role === 'teacher'){
  //   return ironhacker 
  //   }
  // })


  return (
    <div className="App">
      <h1>IronBook</h1>
      <input type="text" onChange={filterName} value={search}></input>
      
      <input type="checkbox" checked={checkStudent} onChange={handleCheckedStudent} ></input>
      <label >Student</label>

      <input type="checkbox"  checked={checkTeacher} onChange={handleCheckedTeacher} ></input>
      <label >Teacher</label>

      <select value={select} onChange={handleSelect}>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
      </select>

      <table>
        <thead>
          <tr className='head'>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Campus</td>
            <td>Role</td>
            <td>Links</td>
          </tr>
        </thead>
        <tbody  id="ironhacker">
        {filtered.map (student=> 
          <tr key={student.id}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.campus}</td>
            <td>{student.role}</td>
            <td><a href={student.linkedin}><img src="../src/linkedin.png" alt="linkedin" height={20}></img></a></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
