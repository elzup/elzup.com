import React from 'react'
import ReactDOM from 'react-dom'
import style from './404.css'
import {HeadMenu} from '../../components/head-menu/head-menu.jsx'

export class ArtPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={style.page}>
        <header>
          <HeadMenu current="404"/>
          <h1>404</h1>
          <p></p>
        </header>
        <div className={style.stop}>
          Not Found
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ArtPage/>,
  document.getElementById('container')
)

