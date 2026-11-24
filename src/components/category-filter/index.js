// @flow

import React from 'react'
import FilterButton, { FilterGroup, FilterLabel } from '../filter-button'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 10px;
`

type Props = {
	categories: Array<string>,
	select: string,
	onFilterToggle: Function,
}

const CategoryFilter = ({ categories, select, onFilterToggle }: Props) => (
	<Wrapper>
		<FilterLabel>Category</FilterLabel>
		<FilterGroup>
			{categories.map((x) => (
				<FilterButton
					key={x}
					category={x}
					label={x}
					toggle={select === x}
					onFilterToggle={onFilterToggle}
				/>
			))}
		</FilterGroup>
	</Wrapper>
)

export default CategoryFilter
