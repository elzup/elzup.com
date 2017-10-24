// @flow

import React from 'react'
import FilterButton from '../filter-button'

type Props = {
	select: number,
	onFilterToggle: Function,
}

const RankFilter = ({ select, onFilterToggle }: Props) => (
	<div>
		<p>Quality Select</p>
		<div>
			<FilterButton
				category={0}
				label="ALL"
				toggle={select === 0}
				onFilterToggle={onFilterToggle}
			/>
			<FilterButton
				category={1}
				label="★"
				toggle={select === 1}
				onFilterToggle={onFilterToggle}
			/>
			<FilterButton
				category={2}
				label="★★"
				toggle={select === 2}
				onFilterToggle={onFilterToggle}
			/>
			<FilterButton
				category={3}
				label="★★★"
				toggle={select === 3}
				onFilterToggle={onFilterToggle}
			/>
		</div>
	</div>
)

export default RankFilter
