import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import airportApi from '../Airport'

describe('AirportAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('get list', () => {
    it('get airport List', async () => {
      const rs = {
        status: 'success',
        data: [],
      }

      mock.onGet(`${process.env.REACT_APP_SERVER_API}/airports`).reply(200, rs)

      const result = await airportApi.getList()

      expect(mock.history.get[0].url).toEqual(`/airports`)
      expect(result.data).toEqual(rs)
    })
  })
})
