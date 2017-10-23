// @flow

import React from 'react'
import HeadMenuItem from '../head-menu-item'

type Props = {
	current: 'Top' | 'Product' | 'Art' | 'Log',
}

export default class HeadMenu extends React.Component {
	props: Props

	render() {
		const style = require('./head-menu.css')
		const pages = [
			{ label: 'Top', path: '/' },
			{ label: 'Product', path: '/product-box' },
			{ label: 'Art', path: '/art' },
			{ label: 'Log', path: '/log' },
		]
		const lis = pages.map(x => (
			<HeadMenuItem
				key={x.label}
				is_active={this.props.current == x.label}
				{...x}
			/>
		))
		return <ul className={style.menu}>{lis}</ul>
	}
}
