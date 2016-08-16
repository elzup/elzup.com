import React, {Component, PropTypes} from 'react'

class MenuItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    const {item} = this.props

    return (
      <li>
        <a href="#">{item.name}</a>
      </li>
    )
  }
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default MenuItem
