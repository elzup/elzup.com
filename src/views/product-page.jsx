import React from 'react'
import ReactDOM from 'react-dom'
import style from '../styles/product-page.css'
import {Product} from '../components/product.jsx'
import request from 'superagent'

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      tags: [],
      products: []
    }
  }

  componentDidMount() {
    const url = '/data/products.json';
    request
      .get(url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        // HACKME:
        res.body.products = res.body.products.map((x) => {
          x.level = parseInt(x.level)
          x.is_alive = x.is_alive == "TRUE"
          return x;
        })
        this.setState(res.body)
      })
  }

  render() {
    const productsNodes = this.state.products.map((x) => <Product key={x.sid} {...x} />)
    return (
      <div className={style.productpage}>
        <ul className={style.menu}>
          <li>Top</li>
          <li>Product</li>
          <li>Art</li>
          <li>Log</li>
        </ul>
        <h1>Product</h1>
        <div className={style.products_filter}>
        </div>
        <ul className={style.products}>
          {productsNodes}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductPage/>,
  document.getElementById('container')
)
