import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import UserProfile from './'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

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

describe('User history page', () => {
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

    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <UserProfile />
          </Suspense>
        </Router>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
