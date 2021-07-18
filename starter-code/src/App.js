import React from 'react';
import './App.css';
import users from "./users";


class App extends React.Component {

  state = {
    query: ''
  };

  // onchange is where we should change state
  // handleinput is arrow function that takes as input e

  handleInput = e => {
    const userInput = e.target.value;
    //console.log(userInput)
    this.setState({
      query: userInput
    });
  }

  render() {
    // if userquery matches student name then display filtered array
    // we return the entire object only if it matches query
    // filtered loops on array of users and each element represents a user.
    // If the user firstname/lastname includes query, then add it to filteredStudents Array. Else, we ignore it and not add it.
    // we are changing both query and returnedArray to lowercase
    const stateLowerCase = this.state.query.toLowerCase();
    let filteredStudents = users.filter(element => {
      return element.firstName.toLowerCase().includes(stateLowerCase)|| element.lastName.toLowerCase().includes(stateLowerCase)
    })

    const renderedStudents = filteredStudents.map((aStudent, index) => {
    // this is the return statement of the method MAP. It gives me a new array called renderedStudents.
    // renderedStudents = all of following tr elements/student
        return (
          
              <tr>
                <td>{aStudent.firstName}</td>
                <td>{aStudent.lastName}</td>
                <td>{aStudent.campus}</td>
                <td>{aStudent.role}</td>
              </tr>

        )
    })

    return (
    
    <div>
        <>
              <h1>ironBOOK</h1>
              <div class ="filters">
                  <input type="text" name="search" value={this.state.query} onChange={this.handleInput}/>
              </div>

            <table>
            <thead>
                  <tr>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>campus</td>
                    <td>role</td>
                    <td>links</td>
                  </tr>
              </thead>
              <tbody>
                  {renderedStudents}
              </tbody>
              </table>
        </>
    </div>
    );
  }
}


export default App;
