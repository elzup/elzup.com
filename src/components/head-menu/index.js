import React from "react"
const Type = React.PropTypes
import HeadMenuItem from "../head-menu-item"

export default class HeadMenu extends React.Component {
	static getTypes() {
		return {
			current: Type.oneOf(["Top", "Product", "Art", "Log"]),
		}
	}

	render() {
		const style = require("./head-menu.css")
		const pages = [
			{ label: "Top", path: "/" },
			{ label: "Product", path: "/product" },
			{ label: "Art", path: "/art" },
			{ label: "Log", path: "/log" },
		]
		const lis = pages.map(x => (
			<HeadMenuItem
				key={x.label}
				is_active={this.props.current == x.label}
				{...x}
			/>
		))
		return (
			<ul className={style.menu}>
				{lis}
			</ul>
		)
	}
}
