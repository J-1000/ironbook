export const ByTeachers = ({setRoleTeacher, roleTeacher}) => {

  return (
    <>
        <label htmlFor="" className="p-2">Teacher </label>
        <input
            type="checkbox"
            checked={roleTeacher}
            onChange={e => setRoleTeacher(e.target.checked)}
        />
    </>
  )
}
