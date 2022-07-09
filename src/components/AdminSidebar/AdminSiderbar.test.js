import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BookingBanner from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <BookingBanner />
          </Suspense>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
