// @flow

import React from 'react'

type Props = {
	name: string,
	label: string,
}

export default class Item extends React.Component {
	props: Props

	render() {
		const style = require('./item.css')
		const href = '/' + this.props.name
		return (
			<li className={style.item}>
				<a href={href} className={this.props.name}>
					<span>{this.props.label}</span>
				</a>
			</li>
		)
	}
}
