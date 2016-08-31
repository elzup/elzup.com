import React from 'react'
const Type = React.PropTypes

export default class FilterButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle: false
		}
		this._onToggle = this._onToggle.bind(this)
	}

	static getTypes() {
		return {
			type: Type.string.isRequired,
			label: Type.string.isRequired,
			onFilterToggle: Type.func.isRequired,
		}
	}

	render() {
		const style = require('./filter-button.css')
		return (
			<input
				className={style.btn}
				type="button" data-toggle={this.state.toggle}
				onClick={this._onToggle}
				value={this.props.label}/>
		)
	}

	_onToggle() {
		this.setState({toggle: !this.state.toggle})
		this.props.onFilterToggle(this.props.type, this.state.toggle)
	}
}
