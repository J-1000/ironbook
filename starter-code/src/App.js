import React, { useState } from 'react';
import users from "./users";
import './App.css';

function App() {
  const [ourUser] = useState(users);
  const [search, setSearch] = useState('')
  const [city, setcity] = useState('Berlin'); 
  const [ checkedteacher, setcheckedteacher] = useState('teacher');
    const [checkedStudent, setcheckedStudent] = useState('student');

   const handleSelect = e => {
    setcity(e.target.value);
    console.log('selected', e.target.value,city);
  };
  const handleChangeTeacher = () => {
    setcheckedteacher(checkedteacher==="teacher"? "  ":"teacher")
    console.log('selectedC',checkedteacher);

  };

  const handleChangeStudent = () => {
    setcheckedStudent(checkedStudent==="student"? "  ":"student")
    console.log('selectedCt',checkedStudent);
  };
  const filteredUser = ourUser.filter(user => search.length === 0 ? true :(user.campus===city)&&(user.role===checkedteacher  ||user.role===checkedStudent ) && (user.firstName + ' ' + user.lastName).toLowerCase().includes(search.toLowerCase()))
  // <List users={users}/> 
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    <div>
    <select value={city} onChange={handleSelect}>
        <option value="Berlin">berlin</option>
        <option value="Paris">paris</option>
        <option value="Lisbon">lisbon</option>
      </select>
      <div>
      Teacher <input type="checkbox"
        value={checkedteacher}
        onChange={handleChangeTeacher}
      />
      
     Student <input type="checkbox"
        value={checkedStudent}
        onChange={handleChangeStudent}
      />
    </div>
    </div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {filteredUser.map(per =>
            <tr key={per.id}>
              <td>{per.firstName}</td>
              <td>{per.lastName}</td>
              <td>{per.campus}</td>
              <td>{per.role}</td>
              <td ><a href={per.linkedin}> {per.linkedin ? <img style={{width:10}} src="/linkedin.png" alt="linkedinAdress"/> : ''}
              </a></td>
            </tr>
          )}

        </tbody>

      </table>


    </div>
  );
}


export default App;
