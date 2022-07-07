import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AdminSidebar from './'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <AdminSidebar />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
