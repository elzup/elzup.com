// @flow

import React from 'react'

type Props = {
	type: string,
	label: string,
	onFilterToggle: Function,
	toggle: boolean,
}

const FilterButton = (props: Props) => {
	const style = require('./filter-button.css')
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

export default FilterButton
