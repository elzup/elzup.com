import React from 'react'
const Type = React.PropTypes
import style from './category-filter.css'
import { FilterButton } from '../filter-button/filter-button.jsx'

export class CategoryFilter extends React.Component {
  constructor(props) {
    super(props)
    // initialize categories to map state
    this.state = {
      filters: props.categories.reduce((m, v) => {
        m[v] = true;
        return m;
      }, {})
    }
    this._onToggle = this._onToggle.bind(this)
  }

  render() {
    const btns = this.props.categories
      .map(x => <FilterButton key={x} type={x} label={x} onFilterToggle={this._onToggle}/>)
    return (
      <div>
        {btns}
      </div>
    )
  }

  _onToggle(type, toggle) {
    const filters = this.state.filters
    filters[type] = toggle
    this.setState({ filters: filters })
    this.props.onFilterToggle(this.state.filters)
  }
}

CategoryFilter.propTypes = {
  categories: Type.arrayOf(Type.string).isRequired,
  onFilterToggle: Type.func.isRequired,
}
