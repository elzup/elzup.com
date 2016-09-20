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
			categories: [],
			categorySelect: 'ALL',
			rankSelect: 0
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
					x.rank = parseInt(x.rank)
					x.is_alive = x.is_alive == "TRUE"
					return x;
				})
				state.categories.unshift('ALL')
				this.setState(state)
			})
	}

	render() {
		const style = require("./product-page.css");
		const productsNodes = this.state.products
			.filter((x) => {
				console.log(this.state.rankSelect)
				console.log(x.rank)
				console.log(this.state.rankSelect == x.rank)
				console.log(this.state.rankSelect == 0)
				console.log(this.state.categorySelect == 'ALL' || this.state.categorySelect == x.category)
				return ((this.state.rankSelect == 0 || this.state.rankSelect == x.rank)
				&& (this.state.categorySelect == 'ALL' || this.state.categorySelect == x.category))
				}
			)
			.map((x) => <Product
				key={x.sid} {...x} />)
		return (
			<main className={style.page}>
				<header>
					<HeadMenu current="Product"/>
					<h1>Product</h1>
					<p>えるざっぷの制作物一覧</p>
					<div className={style.filters}>
						<RankFilter
							select={this.state.rankSelect}
							onFilterToggle={this._onRankChange}/>
						<CategoryFilter
							select={this.state.categorySelect}
							categories={this.state.categories}
							onFilterToggle={this._onCategoryChange}/>
					</div>
				</header>
				<ul className={style.products}>
					{productsNodes}
				</ul>
			</main>
		);
	}

	_onRankChange(select) {
		this.setState({rankSelect: select})
	}

	_onCategoryChange(state) {
		this.setState({categorySelect: state})
	}
}
