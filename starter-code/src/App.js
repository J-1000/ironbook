import React from "react";
import "./App.css";
import users from "./users.json";
import { userRender } from "./components/user";
class App extends React.Component {
  state = {
    displayedUsers: users,
    query: "",
  };

  searchHandler(event) {
    const query = event.target.value.toLowerCase();
    this.setState({ query: query });
    let displayedUsersCopy = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query)
    );
    if (this.state.query === "") {
      displayedUsersCopy = users;
    }
    this.setState(() => ({
      displayedUsers: displayedUsersCopy,
    }));
  }

  searchBoxHandler1(event) {
    console.log(event.target.checked);
    let displayedUsersCopy = users;
    if (event.target.checked) {
      displayedUsersCopy = users.filter((user) =>
        user.role.toLowerCase().includes("teacher")
      );
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    } else {
      displayedUsersCopy = users;
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    }
  }

  searchBoxHandler2(event) {
    console.log(event.target.checked);
    let displayedUsersCopy = users;
    if (event.target.checked) {
      displayedUsersCopy = users.filter((user) =>
        user.role.toLowerCase().includes("student")
      );
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    } 
    else {
      displayedUsersCopy = users;
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    }
  }

  searchSelectHandler(event) {
    console.log(event.target.value);
    let displayedUsersCopy = users;
    if (event.target.value !== "") {
      displayedUsersCopy = users.filter((user) =>
        user.campus.toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    } 
    else {
      displayedUsersCopy = users;
      this.setState(() => ({
        displayedUsers: displayedUsersCopy,
      }));
    }
  }

  render() {
    const usersRender = this.state.displayedUsers.map((ele) => {
      return userRender(ele);
    });

    return (
      <div>
        <span id="query">Name Search</span>
        <input
          type="text"
          name="query"
          className="form-control"
          aria-label="query"
          aria-describedby="basic-addon1"
          value={this.state.query}
          onChange={(event) => this.searchHandler(event)}
        />
        <input
          type="checkbox"
          id="teacher"
          name="teacher"
          value="teacher"
          onChange={(event) => this.searchBoxHandler1(event)}
        />
        <label>teacher</label>
        <input
          type="checkbox"
          id="student"
          name="student"
          value="student"
          onChange={(event) => this.searchBoxHandler2(event)}
        />
        <label>student</label>
        <label for="cars">Choose a car:</label>
        <select id="country" name="country" onChange={(event) => this.searchSelectHandler(event)}>
          <option value="Paris">Paris</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
        </select>
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
        <div>{usersRender}</div>
      </div>
    );
  }
}

export default App;
