import { convertNumberToUSD } from '../numberFormater'

describe('to be convert to USD', () => {
  it('should return number', () => {
    expect(convertNumberToUSD(1)).toEqual('$1.00')
  })
})
