import bookingSuccessSlice, {
  getTicketInformation,
  initialState,
} from '../bookingSuccessSlice'
import axiosInstance from '../../../api'
import { store } from '../../store'
import MockAdapter from 'axios-mock-adapter'

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/tickets/1`).reply(200, {
    status: '',
    data: [],
  })
}

describe('BookingSuccessSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  test('Should return initial state', () => {
    expect(
      bookingSuccessSlice.reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState)
  })

  it('get ticket information by id', async () => {
    const result = await store.dispatch(getTicketInformation(1))

    expect(result.type).toBe('bookingSuccess/getTicketInformation/fulfilled')
  })
})
