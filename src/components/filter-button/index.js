import React from "react"
const Type = React.PropTypes

const FilterButton = props => {
	const style = require("./filter-button.css")
	return (
		<input
			className={style.btn}
			type="button"
			data-toggle={props.toggle}
			onClick={() => {
				props.onFilterToggle(props.type)
			}}
			value={props.label}
		/>
	)
}

FilterButton.propType = {
	type: Type.string.isRequired,
	label: Type.string.isRequired,
	onFilterToggle: Type.func.isRequired,
	toggle: Type.bool.isRequired,
}

export default FilterButton
