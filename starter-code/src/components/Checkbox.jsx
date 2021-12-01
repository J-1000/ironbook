import React from 'react'

const Checkbox = ({ sortBy, handleChecked }) => {
  return (
    <>
      <input
        type='checkbox'
        name='student'
        onChange={handleChecked}
        checked={sortBy.student}
        id='student'
      />
      <label htmlFor='student'>Student</label>
      <input
        type='checkbox'
        name='teacher'
        checked={sortBy.teacher}
        onChange={handleChecked}
        id='teacher'
      />
      <label htmlFor='teacher'>Teacher</label>
    </>
  )
}

export default Checkbox
