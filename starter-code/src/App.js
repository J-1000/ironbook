import React from "react";
import "./App.css";
import users from "./users";

class App extends React.Component {
  state = {
    search: "",
    student: true,
    teacher: true,
    campus: "",
  };

  inputChangeHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //console.log(value);
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const campusOptions = [...new Set(users.map((user) => user.campus))];
    const campusList = campusOptions.map((campus) => {
      return (
        <option value={campus} key={campus}>
          {campus}
        </option>
      );
    });
    //console.log(campusList)

    const filteredUsers = users.filter((user) => {
      return (
        this.state[user.role] &&
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) &&
        (user.campus === this.state.campus || this.state.campus === "")
      );
    });

    const userList = filteredUsers.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>
            <a href={user.linkedin} target="blank">
              <img
                src={user.linkedin ? "/linkedin-logo.png" : ""}
                alt={user.linkedin ? "linkedin-logo" : ""}
                style={{ width: "20px" }}
              />
            </a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1>IronBook</h1>

        <input
          type="text"
          name="search"
          placeholder="seach by name"
          value={this.state.search}
          onChange={this.inputChangeHandler}
        />

        <label htmlFor="student">Student</label>
        <input
          type="checkbox"
          name="student"
          checked={this.state.student}
          onChange={this.inputChangeHandler}
        />

        <label htmlFor="teacher">Teacher</label>
        <input
          type="checkbox"
          name="teacher"
          checked={this.state.teacher}
          onChange={this.inputChangeHandler}
        />

        <label htmlFor="campus">Campus</label>
        <select
          name="campus"
          value={this.state.campus}
          onChange={this.inputChangeHandler}
        >
          <option value="">All</option>
          {campusList}
        </select>

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
          <tbody>{userList}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
