// @flow

import React from "react"
import FilterButton from "../filter-button"

type Props = {
	select: number,
	onFilterToggle: Function,
}

const RankFilter = (props: Props) => (
	<div>
		<p>Quality Select</p>
		<div>
			<FilterButton
				type={0}
				label="ALL"
				toggle={props.select === 0}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={1}
				label="★"
				toggle={props.select === 1}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={2}
				label="★★"
				toggle={props.select === 2}
				onFilterToggle={props.onFilterToggle}
			/>
			<FilterButton
				type={3}
				label="★★★"
				toggle={props.select === 3}
				onFilterToggle={props.onFilterToggle}
			/>
		</div>
	</div>
)

export default RankFilter
