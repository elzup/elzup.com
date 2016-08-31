import React from 'react'

export default class Item extends React.Component {
	render() {
		const style = require('./item.css')
		const href = '/' + this.props.name;
		return (
			<li className={style.item}>
				<a href={href} className={this.props.name}>
					<span>{this.props.label}</span>
				</a>
			</li>
		)
	}
}
