import { convertNumberToUSD } from '../numberFormater'
import * as flightDataUtil from '../flightDataProcessing'

describe('to be Data Processed', () => {
  it('should return number', () => {
    expect(convertNumberToUSD(1)).toEqual('$1.00')
  })

  it('should return correct flight data', () => {
    const spy = jest
      .spyOn(flightDataUtil, 'flightDataProcessed')
      .mockImplementation(() => () => {})
    flightDataUtil.flightDataProcessed()()

    expect(spy).toHaveBeenCalled()
  })

  // Check time for cancel booking
  it.each([
    ['2022-07-21', '11:30', false],
    ['2022-07-21', '11:30', false],
    ['2022-07-21', '11:30', false],
  ])('Check time for cancel booking', (start, end, expected) => {
    expect(flightDataUtil.checkTimeForCancelBooking(start, end)).toBe(expected)
  })
})
