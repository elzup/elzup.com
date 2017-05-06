import React from "react"
const Type = React.PropTypes
import ReactTooltip from "react-tooltip"
import ProductFooterLink from "../product-footer-link"

export default class ProductFooter extends React.Component {
	static getTypes() {
		return {
			is_alive: Type.bool.isRequired,
			link: Type.string,
			github: Type.string,
			trello: Type.string,
		}
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
