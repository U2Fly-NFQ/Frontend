import bookingFlightsSlice, {
  initialState,
  getDataFlights,
  getDiscountCheck,
  getUserDataInBooking,
  createBookingFlight,
  getRoundTripBookingFlightAsync,
  addDataIntoBookingFlight,
  changeCurrentMethod,
} from '../bookingFlightsSlice'
import axiosInstance from '../../../api'
import { store } from '../../store'
import MockAdapter from 'axios-mock-adapter'

// Adding mock network response that is used in tests
const bookingFlightsRs = {
  id: 1,
  code: 'VN156',
  arrival: {
    id: 2,
    iata: 'HAN',
    name: 'Noi Bai International Airport',
    city: 'Ha Noi',
    image: 'https://wallpapercave.com/wp/wp2691201.jpg',
  },
  departure: {
    id: 3,
    iata: 'VCA',
    name: 'Can Tho International Airport',
    city: 'Can Tho',
    image:
      'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
  },
  startTime: '07:00:00',
  startDate: '2022-07-09',
  duration: 1.5,
  airplane: {
    id: 1,
    name: 'Boeing 787',
  },
  airline: {
    id: 1,
    name: 'Vietnam Airlines',
    icao: 'HVN',
    rating: null,
    image:
      'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
  },
  seat: [
    {
      id: 1,
      name: 'Economy',
      price: 59,
      seatAvailable: 47,
      discount: 0.1,
    },
    {
      id: 2,
      name: 'Business',
      price: 119,
      seatAvailable: 50,
      discount: 0.1,
    },
  ],
}

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/flights/1`).reply(200, {
    status: '',
    data: bookingFlightsRs,
  })
  mock.onGet(`/discounts/1`).reply(200, {
    status: '',
    data: [],
  })
  mock.onGet(`/passengers/1`).reply(200, {
    status: '',
    data: {
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
  })
  mock.onPost(`/stripe`).reply(200, {
    status: 'success',
    data: {
      checkoutURL:
        'https://checkout.stripe.com/pay/cs_test_a1Pr6709zPBKNZil9CP54fEhT0xFPHjvNkJJUePdSjCFknM98H27oPY5c0#fidkdWxOYHwnPyd1blpxYHZxWjA0SU1KS0ZCSU5KUVN8Rn1ncn91QWZUXFFWZ259UW9%2FbTZvVFxoMTxydHNAdGZVN2djYFFUanRmfVJvbXc3VEY8TUlcZ0tXf0tWdT1gbk91d3VyZnVgdzRENTVQdFNfdTZWaicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',
    },
  })
}

describe('FlightSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  test('Should return initial state', () => {
    expect(
      bookingFlightsSlice.reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState)
  })

  it('Should be able flight by id', async () => {
    const result = await store.dispatch(getDataFlights(1))

    expect(result.type).toBe('bookingFlight/getDataFlights/fulfilled')
  })

  it('cannot check discount from API', async () => {
    const result = await store.dispatch(getDiscountCheck(1))

    expect(result.type).toBe('flight/getDiscountCheck/rejected')
  })

  it('get user by id', async () => {
    const result = await store.dispatch(getUserDataInBooking(1))

    expect(result.type).toBe('flight/getUserData/fulfilled')
  })

  it('create a ticket with params', async () => {
    const result = await store.dispatch(
      createBookingFlight({
        user: 'Thien Phu',
        ticketId: 1,
      })
    )

    expect(result.type).toBe('flight/createBooking/fulfilled')
  })

  it('get round trip booking flight async', async () => {
    const result = await store.dispatch(getRoundTripBookingFlightAsync(1))

    expect(result.type).toBe('flight/RoundTripBooking/fulfilled')
  })

  it('add data into booking flight', async () => {
    store.dispatch(
      addDataIntoBookingFlight({
        name: 'PN',
      })
    )

    const state = store.getState().bookingFlight

    expect(state.userInformation.name).toEqual('PN')
  })

  it('change current metho correctly', async () => {
    store.dispatch(changeCurrentMethod('PN'))

    const state = store.getState().bookingFlight

    expect(state.currentMethods).toEqual('PN')
  })
})
