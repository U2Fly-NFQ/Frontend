import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import { endpoint, getList, get } from '../Ticket'

describe('TicketAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  it('get ticket List', async () => {
    const rs = {
      status: 'success',
      data: [],
    }

    mock.onGet(endpoint).reply(200, rs)

    const result = await getList()

    expect(result.data).toEqual(rs)
  })

  it('get a ticket', async () => {
    const rs = {
      status: 'success',
      data: [],
    }

    const id = 1

    mock.onGet(`/tickets/1`).reply(200, rs)

    const result = await get(1)

    expect(result.data).toEqual(rs)
  })
})
