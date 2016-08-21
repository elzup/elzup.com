import React from 'react'
const Type = React.PropTypes
import style from '../styles/product.css'
import FontAwesome from 'react-fontawesome'

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img_url = '/images/product/sc_' + this.props.sid + '.png';
    return (

      <li className={style.product}>
        <div className={style.img_wrap}>
          <img src={img_url} />
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        <p>
          <FontAwesome name='rocket' />
        </p>
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
