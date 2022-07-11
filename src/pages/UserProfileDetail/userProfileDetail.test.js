import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import UserProfileDetail from './'
import renderer from 'react-test-renderer'

describe('User profile detail', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <UserProfileDetail />
          </Suspense>
        </Router>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
