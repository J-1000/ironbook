import React from "react";
import "./App.css";
import users from "./users";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    displayedUsers: users,
    query: "",
  };

  searchHandler(event) {
    let query = event.target.value.toLowerCase();
    this.setState({query: query});
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

  render() {
    const usersRender = this.state.displayedUsers.map((user) => {
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
            onChange={(event) => this.searchHandler(event)}
          />
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

{
  /* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */
}
