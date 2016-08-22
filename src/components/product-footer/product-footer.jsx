import React from 'react'
const Type = React.PropTypes
import style from './product-footer.css'
import ReactTooltip from 'react-tooltip'
import {ProductFooterLink} from '../product-footer-link/product-footer-link.jsx'

export class ProductFooter extends React.Component {
  render() {
    let tooltip = '';
    if (!this.props.is_alive) {
      tooltip = <ReactTooltip />
    }
    return (
      <div className={style.footer}>
        <ProductFooterLink is_alive={this.props.is_alive} type={"link"}
                           url={this.props.link}/>
        <ProductFooterLink type={"github"} url={this.props.github}/>
        <ProductFooterLink type={"trello"} url={this.props.trello}/>
        {tooltip}
      </div>
    )
  }
}

ProductFooter.propTypes = {
  is_alive: Type.bool.isRequired,
  link: Type.string,
  github: Type.string,
  trello: Type.string,
}
