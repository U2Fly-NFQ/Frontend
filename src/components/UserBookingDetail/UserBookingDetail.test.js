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
      flights: [],
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
