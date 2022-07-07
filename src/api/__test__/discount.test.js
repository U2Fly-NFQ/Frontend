import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import discountApi from '../Discount'

describe('AirportAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('get by id', () => {
    it('get discount by id', async () => {
      const rs = {
        status: 'success',
        data: [],
      }

      mock
        .onGet(`${process.env.REACT_APP_SERVER_API}/discounts/1`)
        .reply(200, rs)

      const result = await discountApi.getDiscountById(1)

      expect(mock.history.get[0].url).toEqual(`/discounts/1`)
      expect(result.data).toEqual(rs)
    })
  })
})
