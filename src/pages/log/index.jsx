import React from 'react'
import ReactDOM from 'react-dom'
import style from './log-page.css'
import {HeadMenu} from '../../components/head-menu/head-menu.jsx'

export class LogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className={style.page}>
				<header>
					<HeadMenu current="Log"/>
					<h1>Log</h1>
					<p>えるざっぷのログ</p>
				</header>
				<div className={style.stop}>
					Under Construction
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<LogPage/>,
	document.getElementById('container')
)
