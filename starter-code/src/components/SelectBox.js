import React from 'react'

const SelectBox = props => {

	const handleSelectChange = event => {
		props.setSelectedProp(event.target.value)
	}

	return (
		<div>
			<select onChange={handleSelectChange} name="pets" id="pet-select">
               <option value="">--Please choose an option--</option>
               <option value="berlin">Berlin</option>
               <option value="lisbon">Lisbon</option>
               <option value="paris">Paris</option>
            </select>
		</div>
	)
}
export default SelectBox