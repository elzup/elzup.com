import React from 'react'
const Type = React.PropTypes
import style from '../styles/product.css'

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={style.product}>
        {this.props.title}
      </li>
    )
  }
}

Product.propTypes = {
  sid:  Type.string.isRequired,
  level:  Type.number.isRequired,
  category:  Type.string.isRequired,
  title:  Type.string.isRequired,
  subtitle:  Type.string.isRequired,
  description:  Type.string.isRequired,
  term:  Type.string.isRequired,
  tags:  Type.array.isRequired,
  is_alive:  Type.bool.isRequired,
  link:  Type.string,
  github:  Type.string,
  trello:  Type.string,
  members:  Type.array
}
