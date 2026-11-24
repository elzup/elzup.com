// @flow

import React from 'react'
import FilterButton, { FilterGroup, FilterLabel } from '../filter-button'

import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 10px;
`

type Props = {
	select: number,
	onFilterToggle: Function,
}

const RankFilter = ({ select, onFilterToggle }: Props) => (
	<Wrapper>
		<FilterLabel>Quality</FilterLabel>
		<FilterGroup>
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
		</FilterGroup>
	</Wrapper>
)

export default RankFilter
