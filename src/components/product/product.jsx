import React from 'react'
const Type = React.PropTypes
import style from './product.css'
import ReactTooltip from 'react-tooltip'

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img_url = '/images/product/sc_' + this.props.sid + '.png';
    const links = [];
    let title;
    let tooltip = '';
    const base_title = <h2>{this.props.title}</h2>;
    if (this.props.is_alive) {
      title = <a href={this.props.link} className={style.title_link} target="_blank">{base_title}</a>
    } else {
      title = base_title;
    }
    const members = this.props.members.map(x => {
      const link = "//twitter.com/" + x.name
      return <li key={this.props.sid + ":" + x.name}><a href={link}>@{x.name}</a>: {x.description}</li>
    })
    if (this.props.link != undefined) {
      if (this.props.is_alive) {
        links.push(
          <a key={1} href={this.props.link} className={style.link} target="_blank">
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
        <a key={2} href={this.props.github} className={style.link_github} target="_blank">
          <img src="/images/icon/mk-github.png" alt=""/>
        </a>)
    }
    if (this.props.trello != undefined) {
      links.push(
        <a key={3} href={this.props.trello} className={style.link_trello} target="_blank">
          <img src="/images/icon/mk-trello.png" alt=""/>
        </a>)
    }
    const tags = this.props.tags.map(x => <div key={this.props.sid + ":" + x}>{x}</div>)
    return (
      <li className={style.product}>
        <div className={style.img_wrap}>
          <img src={img_url} />
        </div>
        { title }
        <p>{this.props.subtitle}</p>
        <p className={style.description}>{this.props.description}</p>
        <ul className={style.members}>
          {members}
        </ul>
        <div className={style.tags}>
          {tags}
        </div>
        <p className={style.footer}>
          {links}
        </p>
        {tooltip}
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
