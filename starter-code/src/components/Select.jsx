import React from 'react'

const Select = ({ setSelectedCampus, users }) => {
  const options = [...new Set(users.map((user) => user.campus))]
  return (
    <select
      name='selectedCampus'
      id='selectedCampus'
      onChange={(e) => setSelectedCampus(e.target.value)}
    >
      <option>Campus</option>
      {options.map((campus) => {
        return (
          <option key={campus} value={campus}>
            {campus}
          </option>
        )
      })}
    </select>
  )
}

export default Select
