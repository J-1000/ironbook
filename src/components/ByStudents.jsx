export const ByStudents = ({roleStudent, setRoleStudent}) => {

  return (
    <>
        <label htmlFor="" className="p-2">Student </label>
        <input
            type="checkbox"
            checked={roleStudent}
            onChange={e => setRoleStudent(e.target.checked)}
        />
    </>
  )
}
