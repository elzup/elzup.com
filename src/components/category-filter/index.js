// @flow

import React from 'react'
import FilterButton from '../filter-button'

type Props = {
	categories: Array<string>,
	select: number,
	onFilterToggle: Function,
}

const CategoryFilter = (props: Props) => {
	const btns = props.categories.map(x => (
		<FilterButton
			key={x}
			category={x}
			label={x}
			toggle={props.select === x}
			onFilterToggle={props.onFilterToggle}
		/>
	))
	return (
		<div>
			<p>Category Select</p>
			<div>{btns}</div>
		</div>
	)
}

export default CategoryFilter
