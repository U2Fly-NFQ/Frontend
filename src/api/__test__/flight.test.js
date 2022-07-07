import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import FlightApi from '../Flight'

describe('FlightApi', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('get list', () => {
    it('get flight List', async () => {
      const rs = {
        status: 'success',
        data: [],
      }

      mock.onGet(`${process.env.REACT_APP_SERVER_API}/flights`).reply(200, rs)

      const result = await FlightApi.getList()

      expect(mock.history.get[0].url).toEqual(`/flights`)
      expect(result.data).toEqual(rs)
    })
  })
})
