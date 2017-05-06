import React from "react"
import HeadMenu from "../../components/head-menu/head-menu.jsx"

export default class NotFoundPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const style = require("./404.css")
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="404" />
					<h1>404</h1>
				</header>
				<div className={style.stop}>
					Not Found
				</div>
			</main>
		)
	}
}
