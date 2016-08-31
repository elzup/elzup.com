import React from 'react'
const Type = React.PropTypes
import FilterButton from '../filter-button/filter-button.jsx'

export default class RankFilter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filters: {
				"1": true,
				"2": true,
				"3": true
			}
		}
		this._onToggle = this._onToggle.bind(this)
	}

	static getTypes() {
		return {
			onFilterToggle: Type.func.isRequired,
		}
	}

	render() {
		return (
			<div>
				<FilterButton type="1" label="★" onFilterToggle={this._onToggle}/>
				<FilterButton type="2" label="★★" onFilterToggle={this._onToggle}/>
				<FilterButton type="3" label="★★★" onFilterToggle={this._onToggle}/>
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
