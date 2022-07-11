import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SubNavbar from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'

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
          <I18nextProvider i18n={i18n}>
            <SubNavbar />
          </I18nextProvider>
        </Suspense>
      </Router>
    )

    fireEvent.click(screen.getByTestId('booking-profile'))

    // userEvent.click(screen.getByTestId('bookingProflie'))
  })
})
