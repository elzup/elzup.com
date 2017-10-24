// @flow

import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils'

const Wrapper = styled.li`
	background: black;
	list-style-type: none;
	margin: 2px;
	width: 139px;
	height: 139px;
	position: relative;
	border-radius: 5px;

	${media.handheld`
		width: 46%;
		margin: 2%;
	`};
`

const Link = styled.a`
	display: block;
	color: white;
	text-decoration: none;
	text-align: center;
	padding: 60px 0;
	height: 20px;
	font-size: 25px;
`

export const DummyItem = styled.li`
	background: rgba(0, 0, 0, 0);
	list-style-type: none;
	margin: 2px;
	width: 139px;
	height: 139px;
	position: relative;

	${media.handheld`
		display: none;
		width: 46%;
		margin: 2%;
	`};
`

type Props = {
	name: string,
	label: string,
}

const Component = ({ name, label }: Props) => (
	<Wrapper>
		<Link href={'/' + name}>
			<span>{label}</span>
		</Link>
	</Wrapper>
)

export default Component
