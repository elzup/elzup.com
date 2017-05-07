// @flow

import React from "react"

type Props = {
	is_active: boolean,
	label: string,
	path: string,
}

export default class HeadMenuItem extends React.Component {
	props: Props

	render() {
		const style = require("./head-menu-item.css")
		let inner = ""
		if (!this.props.is_active) {
			inner = <a href={this.props.path}>{this.props.label}</a>
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
