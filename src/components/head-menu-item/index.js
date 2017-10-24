// @flow

import React from 'react'

import styled from 'styled-components'
import { media } from '../../utils'

const Item = styled.li`
	&:not(:first-child) {
		margin-left: 2em;
	}
	${media.handheld(`
	&:not(:first-child) {
		margin-left: 0;
	}
	`)};
`

type Props = {
	isActive: boolean,
	label: string,
	path: string,
}

const Component = ({ isActive, label, path }: Props) => (
	<Item>{isActive ? label : <a href={path}>{label}</a>}</Item>
)

export default Component
