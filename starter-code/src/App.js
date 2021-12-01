import React from 'react';
import './App.css';
import users from "./users";
import linkedInImg from "./linkedin.png"

class App extends React.Component {


    render() {
        return (
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Role</th>
                        <th>Links</th>
                    </tr>
                    {users.map(user =>
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td> {user.campus}</td>
                            <td> {user.role}</td>
                            <a href={user.linkedin}>
                                <img style={{height: '1rem'}} src={user.linkedin && linkedInImg}/>
                            </a>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default App;
