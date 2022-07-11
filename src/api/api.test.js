import axiosInstance from './index'

describe('AirportAPI', () => {
  describe('EnpointAPI', () => {
    it('should be called', async () => {
      const fn = jest.spyOn(axiosInstance, 'setToken')
      axiosInstance.setToken('token')

      expect(fn).toHaveBeenCalled()
    })
  })
})
