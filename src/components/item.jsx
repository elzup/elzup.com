import React from 'react'

export class Item extends React.Component {
  render() {
    const href = '/' + this.props.name;
    return (
      <li>
        <a href={href} className={this.props.name}>
          <span>{this.props.label}</span>
        </a>
      </li>
    )
  }
}
