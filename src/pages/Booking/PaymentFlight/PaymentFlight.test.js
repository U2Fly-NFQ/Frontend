import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import renderer from 'react-test-renderer'
import i18n from '../../../translations'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PaymentFlight from './'

const mockStore = configureStore([])

describe('Booking Passenger bar test', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      bookingFlight: {
        userInformation: { id: '123', name: 'John Smith' },
        dataFlight: { seat: { price: 56, name: '50' } },
        discountInfo: { percent: 0 },
        dataRoundTripFlight: { seat: { price: 56, name: '50' } },
      },
    })
  })
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Suspense>
                <PaymentFlight />
              </Suspense>
            </Router>
          </I18nextProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should subtmit correctly', async () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <PaymentFlight />
            </Suspense>
          </Router>
        </I18nextProvider>
      </Provider>
    )

    const radioButton = screen.getByText('Stripe')
    fireEvent.click(radioButton)
    const Payment = await screen.findByTestId('formPayment')
    fireEvent.submit(Payment)
  })
})
