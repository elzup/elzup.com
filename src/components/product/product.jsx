import React from 'react'
const Type = React.PropTypes
import ProductFooter from '../product-footer/product-footer.jsx'
import LazyLoad from 'react-lazy-load'

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img_url: '/images/product/sc_' + props.sid + '.png',
			no_img: false
		}
	}

	static getTypes() {
		return {
			sid: Type.string.isRequired,
			level: Type.number.isRequired,
			category: Type.string.isRequired,
			title: Type.string.isRequired,
			subtitle: Type.string.isRequired,
			description: Type.string.isRequired,
			term: Type.string.isRequired,
			tags: Type.array.isRequired,
			is_alive: Type.bool.isRequired,
			link: Type.string,
			github: Type.string,
			trello: Type.string,
			members: Type.array
		}
	}

	render() {
		const style = require('./product.css')
		const base_title = <h2>{this.props.title}</h2>;
		const title = this.props.is_alive ? (
			<a
				href={this.props.link}
				className={style.title_link}
				target="_blank">{base_title}</a>
		) : base_title;
		const members = this.props.members.map(x => {
			const link = "//twitter.com/" + x.name
			return <li key={this.props.sid + ":" + x.name}><a
				href={link}>@{x.name}</a>: {x.description}</li>
		})
		const tags = this.props.tags.map(x => <div
			key={this.props.sid + ":" + x}>{x}</div>)
		const img_style = this.state.no_img ? style.no_img : style.img
		const on_error = () => {
			this.setState({
				img_url: '/images/404.png',
				no_img: true
			})
		}
		return (
			<li className={style.product}>
				<div className={style.img_wrap}>
					<LazyLoad height={219}>
						<img
							className={img_style}
							src={this.state.img_url}
							onError={on_error}/>
					</LazyLoad>
				</div>
				{ title }
				<p>{this.props.subtitle}</p>
				<p className={style.description}>{this.props.description}</p>
				<ul className={style.members}>
					{members}
				</ul>
				<div className={style.tags}>
					{tags}
				</div>
				<ProductFooter
					key={this.props.sid}
					is_alive={this.props.is_alive}
					link={this.props.link}
					github={this.props.github}
					trello={this.props.trello}
				/>
			</li>
		)
	}
}
