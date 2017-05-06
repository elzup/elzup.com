import React from "react"
import HeadMenu from "../../components/head-menu/head-menu.jsx"

export default class LogPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const style = require("./log-page.css")
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Log" />
					<h1>Log</h1>
					<p>えるざっぷのログ</p>
				</header>
				<div className={style.stop}>
					Under Construction
				</div>
			</main>
		)
	}
}
