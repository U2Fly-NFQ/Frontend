import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CreateDiscountForm from './CreateDiscountForm'
describe('Modal rating', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <CreateDiscountForm />
          </Suspense>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
