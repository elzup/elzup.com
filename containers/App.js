import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as MenuActions from '../actions'

class App extends Component {
  render() {
    const styles = require('./App.scss');
    const { menus, actions } = this.props
    return (
      <div className={styles.app}>
        <MainSection menus={menus} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  menus: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    menus: state.menus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
