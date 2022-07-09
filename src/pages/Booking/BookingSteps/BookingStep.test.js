import { I18nextProvider } from 'react-i18next'
import i18n from '../../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import BookingSteps from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Suspense>
                <BookingSteps />
              </Suspense>
            </Router>
          </I18nextProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
