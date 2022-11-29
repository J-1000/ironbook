import linkedin from "../linkedin.png";

export const Table = ({newList}) => {



  return (
    <table className="mt-3 container col-6">
    <thead className="thead">
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
    </thead>
    <tbody>
      {newList.map((user) => (
        <tr key={user.id}>
          <td>
            <h5>{user.firstName}</h5>
          </td>
          <td>
            <h5>{user.lastName}</h5>
          </td>
          <td>
            <h5>{user.campus}</h5>
          </td>
          <td>
            <h5>{user.role}</h5>
          </td>
          <td>
            <h5>
              <a href={user.linkedin} target="_blank">
                <img src={user.linkedin && linkedin} height="25px" />
              </a>
            </h5>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
