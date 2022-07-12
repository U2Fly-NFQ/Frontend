import { convertNumberToUSD } from '../numberFormater'
import * as flightDataUtil from '../flightDataProcessing'

describe('to be Data Processed', () => {
  it('should return number', () => {
    expect(convertNumberToUSD(1)).toEqual('$1.00')
  })

  // it('should return correct flight data', () => {
  //   const spy = jest
  //     .spyOn(flightDataUtil, 'flightDataProcessed')
  //     .mockImplementation(() => () => {})
  //   flightDataUtil.flightDataProcessed()()
  //
  //   expect(spy).toHaveBeenCalled()
  // })

  it('should return correct flight data', () => {
    let ticketData = {
      id: 50,
      passenger: {
        id: 1,
        name: 'Hoai To',
        gender: 'Male',
        address: 'Can Tho',
        identification: '3947591745',
        accountId: 1,
        email: 'tolehoai@gmail.com',
        birthday: {
          date: '2000-04-03 00:00:00.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
      },
      totalPrice: 216.81,
      ticketOwner: 'Hoai To',
      paymentId: 'pi_3LKK0tGLKOTVyCxb1yfF9I1I',
      email: 'tolehoai@gmail.com',
      discount: 0,
      seatType: 'Business',
      createdAt: '2022-07-11 10:39:13',
      status: 1,
      flights: [
        {
          id: 20,
          code: 'VJ747',
          arrival: {
            id: 4,
            iata: 'SGN',
            name: 'Tan Son Nhat International Airport',
            city: 'Ho Chi Minh',
            image: 'https://wallpaperaccess.com/full/1631415.jpg',
          },
          departure: {
            id: 3,
            iata: 'VCA',
            name: 'Can Tho International Airport',
            city: 'Can Tho',
            image:
              'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
          },
          startTime: '20:00:00',
          startDate: '2022-07-12',
          duration: 1.5,
          airplane: {
            id: 4,
            name: 'Boeing 787-9 Dreamliner',
          },
          airline: {
            id: 2,
            name: 'Bamboo Airways',
            icao: 'BAV',
            rating: null,
            image:
              'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-H.png',
          },
          seat: [
            {
              id: 1,
              name: 'Economy',
              price: 119,
              seatAvailable: 99,
              discount: 0.1,
            },
            {
              id: 2,
              name: 'Business',
              price: 219,
              seatAvailable: 96,
              discount: 0.1,
            },
          ],
        },
      ],
    }
    let flightDataProcessed = [
      {
        id: 20,
        code: 'VJ747',
        arrival: 'Ho Chi Minh (SGN)',
        departure: 'Can Tho (VCA)',
        startTime: '20:00:00',
        startDate: '2022-07-12',
        duration: 1.5,
        airplane: {
          id: 4,
          name: 'Boeing 787-9 Dreamliner',
        },
        airline: {
          id: 2,
          name: 'Bamboo Airways',
          icao: 'BAV',
          rating: null,
          image:
            'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-H.png',
        },
        seat: [
          {
            id: 1,
            name: 'Economy',
            price: 119,
            seatAvailable: 99,
            discount: 0.1,
          },
          {
            id: 2,
            name: 'Business',
            price: 219,
            seatAvailable: 96,
            discount: 0.1,
          },
        ],
        ETD: '07-12-2022 08:00 PM',
        ETA: '07-12-2022 09:30 PM',
        boardingTime: '07-12-2022 07:30 PM',
        isRating: true,
      },
    ]
    expect(flightDataUtil.flightDataProcessed(ticketData)).toEqual(
      flightDataProcessed
    )
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
