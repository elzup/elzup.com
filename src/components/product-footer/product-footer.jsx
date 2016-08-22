import React from 'react'
const Type = React.PropTypes
import style from './product-footer.css'
import ReactTooltip from 'react-tooltip'

export class ProductFooter extends React.Component {
  render() {
    const links = [];
    let tooltip = '';
    if (this.props.link != undefined) {
      if (this.props.is_alive) {
        links.push(
          <a key={1} href={this.props.link} className={style.link}
             target="_blank">
            <span>↗</span>
          </a>)
      } else {
        tooltip = <ReactTooltip />
        links.push(
          <span key={1} className={style.broken_link} target="_blank">
            <span data-tip="SITE CLOSED">↗</span>
          </span>)
      }
    }
    if (this.props.github != undefined) {
      links.push(
        <a key={2} href={this.props.github} className={style.link_github}
           target="_blank">
          <img src="/images/icon/mk-github.png" alt=""/>
        </a>)
    }
    if (this.props.trello != undefined) {
      links.push(
        <a key={3} href={this.props.trello} className={style.link_trello}
           target="_blank">
          <img src="/images/icon/mk-trello.png" alt=""/>
        </a>)
    }
    return (
      <div className={style.footer}>
        {links}
        {tooltip}
      </div>
    )
  }
}

ProductFooter.propTypes = {
  is_alive:  Type.bool.isRequired,
  link:  Type.string,
  github:  Type.string,
  trello:  Type.string,
}
