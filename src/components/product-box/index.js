// @flow

import React from "react"
import ProductFooter from "../product-footer"
import LazyLoad from "react-lazy-load"
import { Product } from "../../types"

type Props = {
	product: Product,
}

type State = {
	img_url: string,
	no_img: boolean,
}

export default class ProductBox extends React.Component {
	props: Props
	state: State = {
		img_url: "/images/product/sc_" + this.props.product.sid + ".png",
		no_img: false,
	}

	render() {
		const { product } = this.props

		const style = require("./product.css")
		const base_title = <h2>{product.title}</h2>
		const title = product.is_alive
			? <a href={product.link} className={style.title_link} target="_blank">
					{base_title}
				</a>
			: base_title
		const members = product.members.map(x => {
			const link = "//twitter.com/" + x.name
			return (
				<li key={product.sid + ":" + x.name}>
					<a href={link}>@{x.name}</a>: {x.description}
				</li>
			)
		})
		const tags = product.tags.map(x => (
			<div key={product.sid + ":" + x}>{x}</div>
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
				<p>{product.subtitle}</p>
				<p className={style.description}>{product.description}</p>
				<ul className={style.members}>
					{members}
				</ul>
				<div className={style.tags}>
					{tags}
				</div>
				<ProductFooter
					key={product.sid}
					is_alive={product.is_alive}
					link={product.link}
					github={product.github}
					trello={product.trello}
				/>
			</li>
		)
	}
}
