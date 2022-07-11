import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserBookingDetail from './'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
describe('Navigation bar test', () => {
  it('renders correctly', () => {
    let detailData = [
      {
        createdAt: '2022-07-11 10:39:13',
        discount: 0,
        email: 'tolehoai@gmail.com',

        id: 50,
        passenger: {
          id: 1,
          name: 'Hoai To',
          gender: 'Male',
          address: 'Can Tho',
          identification: '3947591745',
        },
        paymentId: 'pi_3LKK0tGLKOTVyCxb1yfF9I1I',
        seatType: 'Business',
        status: 'Booked',
        ticketOwner: 'Hoai To',
        totalPrice: '$216.81',
        flights: [
          {
            id: 20,
            ETA: '07-12-2022 09:30 PM',
            ETD: '07-12-2022 08:00 PM',
            code: 'VJ747',
            arrival: 'Ho Chi Minh (SGN)',
            boardingTime: '07-12-2022 07:30 PM',
            code: 'VJ747',
            departure: 'Can Tho (VCA)',
            duration: 1.5,
            id: 20,
            isRating: true,
            arrival: {
              id: 4,
              iata: 'SGN',
              name: 'Tan Son Nhat International Airport',
              city: 'Ho Chi Minh',
              image: 'https://wallpaperaccess.com/full/1631415.jpg',
            },
            departure: {
              id: 3,
              iata: 'VCA',
              name: 'Can Tho International Airport',
              city: 'Can Tho',
              image:
                'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
            },
            startTime: '20:00:00',
            startDate: '2022-07-12',
            duration: 1.5,
            airplane: {
              id: 4,
              name: 'Boeing 787-9 Dreamliner',
            },
            airline: {
              id: 2,
              name: 'Bamboo Airways',
              icao: 'BAV',
              rating: null,
              image:
                'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-H.png',
            },
            seat: [
              {
                id: 1,
                name: 'Economy',
                price: 119,
                seatAvailable: 99,
                discount: 0.1,
              },
              {
                id: 2,
                name: 'Business',
                price: 219,
                seatAvailable: 96,
                discount: 0.1,
              },
            ],
          },
        ],
      },
    ]
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <UserBookingDetail detailData={detailData} />
          </Provider>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
