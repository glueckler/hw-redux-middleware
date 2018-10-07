// notice this file begins with a lower case "r"

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      // if user is not logged in.. redirect
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapState = (state) => {
    return {
      auth: state.auth,
    }
  }

  return connect(mapState)(ComposedComponent)
}
