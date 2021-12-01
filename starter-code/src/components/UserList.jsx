import React from 'react'
import linkedinLogo from '../linkedin.png'

const UserList = ({ users, filteredUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {users
          .filter((user) => filteredUser(user))
          .map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                {user.linkedin && (
                  <td>
                    <a href={user.linkedin}>
                      <img src={linkedinLogo} className="linkedin" alt="linkedin-logo" />
                    </a>
                  </td>
                )}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default UserList
