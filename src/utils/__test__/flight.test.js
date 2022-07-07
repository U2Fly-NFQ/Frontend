import {
  getDurationFormat,
  addHourToTime,
  getPriceWithDiscount,
} from '../flight'

describe('Test filght until functions', () => {
  test.each([
    ['0.5', '30m'],
    ['1', '1h 0m'],
    ['1.5', '1h 30m'],
    ['2', '2h 0m'],
  ])('Duration format', (input, expected) => {
    expect(getDurationFormat(input)).toBe(expected)
  })

  test.each([
    { time: '00:00:00', hours: 0.5, expected: '00:30' },
    { time: '00:30:30', hours: 0.5, expected: '01:00' },
    { time: '00:59:00', hours: 0.5, expected: '01:29' },
    { time: '00:30:30', hours: 1, expected: '01:30' },
  ])('Add hour to time ($time, $hours)', ({ time, hours, expected }) => {
    expect(addHourToTime(time, hours)).toEqual(expected)
  })

  test.each([
    { price: 40, discount: 0.1, expected: '36.00' },
    { price: 12, discount: 0.5, expected: '6.00' },
    { price: 51, discount: 0.2, expected: '40.80' },
    { price: 22, discount: 0.1, expected: '19.80' },
  ])(
    'Get price with discount ($price, $discount)',
    ({ price, discount, expected }) => {
      expect(getPriceWithDiscount(price, discount)).toEqual(expected)
    }
  )
})
