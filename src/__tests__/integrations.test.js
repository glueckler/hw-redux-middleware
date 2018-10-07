import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  // turn off requests by axios and use moxios instead
  moxios.install()
  // if any requests are made intercept and simulate axios
  moxios.stubRequest(
    'http://jsonplaceholder.typicode.com/comments', 
    {
      status: 200,
      response: [{
        name: 'fetched1',
      },
      {
        name: 'fetched2',
      }]
    }
  )
})

afterEach(() => {
  // to insure that we don't use the subRequest above in other tests
  moxios.uninstall() 
})

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the App
  const wrapped = mount(<Root><App/></Root>)
  
  // find fetch comments button and click it
  wrapped.find('.fetch-comments').simulate('click')

  // introduce a tiny bit of time for moxios to do it's thing
  moxios.wait(() => {
    // update the wrapped with proper components
    wrapped.update()
    
    // Expect to find a list of comments
    // beware if this assertion fails the error isn't so clear..
    // Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL
    expect(wrapped.find('li').length).toEqual(2)

    // use jests done() function so jest won't finish testing before this test
    done()

    // because we used mount
    wrapped.unmount()
  })
})