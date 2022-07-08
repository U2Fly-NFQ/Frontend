import bookingFlightsSlice, { initialState } from '../bookingFlightsSlice'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'

// Adding mock network response that is used in tests
const bookingFlightsRs = {
  status: '',
  data: [],
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/flights/1`).reply(200, bookingFlightsRs)
}

test('Should return initial state', () => {
  expect(
    bookingFlightsSlice.reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState)
})
