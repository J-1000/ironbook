import React from "react";
import "./App.css";
import users from "./users";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    query: "",
    student: true,
    teacher: true
  };

  filterUsers(query) {
    return users.filter(
      (user) => {
        if (query === "") return this.state[user.role];
        let fullName = user.firstName + " " + user.lastName;
        return this.state[user.role] && fullName.toLowerCase().includes(query);
      }
    );
  }

  inputHandler(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value.toLowerCase();
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const usersRender = this.filterUsers(this.state.query).map((user) => {
      const id = uuidv4();
      return (
        <tr key={id}>
          <th>{user.firstName}</th>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>
            {user.linkedin && (
              <a href={user.linkedin}>
                <i className="fab fa-linkedin fa-lg text-primary"></i>
              </a>
            )}
          </td>
        </tr>
      );
    });

    return (
      <div className="container d-flex flex-column justify-content-center">
        <h1>IronBook</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="query">
            Name Search
          </span>
          <input
            type="text"
            name="query"
            className="form-control"
            aria-label="query"
            aria-describedby="basic-addon1"
            value={this.state.query}
            onChange={(event) => this.inputHandler(event)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="form-check m-2">
            <label className="form-check-label" htmlFor="studentCheck">
              Student
            </label>
            <input className="form-check-input" name="student" checked={this.state.student} type="checkbox" id="studentCheck" onChange={event => this.inputHandler(event)}/>
          </div>
          <div className="form-check m-2">
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Teacher
            </label>
            <input className="form-check-input" name="teacher" checked={this.state.teacher} type="checkbox" id="flexCheckChecked" onChange={event => this.inputHandler(event)}/>
          </div>
        </div>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>{usersRender}</tbody>
        </table>
      </div>
    );
  }
}

export default App;