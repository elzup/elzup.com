import React from 'react'
const Type = React.PropTypes
import FilterButton from '../filter-button/filter-button.jsx'

export default class CategoryFilter extends React.Component {
	constructor(props) {
		super(props)
		// initialize categories to map state
		this.state = {
			filters: props.categories.reduce((m, v) => {
				m[v] = true
				return m
			}, {})
		}
		this._onToggle = this._onToggle.bind(this)
	}

	static getTypes() {
		return {
			categories: Type.arrayOf(Type.string).isRequired,
			onFilterToggle: Type.func.isRequired
		}
	}

	render() {
		const btns = this.props.categories
			.map(x =>
				<FilterButton
					key={x}
					type={x}
					label={x}
					onFilterToggle={this._onToggle}/>)
		return (
			<div>
				{btns}
			</div>
		)
	}

	_onToggle(type, toggle) {
		const filters = this.state.filters
		filters[type] = toggle
		this.setState({filters: filters})
		this.props.onFilterToggle(this.state.filters)
	}
}

