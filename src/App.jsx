import { useState } from "react";
import "./App.css";
import Users from "./users";
import linkedin from "./linkedin.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setusers] = useState([...Users]);
  const [search, setSearch] = useState('')
  const [roleTeacher, setroleTeacher] = useState(false);
  const [roleStudent, setroleStudent] = useState(false);
  const [country, setcountry] = useState("Berlin");


  let newList = users.filter((student) => {
    if (
      student.firstName.toLowerCase().includes(search.toLowerCase()) ||
      student.lastName.toLowerCase().includes(search.toLowerCase())
    )
      return student;
  });

  if (roleStudent) {
    newList = newList.filter(user => {
      if (user.role == "student" && roleStudent) {
        return newList
      }
    })
  }
  
  if (roleTeacher) {
    newList = newList.filter(user => {
      if (user.role == "teacher" && roleTeacher) {
        return newList
      }
    })
  }

  function countries () {
    let countriesUniques = [...new Set(users.map(each => each["campus"]))]
    let campus = countriesUniques.map(campus => (
              `<option value=${campus}>${campus}</option` ))
    console.log(campus.join())
    return campus.join()
  }

  const handleNamesChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEstudentChange = (event) => {
    setroleStudent(event.target.checked);
  };

  const handleTeacherChange = (event) => {
    setroleTeacher(event.target.checked);
  };

  const handleSelectCountry = (event) => {
    console.log(country)
    setcountry(event.target.checked);
  };

  return (
    <div className="App">
      <h1>IronBook</h1>
      <form className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              value={search}
              onChange={handleNamesChange}
              placeholder="Search by name"
            />
          </div>
          <div className="d-inline-flex margin-left">
           
              <label htmlFor="" className="p-2">Student </label>
              <input
                type="checkbox"
                checked={roleStudent}
                onChange={handleEstudentChange}
              />
              <label htmlFor="" className="p-2">Teacher </label>
              <input
                type="checkbox"
                checked={roleTeacher}
                onChange={handleTeacherChange}
              />
              <p className="mx-2 pt-2">Campus:</p>
              <select className=" text-white bg-primary m-2" value={country} onChange={handleSelectCountry}>
                {/* <option value="-">-</option>
                <option value="Berlin">Berlin</option>
                <option value="Lisbon">Lisbon</option>
                <option value="Paris">Paris</option> */}
                {countries()}
              </select> 
           
          </div>
        </div>
      </form>

      <table className="mt-3 container col-6">
        <thead className="thead">
          <tr>
            <th>
              <h3>First Name</h3>
            </th>
            <th>
              <h3>Last Name</h3>
            </th>
            <th>
              <h3>Campus</h3>
            </th>
            <th>
              <h3>Role</h3>
            </th>
            <th>
              <h3>Links</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {newList.map((user) => (
            <tr key={user.id}>
              <td>
                <h5>{user.firstName}</h5>
              </td>
              <td>
                <h5>{user.lastName}</h5>
              </td>
              <td>
                <h5>{user.campus}</h5>
              </td>
              <td>
                <h5>{user.role}</h5>
              </td>
              <td>
                <h5>
                  <a href={user.linkedin} target="_blank">
                    <img src={user.linkedin && linkedin} height="25px" />
                  </a>
                </h5>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;