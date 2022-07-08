import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import AirlineApi from '../Airline'

describe('AirlineAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  it('get airline list', async () => {
    const rs = {
      status: 'success',
      data: [],
    }

    mock.onGet(`${process.env.REACT_APP_SERVER_API}/airlines`).reply(200, rs)

    const result = await AirlineApi.getList()

    expect(mock.history.get[0].url).toEqual(`/airlines`)
    expect(result.data).toEqual(rs)
  })
})
