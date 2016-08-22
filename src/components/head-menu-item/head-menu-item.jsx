import React from 'react'
const Type = React.PropTypes
import style from './head-menu-item.css'

export class HeadMenuItem extends React.Component {
  render() {
    let inner = '';
    if (!this.props.is_active) {
      inner = (<a href={this.props.path}>{this.props.label}</a>)
    } else {
      inner = this.props.label
    }
    return (
      <li className={style.item}>
        {inner}
      </li>
    )
  }
}

HeadMenuItem.propTypes = {
  is_active: Type.bool,
  label: Type.string,
  path: Type.string,
}
