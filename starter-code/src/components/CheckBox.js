import React from 'react'

const CheckBox = props => {

    const handleClickStudent = event => {
		props.setCheckedStudentProp(event.target.checked)
	}

    const handleClickTeacher = event => {
		props.setCheckedTeacherProp(event.target.checked)
	}

	return (
		<div>
			<input type="checkbox" onChange={handleClickStudent} id="student" name="student"/>
            <label for="student">Student</label>

            <input type="checkbox" onChange={handleClickTeacher} id="teacher" name="teacher"/>
            <label for="teacher">Teacher</label>
		</div>
	)
}
export default CheckBox