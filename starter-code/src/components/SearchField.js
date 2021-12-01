import React from 'react'

const SearchField = props => {

	const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
		<div>
			<input type="text" onChange={handleInputChange} />
		</div>
	)
}
export default SearchField