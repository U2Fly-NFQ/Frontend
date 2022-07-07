import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './'

describe('Navigation bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
