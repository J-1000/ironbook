import linkinimg from './linkedin.png';
import React from 'react';
import './App.css';
import users from './users';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', campus: '', teacher: false, student: false };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    let baseUsers = this.state.search
      ? users.filter((user) =>
          user.firstName
            .concat(user.lastName)
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        )
      : users;
    if (this.state.teacher && this.state.student) {
      // ignore since both is the same as none
    } else if (this.state.teacher) {
      baseUsers = baseUsers.filter((user) => user.role === 'teacher');
    } else if (this.state.student) {
      baseUsers = baseUsers.filter((user) => user.role === 'student');
    }

    if (this.state.campus) {
      baseUsers = baseUsers.filter((user) => user.campus === this.state.campus);
    }

    const usersTable = baseUsers.map((user, idx) => (
      <tr key={'tr_' + idx}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        <td>
          {user.linkedin && (
            <a target="_blank" rel="noreferrer" href={user.linkedin}>
              <img
                src={linkinimg}
                alt={'LinkedIn ' + user.firstName + ' ' + user.lastName}
              />
            </a>
          )}
        </td>
      </tr>
    ));

    const countriesOptions = [...new Set(users.map((user) => user.campus))].map(
      (country) => (
        <option key={country} value={country}>
          {country}
        </option>
      )
    );

    return (
      <div className="App">
        <h1>IronBook</h1>
        <div className="simuForm">
          <input
            type="text"
            placeholder="enter search"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
          />

          <br />
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleChange}
          />
          <label htmlFor="teacher">Teacher</label>

          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleChange}
          />
          <label htmlFor="student">Student</label>

          <label htmlFor="campus" className="ident">
            Student
          </label>
          <select
            id="campus"
            name="campus"
            onChange={this.handleChange}
            value={this.state.campus}
          >
            <option value="">---</option>
            {countriesOptions}
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus </th>
              <th>Role </th>
              <th>Links </th>
            </tr>
          </thead>
          <tbody>{usersTable}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
