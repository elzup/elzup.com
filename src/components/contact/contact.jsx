import React from 'react'
import style from './contact.css'

export class Contact extends React.Component {
	render() {
		return (
			<li className={style.contact} type={this.props.type}>
				<a href={this.props.link} target="_blank"></a>
			</li>
		)
	}
}
