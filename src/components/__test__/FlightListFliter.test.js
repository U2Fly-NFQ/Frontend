import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import FlightListFilter from '../FlightListFilter'
const mockStore = configureStore([])
describe('My Connected React-Redux Component', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({ filter: { airlines: [] } })
    component = renderer.create(
      <Provider store={store}>
        <Router>
          <FlightListFilter />
        </Router>
      </Provider>
    )
  })
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
