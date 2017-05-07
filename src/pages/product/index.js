// @flow

import React from "react"
import _ from "lodash"

import axios from "axios"

import ProductBox from "../../components/product-box"
import HeadMenu from "../../components/head-menu"
import RankFilter from "../../components/rank-filter"
import CategoryFilter from "../../components/category-filter"

type State = {
	tags: Array<string>,
	products: Array<any>,
	categories: Array<string>,
	categorySelect: string,
	rankSelect: number,
}

export default class ProductPage extends React.Component {
	state: State = {
		tags: [],
		products: [],
		categories: [],
		categorySelect: "ALL",
		rankSelect: 0,
	}

	componentDidMount() {
		this.loadProducts()
	}

	async loadProducts() {
		const uri =
			"https://script.googleusercontent.com/macros/echo?user_content_key=njSw0NlUahn9VG4J0Ydx6VOu0OjFJ9120zF2_-dQw2I4j4EP-OYtISj32OLOd-BRs9WD2mVgoxZ2_du9Cj1lMVHIPtP0zinTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCoBYuj4hganT42SDz8Jy-RSH6uFnN0GLeKFvmmAZURgsD8cl5mcfExCBSyeqOrwFiPIEyVC5G-3&lib=M4AumUuRYH4oWs3BKvnnNtH2y4DtNeKF1"
		const res = await axios.get(uri, { "Access-Control-Allow-Origin": "*" })
		const categories = []
		const allTags = []
		const products = res.data.map(product => {
			const tags = product.tags.split("-")
			const link = product.link || null
			const github = product.github || null
			const trello = product.trello || null
			let members = []
			if (product.members) {
				members = product.members.split("-").map(member => {
					const [name, description] = member.split(":")
					return { name, description }
				})
			}
			allTags.push(...tags)
			categories.push(product.category)
			return { ...product, tags, members, link, github, trello }
		})
		categories.unshift("ALL")
		this.setState({
			products,
			categories: _.uniq(categories),
			tags: _.uniq(allTags),
		})
	}

	render() {
		const style = require("./product-page.css")
		const productsNodes = this.state.products
			.filter(x => {
				return (
					(this.state.rankSelect == 0 || this.state.rankSelect == x.rank) &&
					(this.state.categorySelect == "ALL" ||
						this.state.categorySelect == x.category)
				)
			})
			.map(p => <ProductBox key={p.sid} product={p} />)
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Product" />
					<h1>Product</h1>
					<p>えるざっぷの制作物一覧</p>
					<div className={style.filters}>
						<RankFilter
							select={this.state.rankSelect}
							onFilterToggle={this._onRankChange.bind(this)}
						/>
						<CategoryFilter
							select={this.state.categorySelect}
							categories={this.state.categories}
							onFilterToggle={this._onCategoryChange.bind(this)}
						/>
					</div>
				</header>
				<ul className={style.products}>
					{productsNodes}
				</ul>
			</main>
		)
	}

	_onRankChange(select) {
		this.setState({ rankSelect: select })
	}

	_onCategoryChange(state) {
		this.setState({ categorySelect: state })
	}
}
