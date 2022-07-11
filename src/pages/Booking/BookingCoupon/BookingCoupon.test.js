import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from '../../../redux/store'
import i18n from '../../../translations'

import BookingCoupon from './'
import userEvent from '@testing-library/user-event'
describe('Sub nav bar test', () => {
  it('should finish', async () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <BookingCoupon />
            </Suspense>
          </Router>
        </I18nextProvider>
      </Provider>
    )

    userEvent.type(screen.getByTestId('inputDiscount'), '2')
    userEvent.click(screen.getByTestId('bookingCoupon'))

    expect(screen.getByTestId('inputDiscount').value).toBe('2')
    expect(window.scrollY).toBe(0)
  })
})
