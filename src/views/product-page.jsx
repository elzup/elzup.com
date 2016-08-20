import React from 'react'
import ReactDOM from 'react-dom'
import {Item} from '../components/item.jsx'
import {Contact} from '../components/contact.jsx'
import style from '../styles/top-page.css'


export class TopPage extends React.Component {
  render() {
    return (
      <div className={style.toppage}>
        <div className={style.eyecatch}>
          <h1>Product</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TopPage/>,
  document.getElementById('container')
)
