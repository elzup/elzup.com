import React from 'react'
const Type = React.PropTypes

export default class HeadMenuItem extends React.Component {
	static getTypes() {
		return {
			is_active: Type.bool,
			label: Type.string,
			path: Type.string,
		}
	}

	render() {
		const style = require('./head-menu-item.css')
		let inner = '';
		if (!this.props.is_active) {
			inner = (<a href={this.props.path}>{this.props.label}</a>)
		} else {
			inner = this.props.label
		}
		return (
			<li className={style.item}>
				{inner}
			</li>
		)
	}
}
