import airportSlice, { initialState, fetchAirports } from '../airportSlice'
import { store } from '../../store'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'

// Adding mock network response that is used in tests
const getAirportListRs = {
  status: '',
  data: [],
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/airports`).reply(200, getAirportListRs)
}

test('Should return initial state', () => {
  expect(
    airportSlice.reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState)
})

describe('AiportSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it('Should be able to get all airports', async () => {
    // Dispatching the action

    const result = await store.dispatch(fetchAirports())

    const aiportData = result.payload.data

    expect(result.type).toBe('airport/fetchAirports/fulfilled')

    expect(aiportData).toEqual(getAirportListRs.data)

    const state = store.getState().airports.data

    expect(state).toEqual(getAirportListRs.data)
  })
})
