import React from 'react'
import style from './item.css'

export class Item extends React.Component {
  render() {
    const href = '/' + this.props.name;
    return (
      <li className={style.item}>
        <a href={href} className={this.props.name}>
          <span>{this.props.label}</span>
        </a>
      </li>
    )
  }
}
