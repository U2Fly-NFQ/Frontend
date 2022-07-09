import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import FlightCard from '../FlightCard'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component
  beforeEach(() => {
    let data = {
      status: 'success',
      flight: {
        id: 1,
        code: 'VN156',
        arrival: {
          id: 2,
          iata: 'HAN',
          name: 'Noi Bai International Airport',
          city: 'Ha Noi',
          image: 'google.com',
        },
        departure: {
          id: 3,
          iata: 'VCA',
          name: 'Can Tho International Airport',
          city: 'Can Tho',
          image: 'google.com',
        },
        startTime: '07:00:00',
        startDate: '2022-07-09',
        duration: 1.5,
        airplane: {
          id: 1,
          name: 'Boeing 787',
        },
        airline: {
          id: 1,
          name: 'Vietnam Airlines',
          icao: 'HVN',
          image:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
        },
        seat: {
          id: 1,
          name: 'Economy',
          price: 59,
          seatAvailable: 49,
          discount: 0.1,
        },
      },
    }
    component = renderer.create(
      //   <Provider store={store}>
      <Router>
        <FlightCard loading={data.status} data={data.flight} />
      </Router>
      //   </Provider>
    )
  })
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
