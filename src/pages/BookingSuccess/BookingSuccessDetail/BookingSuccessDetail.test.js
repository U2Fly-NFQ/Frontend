import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

import PaymentFlight from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Suspense>
              <PaymentFlight />
            </Suspense>
          </Router>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})