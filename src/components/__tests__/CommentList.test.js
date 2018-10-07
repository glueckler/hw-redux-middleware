import React from 'react'
import {mount} from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {
  const initialState = {comments: ['comment1', 'comment2']}
  wrapped = mount(<Root initialState={initialState}><CommentList/></Root>)
})

it('Creates one <li></li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('Outputs the correct text per comment', () => {
  // render() return a cheerio wrapper
  expect(wrapped.render().text()).toContain('comment1')
  expect(wrapped.render().text()).toContain('comment2')
})