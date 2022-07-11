import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserBookingDetail from './'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
describe('Navigation bar test', () => {
  it('renders correctly', () => {
    let detailData = {
      id: 1,
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
      totalPrice: 12980,
      ticketOwner: 'Sang Nguyen',
      paymentId: 'pi_3LJbllGLKOTVyCxb1r6LnRCF',
      email: 'sang@gg.com',
      discount: 5,
      seatType: 'Economy',
      createdAt: '2022-07-09 11:24:51',
      status: 1,
      flights: [
        {
          id: 20,
          code: 'VJ747',
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
    }
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
