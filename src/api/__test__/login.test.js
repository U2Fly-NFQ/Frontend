import axiosInstance from '../'
import MockAdapter from 'axios-mock-adapter'
import { loginApi } from '../Auth/login'

describe('LoginAPI', () => {
  let mock

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('LoginAPI', () => {
    it('Login with username and password', async () => {
      const rs = {
        user: {
          id: '1',
          username: 'u2fly',
        },
        token: 'This-is-sercet-token',
      }

      mock.onPost(`${process.env.REACT_APP_SERVER_API}/login`).reply(200, rs)

      const result = await loginApi({
        username: 'u2fly',
        password: '123',
      })

      expect(mock.history.post[0].url).toEqual(`/login`)
      expect(result.data).toEqual(rs)
    })
  })
})
