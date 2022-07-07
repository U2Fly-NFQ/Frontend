import { updateLs, getLsObj } from '../localStorage'

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

describe('Test local storage until functions', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    })
  })

  it('Saves the key with string value to the storage', () => {
    updateLs('token', 'this-is-secret-token')

    expect(window.localStorage.getItem('token')).toEqual('this-is-secret-token')
  })

  it('Get object value to the storage', () => {
    updateLs('user', {
      id: 'user-id',
      username: 'name',
    })

    expect(getLsObj('user')).toEqual({
      id: 'user-id',
      username: 'name',
    })
  })
})
