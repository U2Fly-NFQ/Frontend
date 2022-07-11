import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FlightTrip from './'

import renderer from 'react-test-renderer'
const mockStore = configureStore([])
describe('Admin discount Layout', () => {
  let store
  let component
  let flight = {
    departure: 'SGN',
    arrival: 'VCA',
    startDate: '2022-07-10',
    seatType: 'Economy',
    seatAvailable: 1,
    ticketType: 'oneWay',
    returnDate: '2022-07-10',
    id: '',
    roundId: '',
    startDateRoundTrip: '',
  }
  beforeEach(() => {
    store = mockStore({
      bookingFlight: {
        dataFlight: {
          seat: { price: 56, name: '50' },
          departure: { city: 'hel;lo' },
          arrival: { city: 'oke' },
          airline: { name: 'thnag', image: '123123' },
          airplane: { name: 'oke' },
        },
        discountInfo: { percent: 0 },
        dataRoundTripFlight: {
          seat: { price: 56, name: '50' },
          departure: { city: 'hel;lo' },
          arrival: { city: 'oke' },
          airplane: { name: 'oke' },
          airline: { name: 'thnag', image: '123123' },
        },
      },
    })
  })
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Suspense>
          <FlightTrip />
        </Suspense>
      </Provider>
    )

    expect(tree).toMatchSnapshot()
  })
})
