import './App.css';
import React, { useState } from 'react';
import  users  from "./users.json";
import IronBook from "./components/IronBook"
import SearchField from './components/SearchField';
import CheckBox from './components/CheckBox'
import SelectBox from './components/SelectBox';;


// console.log(users)



function App() {

  
  const [query, setQuery] = useState('');

  const [checkedStudent, setCheckedStudent] = useState(false);

  const [checkedTeacher, setCheckedTeacher] = useState(false);

  const [selected, setSelected] = useState('');

    
    
    return (
      <>
      <h1>Ironbook</h1>

      <SearchField setQueryProp={setQuery} />

      <CheckBox setCheckedTeacherProp={setCheckedTeacher} setCheckedStudentProp={setCheckedStudent}/>

      <SelectBox setSelectedProp={setSelected}  />

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

        <IronBook user={users} queryProp={query} checkedTeacherProp={checkedTeacher}  checkedStudentProp={checkedStudent} selectedProp={selected}/>

      </>
    );
  }


export default App;
