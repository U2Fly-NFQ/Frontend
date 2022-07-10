import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import MyConnectedComponent from '.'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      bookingFlight: {
        dataFlight: { seat: { price: 56, name: '50' } },
        discountInfo: { percent: 0 },
        dataRoundTripFlight: { seat: { price: 56, name: '50' } },
      },
    })
    let flight = {
      id: '',
      roundId: '',
      departure: 'VCA',
      arrival: 'SGN',
      startDate: '2022-07-10',
      seatType: 'Economy',
      seatAvailable: '1',
      ticketType: 'roundTrip',
      startDateRoundTrip: '2022-07-13',
    }
    component = renderer.create(
      <Provider store={store}>
        <MyConnectedComponent flight={flight} />
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
