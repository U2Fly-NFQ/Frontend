import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserBookingTable from './'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
describe('Booking table test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <UserBookingTable data={[]} loading={true} onCancel={() => {}} />
          </Provider>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
