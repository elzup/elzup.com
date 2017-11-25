// @flow

import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils'

const Button = styled.button`
	border: none;
	border-left: 0.5em solid black;
	width: 5em;
	border-radius: 0;
	height: 20px;

	&:first-child {
		border-radius: 5px 0 0 5px;
	}

	&:last-child {
		border-radius: 0 5px 5px 0;
	}
	&[data-toggle='true'] {
		background: #888;
	}

	&[data-toggle='false'] {
		background: #eee;
	}
	${media.handheld(`
		width: 33%;
		line-height: 2.5em;
	`)};
`

type Props = {
	category: string | number,
	label: string,
	onFilterToggle: Function,
	toggle: boolean,
}

const FilterButton = ({ category, label, onFilterToggle, toggle }: Props) => (
	<Button
		type="button"
		data-toggle={toggle}
		onClick={() => {
			onFilterToggle(category)
		}}
		value={label}
	>
		{label}
	</Button>
)

export default FilterButton
