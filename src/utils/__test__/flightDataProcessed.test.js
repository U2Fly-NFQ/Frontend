import { convertNumberToUSD } from '../numberFormater'

describe('to be Data Processed', () => {
  it('should return number', () => {
    expect(convertNumberToUSD(1)).toEqual('$1.00')
  })
})
