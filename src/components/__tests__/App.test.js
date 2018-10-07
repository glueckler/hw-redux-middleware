import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  // find returns an array of each instance that was found..
  // there should be exactly one in this example
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
