import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles SAVE_COMMENT type properly', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

it('handles unknown types without crashing', () => {
  const newState = commentsReducer([], {})

  expect(newState).toEqual([])
})