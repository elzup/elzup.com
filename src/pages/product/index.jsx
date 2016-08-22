import React from 'react'
import ReactDOM from 'react-dom'
import style from './product-page.css'
import {Product} from '../../components/product/product.jsx'
import {HeadMenu} from '../../components/head-menu/head-menu.jsx'
import {RankFilter} from '../../components/rank-filter/rank-filter.jsx'
import request from 'superagent'

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      tags: [],
      products: [],
      rank_filters: {
        "1": true,
        "2": true,
        "3": true
      }
    }
    this._onRankChange = this._onRankChange.bind(this)
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
    console.log(this.state.rank_filters)
    const productsNodes = this.state.products
      .filter((x) => {
        return this.state.rank_filters[x.rank]
      })
      .map((x) => <Product
      key={x.sid} {...x} />)
    return (
      <div className={style.productpage}>
        <header>
          <HeadMenu current="Product"/>
          <h1>Product</h1>
          <p>制作物一覧</p>
          <div className={style.filters}>
            <RankFilter onFilterToggle={this._onRankChange}/>
          </div>
        </header>
        <ul className={style.products}>
          {productsNodes}
        </ul>
      </div>
    );
  }

  _onRankChange(state) {
    this.setState( { rank_filters: state })
  }
}

ReactDOM.render(
  <ProductPage/>,
  document.getElementById('container')
)
