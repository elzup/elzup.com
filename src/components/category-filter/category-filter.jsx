import React from "react"
const Type = React.PropTypes
import FilterButton from "../filter-button/filter-button.jsx"

const CategoryFilter = props => {
	const btns = props.categories.map(x => (
		<FilterButton
			key={x}
			type={x}
			label={x}
			toggle={props.select == x}
			onFilterToggle={props.onFilterToggle}
		/>
	))
	return (
		<div>
			<p>Category Select</p>
			<div>
				{btns}
			</div>
		</div>
	)
}

CategoryFilter.propType = {
	categories: Type.arrayOf(Type.string).isRequired,
	select: Type.number.isRequired,
	onFilterToggle: Type.func.isRequired,
}

export default CategoryFilter
