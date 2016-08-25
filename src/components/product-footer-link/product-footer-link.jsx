import React from 'react'
const Type = React.PropTypes
import style from './product-footer-link.css'

export class ProductFooterLink extends React.Component {
	render() {
		if (this.props.url == undefined) {
			return <span></span>
		}
		if (this.props.type == 'link') {
			if (this.props.is_alive) {
				return (
					<a href={this.props.url} className={style.link} target="_blank">
						<span>↗</span>
					</a>)
			} else {
				return (<span className={style.broken_link} target="_blank">
            <span data-tip="SITE CLOSED">↗</span>
          </span>)
			}
		}
		const link_style = {
			'github': style.link_github,
			'trello': style.link_trello
		}[this.props.type]
		return (
			<a href={this.props.url} className={link_style}
				 target="_blank">
				<img src={"/images/icon/mk-" + this.props.type + ".png"} alt=""/>
			</a>)
	}
}

ProductFooterLink.propTypes = {
	is_alive: Type.bool,
	url: Type.string,
	type: Type.string
}
