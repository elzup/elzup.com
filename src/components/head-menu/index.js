// @flow

import React from 'react'
import HeadMenuItem from '../head-menu-item'

import styled from 'styled-components'
import { media } from '../../utils'

const Menu = styled.ul`
	display: flex;
	${media.handheld`
		justify-content: space-around;
	`};
`

type Page = {
	label: string,
	path: string,
}

const pages: Page[] = [
	{ label: 'Top', path: '/' },
	{ label: 'Product', path: '/product' },
	{ label: 'Art', path: '/art' },
	{ label: 'Make', path: 'http://elzup.tumblr.com/tagged/diy' },
]

type Props = {
	current: 'Top' | 'Product' | 'Art' | 'Log',
}

const Component = ({ current }: Props) => (
	<Menu>
		{pages.map(x => (
			<HeadMenuItem key={x.label} isActive={current === x.label} {...x} />
		))}
	</Menu>
)

export default Component
