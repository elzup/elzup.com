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
          <h1>elzup.com</h1>
        </div>
        <div className={style.layer2}>
          <ul className={style.menu}>
            <Item label="Product" name="product"/>
            <Item label="Art" name="art"/>
            <Item label="Log" name="log"/>
          </ul>
          <div className={style.layer3}>
            <div className={style.layer4}>
            </div>
            <ul className={style.contacts}>
              <Contact label="Github" link="//github.com/elzup" type="github"/>
              <Contact label="Twitter" link="//twitter.com/_elzup_" type="twitter"/>
              <Contact label="Facebook" link="//www.facebook.com/takahashiroto" type="facebook"/>
              <Contact label="Hatena" link="//twitter.com/_elzup_" type="hatena"/>
              <Contact label="Qiita" link="//qiita.com/elzup" type="qiita"/>
              <Contact label="Tumbler" link="//elzup.tumblr.com" type="tumblr"/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TopPage/>,
  document.getElementById('top-container')
)
