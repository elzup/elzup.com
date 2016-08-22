import React from 'react'
const Type = React.PropTypes
import style from './rank-filter.css'
import { FilterButton } from '../filter-button/filter-button.jsx'

export class RankFilter extends React.Component {
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

  render() {
    return (
      <FilterButton type="1" label="★" onFilterToggle={this._onToggle}/>
    )
  }

  _onToggle(btn) {
    const type = btn.type;
    this.setState({ type: btn.toggle })
    this.props.onFilterToggle(this.state)
  }
}

RankFilter.propTypes = {
  onFilterToggle: Type.func.isRequired,
}
