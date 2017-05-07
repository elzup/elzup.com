// @flow

import React from "react"
import ProductFooter from "../product-footer"
import LazyLoad from "react-lazy-load"

type Props = {
	sid: string,
	level: number,
	category: string,
	title: string,
	subtitle: string,
	description: string,
	term: string,
	tags: Array<string>,
	is_alive: boolean,
	link?: string,
	github?: string,
	trello?: string,
	members?: Array<any>,
}

type State = {
	img_url: string,
	no_img: boolean,
}

export default class Product extends React.Component {
	props: Props
	state: State = {
		img_url: "/images/product/sc_" + this.props.sid + ".png",
		no_img: false,
	}

	render() {
		const style = require("./product.css")
		const base_title = <h2>{this.props.title}</h2>
		const title = this.props.is_alive
			? <a href={this.props.link} className={style.title_link} target="_blank">
					{base_title}
				</a>
			: base_title
		const members = this.props.members.map(x => {
			const link = "//twitter.com/" + x.name
			return (
				<li key={this.props.sid + ":" + x.name}>
					<a href={link}>@{x.name}</a>: {x.description}
				</li>
			)
		})
		const tags = this.props.tags.map(x => (
			<div key={this.props.sid + ":" + x}>{x}</div>
		))
		const img_style = this.state.no_img ? style.no_img : style.img
		const on_error = () => {
			this.setState({
				img_url: "/images/404.png",
				no_img: true,
			})
		}
		return (
			<li className={style.product}>
				<div className={style.img_wrap}>
					<LazyLoad height={219}>
						<img
							className={img_style}
							src={this.state.img_url}
							onError={on_error}
						/>
					</LazyLoad>
				</div>
				{title}
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
