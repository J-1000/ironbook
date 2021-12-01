import React from 'react';

const IronBook = props => {

const list = props.user
.filter(user => user.firstName.toLowerCase().includes(props.queryProp.toLowerCase()) || user.lastName.toLowerCase().includes(props.queryProp.toLowerCase()))
.map( user => {

    return (
        <tr >
          <td>
            {user.firstName}
          </td>

          <td>
            {user.lastName}
          </td> 

          <td>
            {user.campus}
          </td>

          <td>
            {user.role}
          </td>

          <td>
            {user.linkedin && 'yes'}
          </td>

        </tr>
    )
    

})

return (
    <>
    {list}
    </>

)
};

export default IronBook