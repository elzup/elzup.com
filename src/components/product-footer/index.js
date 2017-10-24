// @flow

import React from 'react'
import ReactTooltip from 'react-tooltip'
import ProductFooterLink from '../product-footer-link'

import styled from 'styled-components'

const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 5px;
	display: flex;
	margin: 0;
	padding: 0;
`

type Props = {
	is_alive: boolean,
	link?: string,
	github: ?string,
	trello?: string,
}

const Component = ({ is_alive, link, github, trello }: Props) => (
	<Wrapper>
		{link ? (
			<ProductFooterLink isAlive={is_alive} category={'link'} url={link} />
		) : (
			<span />
		)}
		{github ? <ProductFooterLink category={'github'} url={github} /> : <span />}
		{trello ? <ProductFooterLink category={'trello'} url={trello} /> : <span />}
		{is_alive ? null : <ReactTooltip />}
	</Wrapper>
)
export default Component
