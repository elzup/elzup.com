// @flow

import React from "react"
import ReactTooltip from "react-tooltip"
import ProductFooterLink from "../product-footer-link"

type Props = {
	is_alive: boolean,
	link?: string,
	github?: string,
	trello?: string,
}

export default class ProductFooter extends React.Component {
	props: Props
	static defaultProps = {
		link: null,
		github: null,
		trello: null,
	}

	render() {
		const style = require("./product-footer.css")
		const tooltip = this.props.is_alive ? "" : <ReactTooltip />
		return (
			<div className={style.footer}>
				<ProductFooterLink
					is_alive={this.props.is_alive}
					type={"link"}
					url={this.props.link}
				/>
				<ProductFooterLink type={"github"} url={this.props.github} />
				<ProductFooterLink type={"trello"} url={this.props.trello} />
				{tooltip}
			</div>
		)
	}
}
