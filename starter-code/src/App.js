import React, {useState} from 'react';
import './App.css';
import users from "./users";
import linkedInImg from "./linkedin.png"

function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const campusArr = [undefined, ...new Set(users.map((user) => user.campus))];

    const [campus, setCampus] = useState('');

    const filteredUsers = (users, query, isStudent, isTeacher, campus) => {

        return users.filter(user => {
            return (user.firstName.toLowerCase().includes(query.toLowerCase())
                    || user.lastName.toLowerCase().includes(query.toLowerCase()))
                && (user.campus === campus || !campus)
                && ((isStudent) && user.role === 'student' || !isStudent)
                && ((isTeacher) && user.role === 'teacher' || !isTeacher)
        });
    };

    return (
        <div className="wrapper">
            <div style={{with: "100%"}} className="search">
                <input style={{width: '40rem'}}
                       placeholder="Search..."
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}>
                </input>
                <div>
                    <label> Student
                        <input onChange={e => setIsStudent(e.target.checked)} type="checkbox"
                               checked={isStudent}></input>
                    </label>

                    <label> Teacher
                        <input onChange={e => setIsTeacher(e.target.checked)} type="checkbox"
                               checked={isTeacher}></input>
                    </label>

                    <label> campus
                        <select name="campus" onChange={e => setCampus(e.target.value)}>
                            {campusArr.map(campus =>
                                <option value={campus}>{campus}
                                </option>)
                            }
                        </select>
                    </label>
                </div>

            </div>
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Role</th>
                        <th>Links</th>
                    </tr>
                    {filteredUsers(users, searchQuery, isStudent, isTeacher, campus).map(user =>
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
        </div>
    )
        ;
}

export default App;

