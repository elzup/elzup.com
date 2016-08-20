import React from 'react'
import ReactDOM from 'react-dom'
import { Item } from '../components/item.jsx'
import css from '../styles/top-page.css'


export class TopPage extends React.Component {
  render() {
    return (
      <div>
        <div id="eye-catch">
          <h1>elzup.com</h1>
        </div>
        <div id="layer2">
          <ul id="menu">
            <Item label="Product" name="product"/>
            <Item label="Art" name="art"/>
            <Item label="Log" name="log"/>
          </ul>
          <div id="layer3">
            <div id="layer4">
            </div>
            <ul id="contacts">
              <contact name="Github" href="//github.com/elzup"
                       type="github"></contact>
              <contact name="Twitter" href="//twitter.com/_elzup_"
                       type="twitter"></contact>
              <contact name="Facebook" href="//www.facebook.com/takahashiroto"
                       type="facebook"></contact>
              <contact name="" href="" type="skip"
                       is_not_skip="false"></contact>
              <contact name="Hatena" href="//twitter.com/_elzup_"
                       type="hatena"></contact>
              <contact name="Qiita" href="//qiita.com/elzup"
                       type="qiita"></contact>
              <contact name="Tumbler" href="//elzup.tumblr.com"
                       type="tumblr"></contact>
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
