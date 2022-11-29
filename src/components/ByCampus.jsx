export const ByCampus = ({users, setCampus, campus}) => {
  
    const options = [...new Set(users.map(user => user.campus))].map(campus => {
        return <option value={campus} key={campus}>{campus}</option>
      });
    
  return (
    <>
      <p className="mx-2 pt-2">Campus:</p>
      <select className=" text-white bg-primary m-2" value={campus} onChange={e => setCampus(e.target.value)}>
      <option value="">All</option>
      {options}
      
      </select> 
    </>
  )
}
