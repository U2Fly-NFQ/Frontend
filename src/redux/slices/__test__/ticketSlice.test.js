import ticketSlice, {
  initialState,
  fetchTickets,
  fetchHistoryBooking,
  fetchCancelBooking,
  fetchRatingBooking,
} from '../ticketSlice'
import { store } from '../../store'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'

// Adding mock network response that is used in tests
const getTicketsRs = {
  status: '',
  data: [],
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet('/tickets').reply(200, getTicketsRs)
  mock.onPost('/stripe/refund').reply(200, getTicketsRs)
  mock.onPost('/rate').reply(200, getTicketsRs)
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

  it('Should be able to get all booking', async () => {
    // Dispatching the action
    const result = await store.dispatch(fetchHistoryBooking())

    expect(result.type).toBe('ticket/fetchHistoryBooking/fulfilled')
  })

  it('Should cancel booking successfully', async () => {
    // Dispatching the action
    const result = await store.dispatch(fetchCancelBooking())

    expect(result.type).toBe('ticket/fetchCancelBooking/fulfilled')
  })

  it('Should fetch rating successfully', async () => {
    // Dispatching the action
    const result = await store.dispatch(fetchRatingBooking())

    expect(result.type).toBe('ticket/fetchRatingBooking/fulfilled')
  })
})
