import React from 'react'
import style from '../styles/product.css'

export class Item extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <li className={style.product}>
      </li>
    )
  }
}
