import React from "react"
import HeadMenu from "../../components/head-menu"
import ArtWork from "../../components/art-work"
import axios from "axios"

export default class ArtPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			icons: [],
			logos: [],
			assets: [],
		}
	}

	componentDidMount() {
		this.loadArt()
	}

	async loadArt() {
		const res = await axios.get("/data/arts.json", {
			Accept: "application/json",
		})
		this.setState(Object.assign(this.state, res.data))
	}

	render() {
		const style = require("./art-page.css")
		const icons = this.state.icons.map(x => (
			<ArtWork key={x.sid} type="icon" {...x} />
		))
		const logos = this.state.logos.map(x => (
			<ArtWork key={x.sid} type="logo" {...x} />
		))
		const assets = this.state.assets.map(x => (
			<ArtWork key={x.sid} type="asset" {...x} />
		))
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Art" />
					<h1>Art</h1>
					<p>えるざっぷの芸術作品</p>
				</header>
				<h2 className={style.subtitle}>AppIcon</h2>
				<ul className={style.work_box}>
					{icons}
				</ul>
				<h2 className={style.subtitle}>Logo</h2>
				<ul className={style.work_box}>
					{logos}
				</ul>
				<h2 className={style.subtitle}>Parts Asset</h2>
				<ul className={style.work_box}>
					{assets}
				</ul>
			</main>
		)
	}
}
