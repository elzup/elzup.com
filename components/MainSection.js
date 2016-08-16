import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { menus, actions } = this.props

    return (
      <section className="main">
        <div className="eye-catch">

        </div>
        <div>
          <div className="menu">
            <ul className="menu-list">
              {menus.map((item) => {
                return <MenuItem key={item.id} item={item} />
              })}
            </ul>
          </div>
          <div className="social-links">
            <div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

MainSection.propTypes = {
  menus: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
