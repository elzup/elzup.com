import React from "react";
import {HeadMenu} from "../../components/head-menu/head-menu.jsx";

export default class ArtPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const style = require("./art-page.css");
		return (
			<div className={style.page}>
				<header>
					<HeadMenu current="Art"/>
					<h1>Art</h1>
					<p>えるざっぷの芸術作品</p>
				</header>
				<div className={style.stop}>
					Under Construction
				</div>
			</div>
		);
	}
}
