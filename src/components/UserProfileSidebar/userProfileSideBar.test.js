import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProfileSidebar from './'

describe('User profile page search test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <UserProfileSidebar />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
