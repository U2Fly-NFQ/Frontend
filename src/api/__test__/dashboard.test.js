import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import { get } from '../Dashboard'

describe('AirportAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('Dashboard', () => {
    it('get all reports', async () => {
      const rs = {
        status: 'success',
        data: [],
      }

      mock.onGet(`${process.env.REACT_APP_SERVER_API}/dashboard`).reply(200, rs)

      const result = await get()

      expect(mock.history.get[0].url).toEqual(`/dashboard`)
      expect(result.data).toEqual(rs)
    })
  })
})
