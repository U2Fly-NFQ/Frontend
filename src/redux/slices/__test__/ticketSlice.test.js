import ticketSlice, { initialState, fetchTickets } from '../ticketSlice'
import { store } from '../../store'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'
import { endpoint } from '../../../api/Ticket'

// Adding mock network response that is used in tests
const getTicketsRs = {
  status: '',
  data: [],
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(endpoint).reply(200, getTicketsRs)
}

test('Should return initial state', () => {
  expect(
    ticketSlice.reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState)
})

describe('TicketSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it('Should be able to get all tickets', async () => {
    // Dispatching the action

    const result = await store.dispatch(fetchTickets())

    const ticketData = result.payload.data

    expect(result.type).toBe('ticket/fetchTickets/fulfilled')

    expect(ticketData).toEqual(getTicketsRs.data)

    const state = store.getState().airports.data

    expect(state).toEqual(getTicketsRs.data)
  })
})
