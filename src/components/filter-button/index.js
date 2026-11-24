// @flow

import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils'

/* 選択肢をひと続きの枠に収めたセグメント型。暗い地の上に置く前提の色 */
export const FilterGroup = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	gap: 2px;
	padding: 3px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 999px;
`

export const FilterLabel = styled.p`
	margin: 0 0 6px;
	font-size: 11px;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #8a8a93;
`

const Button = styled.button`
	font: inherit;
	font-size: 14px;
	min-width: 3.2em;
	padding: 4px 12px;
	border: none;
	border-radius: 999px;
	background: transparent;
	color: #b8b8c0;
	cursor: pointer;
	transition: background 0.15s, color 0.15s;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
		color: white;
	}
	&[data-toggle='true'],
	&[data-toggle='true']:hover {
		background: white;
		color: black;
	}
	&:focus-visible {
		outline: 2px solid #5cc8ff;
		outline-offset: 1px;
	}
	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
	${media.handheld(`
		padding: 8px 12px;
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
