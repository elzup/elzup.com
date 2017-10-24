import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils'

export const DummyContact = styled.li`
	background: rgba(0, 0, 0, 0);
	list-style-type: none;
	margin: 2px;
	width: 55px;
	height: 55px;
	position: relative;
`

const Wrapper = styled.li`
	background: black;
	list-style-type: none;
	margin: 2px;
	width: 55px;
	height: 55px;
	position: relative;
	border-radius: 5px;

	${media.handheld`
		width: 46%;
		margin: 2%;
	`};
`

/*align center with block*/
const Link = styled.a`
	display: block;
	color: white;
	text-decoration: none;
	text-align: center;
	padding: 17.5px 0;
	height: 20px;

	background-size: 68%;
	background-repeat: no-repeat;
	background-position: 9px;
`

type Props = {
	label: string,
	link: string,
	type: string,
}

const Component = ({ label, link, type }: Props) => (
	<Wrapper>
		<Link
			href={link}
			style={{
				backgroundImage: `url(/images/icon/icon_${type}.png)`,
			}}
			target="_blank"
		/>
	</Wrapper>
)
export default Component
