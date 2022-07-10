import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserBookingTable from './'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
describe('Navigation bar test', () => {
  it('renders correctly', () => {
    let tickets = [
      {
        id: 21,
        passenger: {
          name: 'Sang Nguyen',
          gender: 'Male',
          birthday: {
            date: '2000-01-24 00:00:00.000000',
            timezone_type: 3,
            timezone: 'UTC',
          },
          address: 'Can Tho',
          identification: '222',
          accountId: 2,
          email: 'sang@gg.com',
        },
        totalPrice: 98.01,
        ticketOwner: 'Sang Nguyen',
        paymentId: 'pi_3LJk17GLKOTVyCxb1DVaqeTo',
        email: 'sang@gg.com',
        discount: 0,
        seatType: 'Economy',
        createdAt: '2022-07-09 20:12:51',
        status: 'Booking successful',
        flights: [
          {
            id: 8,
            code: 'VN757',
            arrival: {
              id: 5,
              iata: 'PQC',
              name: 'Phu Quoc International Airport',
              city: 'Kien Giang',
              image: 'google.com',
            },
            departure: {
              id: 2,
              iata: 'HAN',
              name: 'Noi Bai International Airport',
              city: 'Ha Noi',
              image: 'google.com',
            },
            startTime: '20:00:00',
            startDate: '2022-07-10',
            duration: 1.5,
            airplane: {
              id: 4,
              name: 'Boeing 787-9 Dreamliner',
            },
            airline: {
              id: 2,
              name: 'Bamboo Airways',
              icao: 'BAV',
              image:
                'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-H.png',
            },
            seat: [
              {
                id: 1,
                name: 'Economy',
                price: 99,
                seatAvailable: 66,
                discount: 0.1,
              },
              {
                id: 2,
                name: 'Business',
                price: 159,
                seatAvailable: 15,
                discount: 0.1,
              },
            ],
            ticketFlight: {
              id: 16,
              isRating: null,
              createdAt: {
                date: '2022-07-09 20:12:51.000000',
                timezone_type: 3,
                timezone: 'UTC',
              },
              flight: {
                __initializer__: null,
                __cloner__: null,
                __isInitialized__: true,
              },
              ticket: {},
            },
          },
        ],
      },
    ]
    let ticketProcessedData = []

    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <UserBookingTable
              data={ticketProcessedData}
              loading={true}
              //   onCancel={handleCancelBooking}
            />
          </Provider>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
