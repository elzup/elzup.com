// @flow

import React from 'react'
import FilterButton from '../filter-button'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 10px;
	margin-left: 20px;
`

type Props = {
	categories: Array<string>,
	select: string,
	onFilterToggle: Function,
}

const CategoryFilter = ({ categories, select, onFilterToggle }: Props) => (
	<Wrapper>
		<p>Category Select</p>
		<div>
			{categories.map(x => (
				<FilterButton
					key={x}
					category={x}
					label={x}
					toggle={select === x}
					onFilterToggle={onFilterToggle}
				/>
			))}
		</div>
	</Wrapper>
)

export default CategoryFilter
