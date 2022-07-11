import { I18nextProvider } from 'react-i18next'
import i18n from '../../../translations'
import React, { Suspense } from 'react'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import BookingCoupon from './'
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
    const form = await screen.findByTestId('bookingCoupon')
    const inputValue = await screen.findByTestId('inputDiscount')
    const btnCoupon = screen.getByTestId('btnCoupon')
    fireEvent.change(inputValue, {
      target: {
        value: '2',
      },
    })
    form.submit(form)
    fireEvent.click(btnCoupon)
    expect(screen.getByTestId('inputDiscount').value).toBe('2')
    expect(window.scrollY).toBe(0)
  })
})
