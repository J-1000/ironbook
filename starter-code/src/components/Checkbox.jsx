import React from 'react'

const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <div>
        <input type="checkbox" id="student-checkbox"/>
        <label htmlFor="student-checkbox">Student</label>
      </div>
      <div>
        <input type="checkbox" id="teacher-checkbox"/>
        <label htmlFor="teacher-checkbox">Teacher</label>
      </div>
    </div>
  )
}

export default Checkbox
