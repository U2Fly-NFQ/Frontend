import { I18nextProvider } from 'react-i18next'
import i18n from '../../../translations'
import React, { Suspense } from 'react'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import BookingPayment from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Suspense>
                <BookingPayment />
              </Suspense>
            </Router>
          </I18nextProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should finish', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Suspense>
            <BookingPayment />
          </Suspense>
        </Router>
      </Provider>
    )

    const radioButton = screen.getByDisplayValue('0')
    fireEvent.click(radioButton)
  })
})
