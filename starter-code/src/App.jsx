import React from "react";
import { useState } from "react";
import "./App.css";
import userData from "./users";
import linkedinImg from "./linkedin.png";

function App() {
  const [users] = useState(userData);
  const [search, setSearch] = useState("");
  const [filterStudent, setFilterStudent] = useState(false);
  const [filterTeacher, setFilterTeacher] = useState(false);
  const [filterCampus, setFilterCampus] = useState("");

  const campus = [...new Set(users.map((u) => u.campus))];

  const filterUser = (u) => {
    if (filterStudent && u.role !== "student") return false;
    if (filterTeacher && u.role !== "teacher") return false;
    if (filterCampus && u.campus !== filterCampus) return false;

    return (
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="app">
      <h1>IronBook</h1>
      <div className="container">
        <input
          style={{ width: "50%" }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        <input
          type="checkbox"
          checked={filterStudent}
          onChange={() => setFilterStudent((f) => !f)}
          id="student"
        />
        <label htmlFor="student">Student</label>
        <input
          type="checkbox"
          checked={filterTeacher}
          onChange={() => setFilterTeacher((f) => !f)}
          id="teacher"
        />
        <label htmlFor="teacher">Teacher</label>
        <label htmlFor="campus">Campus:</label>
        <select
          name="campus"
          id="campus"
          onChange={(e) => setFilterCampus(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          {campus.map((c, idx) => {
            return (
              <option key={idx} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </div>

      <div className="container">
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
            {users
              .filter((u) => filterUser(u))
              .map((u, idx) => {
                return (
                  <tr key={idx}>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.campus}</td>
                    <td>{u.role}</td>
                    {u.linkedin && (
                      <td>
                        <a href={u.linkedin}>
                          <img src={linkedinImg} className="linkedin" alt="" />
                        </a>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
