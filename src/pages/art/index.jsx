import React from "react";
import HeadMenu from "../../components/head-menu/head-menu.jsx";
import ArtIcon from "../../components/art-icon/art-icon.jsx"
import request from "superagent";

export default class ArtPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: [],
			logos: [],
			assets: []
		}
	}

	componentDidMount() {
		const url = '/data/arts.json';
		request
			.get(url)
			.set('Accept', 'application/json')
			.end((err, res) => {
				this.setState(Object.assign(this.state, res.body))
			})
	}

	render() {
		const style = require("./art-page.css");
		const icons = this.state.icons.map((x) =>
			<ArtIcon key={x.sid} type="icon" {...x} />)
		const logos = this.state.logos.map((x) =>
			<ArtIcon key={x.sid} type="logo" {...x} />)
		const assets = this.state.assets.map((x) =>
			<ArtIcon key={x.sid} type="asset" {...x} />)
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Art"/>
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
		);
	}
}
