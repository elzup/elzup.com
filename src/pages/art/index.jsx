import React from 'react'
import ReactDOM from 'react-dom'
import style from './art-page.css'
import {HeadMenu} from '../../components/head-menu/head-menu.jsx'

export class ArtPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
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

ReactDOM.render(
	<ArtPage/>,
	document.getElementById('container')
)
