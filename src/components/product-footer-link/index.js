// @flow

import React from 'react'

import styled from 'styled-components'

const Link = styled.a`
	color: white;
	text-decoration: none;
	font-size: 23px;
	padding: 6px 6px 2px 5px;

	display: block;
	margin-left: 5px;
	background-color: black;
	padding: 5px 5px 1px 5px;
`

const NoLink = styled.span`
	background-color: gray;
	color: white;
	text-decoration: none;
	font-size: 23px;
	padding: 6px 6px 2px 5px;

	display: block;
	margin-left: 5px;
	background-color: black;
	padding: 5px 5px 1px 5px;
`

const LinkDevImg = styled.a`
	width: 1.5em;
`

const LinkBase = styled.div`
	display: block;
	margin-left: 5px;
	background-color: black;
	padding: 5px 5px 1px 5px;
`

type Props = {
	isAlive?: boolean,
	url: string,
	category: string,
}

const Component = (props: Props) => {
	if (props.url === null) {
		return <span />
	}
	if (props.category === 'link') {
		if (props.isAlive) {
			return (
				<Link href={props.url} target="_blank">
					<span>↗</span>
				</Link>
			)
		} else {
			return (
				<NoLink>
					<span data-tip="SITE CLOSED">↗</span>
				</NoLink>
			)
		}
	}

	return (
		<LinkBase href={props.url} target="_blank">
			<LinkDevImg src={'/images/icon/mk-' + props.category + '.png'} alt="" />
		</LinkBase>
	)
}
Component.defaultProps = {
	isAlive: true,
}

export default Component
