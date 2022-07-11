import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import SubNavBar from './'

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
  it('renders sub correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <I18nextProvider i18n={i18n}>
              <SubNavBar />
            </I18nextProvider>
          </Suspense>
        </Router>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly', async () => {
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
            <SubNavBar />
          </I18nextProvider>
        </Suspense>
      </Router>
    )
    const infoProfile = screen.getByTestId('booking-profile')
    const listBox = screen.getByText('career@nfq.asia')
    fireEvent.click(infoProfile)
    fireEvent.click(listBox)
    // userEvent.click(screen.getByTestId('bookingProflie'))
  })
})
