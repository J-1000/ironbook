export default function List({users}) {
    return (
    
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
            {users.map(per =>
              <tr key={per.id}>
                <td>{per.firstName}</td>
                <td>{per.lastName}</td>
                <td>{per.campus}</td>
                <td>{per.role}</td>
                <td ><a href= {per.linkedin}> {per.linkedin? 'linkedinIcon':''}
                </a></td>
              </tr>
            )}

          </tbody>
         
        </table>
        
    )
}