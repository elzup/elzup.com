import React from "react"
const Type = React.PropTypes
import FilterButton from "../filter-button/filter-button.jsx"

const RankFilter = props => (
	<div>
		<p>Quality Select</p>
		<div>
			<FilterButton
				type={0}
				label="ALL"
				toggle={props.select == 0}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={1}
				label="★"
				toggle={props.select == 1}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={2}
				label="★★"
				toggle={props.select == 2}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={3}
				label="★★★"
				toggle={props.select == 3}
				onFilterToggle={props.onFilterToggle}
			/>
		</div>
	</div>
)

RankFilter.propType = {
	select: Type.number.isRequired,
	onFilterToggle: Type.func.isRequired,
}

export default RankFilter
