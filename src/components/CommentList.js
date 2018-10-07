import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class CommentList extends PureComponent {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    )
  }
}

const mapState = state => {
  return { comments: state.comments }
}

export default connect(mapState)(CommentList)
