import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import CreateDiscountForm from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Suspense>
            <CreateDiscountForm />
          </Suspense>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
