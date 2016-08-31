import React from "react";
import Product from "../../components/product/product.jsx";
import HeadMenu from "../../components/head-menu/head-menu.jsx";
import RankFilter from "../../components/rank-filter/rank-filter.jsx";
import CategoryFilter from "../../components/category-filter/category-filter.jsx";
import request from "superagent";

export default class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			types: [],
			tags: [],
			products: [],
			category_filters: [],
			rank_filters: {
				"1": true,
				"2": true,
				"3": true
			}
		}
		this._onRankChange = this._onRankChange.bind(this)
		this._onCategoryChange = this._onCategoryChange.bind(this)
	}

	componentDidMount() {
		const url = '/data/products.json';
		request
			.get(url)
			.set('Accept', 'application/json')
			.end((err, res) => {
				let state = res.body
				// HACKME:
				state.products = state.products.map((x) => {
					x.level = parseInt(x.level)
					x.is_alive = x.is_alive == "TRUE"
					return x;
				})
				state.category_filters = state.categories.reduce((m, v) => {
					m[v] = true;
					return m;
				}, {})
				this.setState(state)

			})
	}

	render() {
		const style = require("./product-page.css");
		const productsNodes = this.state.products
			.filter((x) => this.state.rank_filters[x.rank] && this.state.category_filters[x.category])
			.map((x) => <Product
				key={x.sid} {...x} />)
		const categoryFilter = this.state.categories != undefined ? (
			<CategoryFilter categories={this.state.categories}
											onFilterToggle={this._onCategoryChange}/>) : '';
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Product"/>
					<h1>Product</h1>
					<p>えるざっぷの制作物一覧</p>
					<div className={style.filters}>
						<RankFilter onFilterToggle={this._onRankChange}/>
						{categoryFilter}
					</div>
				</header>
				<ul className={style.products}>
					{productsNodes}
				</ul>
			</main>
		);
	}

	_onRankChange(state) {
		this.setState({rank_filters: state})
	}

	_onCategoryChange(state) {
		this.setState({category_filters: state})
	}
}
