export default function Search() {
    const [search, setSearch] = useState('')
    return (
        <div>
            <h3 className="title">CONTACTS LIST</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            //a users  array passed down to List 
           {/* <List users={users}/> */}
        </div>
    )
}