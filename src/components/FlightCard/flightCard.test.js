import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import FlightCard from './'

describe('component/FlightCard', () => {
  it('renders correctly', () => {
    const flight = {
      id: 1,
      code: 'VN156',
      arrival: {
        id: 2,
        iata: 'HAN',
        name: 'Noi Bai International Airport',
        city: 'Ha Noi',
        image: 'https://wallpapercave.com/wp/wp2691201.jpg',
      },
      departure: {
        id: 3,
        iata: 'VCA',
        name: 'Can Tho International Airport',
        city: 'Can Tho',
        image:
          'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
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
        seatAvailable: 47,
        discount: 0.1,
      },
    }
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <FlightCard data={flight} />
            </Suspense>
          </Router>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders data correctly', () => {
    const flight = {
      id: 1,
      code: 'VN156',
      arrival: {
        id: 2,
        iata: 'HAN',
        name: 'Noi Bai International Airport',
        city: 'Ha Noi',
        image: 'https://wallpapercave.com/wp/wp2691201.jpg',
      },
      departure: {
        id: 3,
        iata: 'VCA',
        name: 'Can Tho International Airport',
        city: 'Can Tho',
        image:
          'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
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
        seatAvailable: 47,
        discount: 0.1,
      },
    }

    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense>
            <FlightCard data={flight} />
          </Suspense>
        </Router>
      </I18nextProvider>
    )

    const departureIata = screen.getByTestId('departure-iata')
    const arriavalIata = screen.getByTestId('arrival-iata')
    const bookingBtn = screen.getByTestId('booking-btn')

    expect(bookingBtn).toBeInTheDocument()
    expect(departureIata.textContent).toBe('VCA')
    expect(arriavalIata.textContent).toBe('HAN')
  })

  it('should submit data correctly', () => {
    const flight = {
      id: 1,
      code: 'VN156',
      arrival: {
        id: 2,
        iata: 'HAN',
        name: 'Noi Bai International Airport',
        city: 'Ha Noi',
        image: 'https://wallpapercave.com/wp/wp2691201.jpg',
      },
      departure: {
        id: 3,
        iata: 'VCA',
        name: 'Can Tho International Airport',
        city: 'Can Tho',
        image:
          'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
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
        seatAvailable: 47,
        discount: 0.1,
      },
    }

    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense>
            <FlightCard data={flight} />
          </Suspense>
        </Router>
      </I18nextProvider>
    )

    const bookingBtn = screen.getByTestId('booking-btn')

    fireEvent.click(bookingBtn)

    expect(window.location.pathname).toBe('/')
  })
})
