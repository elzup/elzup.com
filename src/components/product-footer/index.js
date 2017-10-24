// @flow

import React from 'react'
import ReactTooltip from 'react-tooltip'
import ProductFooterLink, { FooterLinkBase } from '../product-footer-link'

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
	isAlive: boolean,
	link?: string,
	github: ?string,
	trello?: string,
}

const Component = ({ isAlive, link, github, trello }: Props) => (
	<Wrapper>
		{link ? <FooterLinkBase isAlive={isAlive} url={link} /> : <span />}
		{github ? <ProductFooterLink category={'github'} url={github} /> : <span />}
		{trello ? <ProductFooterLink category={'trello'} url={trello} /> : <span />}
		{isAlive ? null : <ReactTooltip />}
	</Wrapper>
)
export default Component
