// @flow

import React from 'react'

import styled from 'styled-components'

import HeadMenu from '../../components/head-menu'
import RankFilter from '../../components/rank-filter'
import CategoryFilter from '../../components/category-filter'
import ProductBox from '../../components/product-box'

import { getProducts } from '../../api'

type State = {
	tags: Array<string>,
	products: Array<any>,
	categories: Array<string>,
	categorySelect: string,
	rankSelect: number,
	loaded: boolean,
}

const ProductFilters = styled.ul`
	display: flex;
`

const Products = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

export default class ProductPage extends React.Component<{}, State> {
	state = {
		tags: [],
		products: [],
		categories: [],
		categorySelect: 'ALL',
		rankSelect: 0,
		loaded: false,
	}

	componentDidMount() {
		this.loadProducts()
	}

	async loadProducts() {
		const { products, categories, tags } = await getProducts()
		this.setState({
			products,
			categories,
			tags,
			loaded: true,
		})
	}

	filters = () => {
		if (!this.state.loaded) {
			return 'loading...'
		}
		return (
			<ProductFilters>
				<RankFilter
					select={this.state.rankSelect}
					onFilterToggle={this._onRankChange.bind(this)}
				/>
				<CategoryFilter
					select={this.state.categorySelect}
					categories={this.state.categories}
					onFilterToggle={this._onCategoryChange.bind(this)}
				/>
			</ProductFilters>
		)
	}

	render() {
		const { products } = this.state
		const displayProducts = products.filter(x => {
			return (
				(this.state.rankSelect === 0 || this.state.rankSelect === x.rank) &&
				(this.state.categorySelect === 'ALL' ||
					this.state.categorySelect === x.category)
			)
		})
		return (
			<main>
				<header>
					<HeadMenu current="Product" />
					<h1>Product</h1>
					<p>えるざっぷの制作物一覧</p>
					{this.filters()}
				</header>
				<Products>
					{displayProducts.map(p => <ProductBox key={p.sid} product={p} />)}
				</Products>
			</main>
		)
	}

	_onRankChange = (select: number) => {
		this.setState({ rankSelect: select })
	}

	_onCategoryChange = (state: string) => {
		this.setState({ categorySelect: state })
	}
}
