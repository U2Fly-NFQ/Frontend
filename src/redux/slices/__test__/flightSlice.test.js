import flightSlice, { initialState, fetchFlights } from '../flightSlice'
import { store } from '../../store'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'

// Adding mock network response that is used in tests
const getFlightRs = {
  status: '',
  data: {
    oneway: {
      flight: [],
      pagination: {},
    },
    roundtrip: {
      flight: [],
      pagination: {},
    },
  },
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/flights`).reply(200, getFlightRs)
}

test('Should return initial state', () => {
  expect(
    flightSlice.reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState)
})

describe('FlightSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it('Should be able to get all flights', async () => {
    const result = await store.dispatch(fetchFlights({}))

    const flightData = result.payload

    expect(result.type).toBe('flight/fetchFlights/fulfilled')

    expect(flightData).toEqual(getFlightRs.data)

    const state = store.getState().flights

    expect(state.oneway).toEqual(getFlightRs.data.oneway)

    expect(state.roundtrip).toEqual(getFlightRs.data.roundtrip)
  })
})
