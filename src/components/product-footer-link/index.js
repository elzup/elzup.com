import React from "react"
const Type = React.PropTypes

export default class ProductFooterLink extends React.Component {
	static getTypes() {
		return {
			is_alive: Type.bool,
			url: Type.string,
			type: Type.string,
		}
	}

	render() {
		const style = require("./product-footer-link.css")
		if (this.props.url === undefined) {
			return <span />
		}
		if (this.props.type === "link") {
			if (this.props.is_alive) {
				return (
					<a href={this.props.url} className={style.link} target="_blank">
						<span>↗</span>
					</a>
				)
			} else {
				return (
					<span className={style.broken_link} target="_blank">
						<span data-tip="SITE CLOSED">↗</span>
					</span>
				)
			}
		}
		const link_style = {
			github: style.link_github,
			trello: style.link_trello,
		}[this.props.type]
		return (
			<a href={this.props.url} className={link_style} target="_blank">
				<img src={"/images/icon/mk-" + this.props.type + ".png"} alt="" />
			</a>
		)
	}
}
