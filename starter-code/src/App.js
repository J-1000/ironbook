import './App.css';
import  users  from "./users.json";
import IronBook from "./components/IronBook"
import SearchField from './components/SearchField';
import CheckBox from './components/CheckBox';
import React, { useState } from 'react';

// console.log(users)



function App() {

  
  const [query, setQuery] = useState('')
  const [checkedStudent, setCheckedStudent] = useState(false)

  const [checkedTeacher, setCheckedTeacher] = useState(false)
    
    
    return (
      <>
      <h1>Ironbook</h1>

      <SearchField setQueryProp={setQuery} />

      <CheckBox setCheckedTeacherProp={setCheckedTeacher} setCheckedStudentProp={setCheckedStudent}/>

      <tr className='thead'>
          <td>
            Firstname:
          </td>

          <td>
            Lastname:
          </td> 

          <td>
            Campus:
          </td>

          <td>
            Role:
          </td>

          <td>
            LinkedIn:
          </td>

        </tr>

        <IronBook user={users} queryProp={query} checkedTeacherProp={checkedTeacher}  checkedStudentProp={checkedStudent}/>

      </>
    );
  }


export default App;
