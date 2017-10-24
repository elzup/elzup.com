// @flow

import React from 'react'

import styled from 'styled-components'

const Link = styled.a`
	display: block;
	margin-left: 5px;
	background-color: black;
	padding: 5px 5px 1px 5px;
`

const NoLink = styled.span`
	display: block;
	margin-left: 5px;
	background-color: gray;
	padding: 5px 5px 1px 5px;
`

const LinkDevImg = styled.img`
	width: 1.5em;
`

type Props = {
	url: string,
	category: string,
}

const Component = (props: Props) => (
	<Link href={props.url} target="_blank">
		<LinkDevImg src={'/images/icon/mk-' + props.category + '.png'} alt="" />
	</Link>
)
export default Component

type LCProps = {
	isAlive: boolean,
	url: string,
}

export const FooterLinkBase = (props: LCProps) => {
	if (props.isAlive) {
		return (
			<Link href={props.url} target="_blank">
				<LinkDevImg src={'/images/icon/mk-link.png'} alt="" />
			</Link>
		)
	} else {
		return (
			<NoLink>
				<LinkDevImg
					src={'/images/icon/mk-link.png'}
					alt=""
					data-tip="SITE CLOSED"
				/>
			</NoLink>
		)
	}
}
