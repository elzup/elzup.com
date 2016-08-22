import React from 'react'
const Type = React.PropTypes
import style from './product.css'
import { ProductFooter} from '../product-footer/product-footer.jsx'

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img_url = '/images/product/sc_' + this.props.sid + '.png';
    let title;
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
        <ProductFooter
          key={this.props.sid}
          is_alive={this.props.is_alive}
          link={this.props.link}
          github={this.props.github}
          trello={this.props.trello}
        />
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
