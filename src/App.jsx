import { useState } from "react";
import "./App.css";
import Users from "./users";

import "bootstrap/dist/css/bootstrap.min.css";
import { ByCampus, ByStudents, ByTeachers, SearchByName, Table } from "./components";

function App() {
  const [users, setusers] = useState([...Users]);
  const [search, setSearch] = useState('')
  const [roleTeacher, setRoleTeacher] = useState(false);
  const [roleStudent, setRoleStudent] = useState(false);
  const [campus, setCampus] = useState("");

  let newList = users.filter((user) => {
    if (
      `${user.firstName}${user.lastName}`.toLowerCase().includes(search.toLowerCase())
    )
      return user;
  });

  function filtering(rol) {
    newList = newList.filter(user => {
      if (user.role == rol) {
        return newList
      }
    })
  }

  if (roleStudent) {
    filtering("student")
  }
  
  if (roleTeacher) {
    filtering("teacher")
  }

  if (campus) {
    newList = newList.filter(user => {
      if (user.campus == campus) {
        return newList
      }
    })
  }

  return (
    <div className="App">
      <h1>IronBook</h1>
      <form className="container">
        <div className="row">

          <SearchByName  search={search} setSearch={setSearch}/>

          <div className="d-inline-flex margin-left">
           
              <ByStudents roleStudent={roleStudent} setRoleStudent={setRoleStudent} />

              <ByTeachers roleTeacher={roleTeacher} setRoleTeacher={setRoleTeacher} />
              
              <ByCampus users={users} campus={campus} setCampus={setCampus} />
           
          </div>
        </div>
      </form>

      <Table newList={newList} />
    </div>
  );
}

export default App;