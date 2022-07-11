import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserTicket from './'
import { render, screen, fireEvent } from '@testing-library/react'
// Storage Mock
const fakeLocalStorage = (function () {
  let store = {}

  return {
    getItem: function (key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    removeItem: function (key) {
      delete store[key]
    },
    clear: function () {
      store = {}
    },
  }
})()
describe('Sub nav bar test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    })
  })

  it('renders correctly', () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 1,
      })
    )
    render(
      <Router>
        <Suspense>
          <UserTicket />
        </Suspense>
      </Router>
    )

    fireEvent.click(screen.getByTestId('booking-profile'))

    // userEvent.click(screen.getByTestId('bookingProflie'))
  })
})
