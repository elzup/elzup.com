import React from "react"

export default class Contact extends React.Component {
	render() {
		const style = require("./contact.css")
		return (
			<li className={style.contact} type={this.props.type}>
				<a href={this.props.link} target="_blank" />
			</li>
		)
	}
}
