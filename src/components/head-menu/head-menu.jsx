import React from 'react'
const Type = React.PropTypes
import style from './head-menu.css'
import {HeadMenuItem} from '../head-menu-item/head-menu-item.jsx'

export class HeadMenu extends React.Component {
	render() {
		const pages = [
			{label: 'Top', path: '/'},
			{label: 'Product', path: '/product'},
			{label: 'Art', path: '/art'},
			{label: 'Log', path: '/log'},
		]
		const lis = pages.map(x =>
			<HeadMenuItem
				key={x.label}
				is_active={this.props.current == x.label}
				{...x}
			/>
		)
		return (
			<ul className={style.menu}>
				{lis}
			</ul>
		)
	}
}

HeadMenu.propTypes = {
	current: Type.oneOf(['Top', 'Product', 'Art', 'Log']),
}
