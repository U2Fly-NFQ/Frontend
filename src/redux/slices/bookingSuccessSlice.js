import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import flightAPI from '../../api/Flight'

export const getTicketInformation = createAsyncThunk(
  'flight/getTicketInformation',
  async (idTicket) => {
    const respone = await flightAPI.getInfoTickerById(idTicket)
    return respone.data
  }
)
const initialState = {
  userInformation: {},
  flightInformation: {},
  loadding: false,
}
const bookingSuccessFlightsSlice = createSlice({
  name: 'bookingSuccess',
  initialState,
  reducers: {},
  extraReducers: {
    [getTicketInformation.pending]: (state, action) => {
      state.loadding = true
    },
    [getTicketInformation.rejected]: (state, action) => {
      state.loadding = false
    },
    [getTicketInformation.fulfilled]: (state, action) => {
      const { data, status } = action.payload
      state.loadding = false
      const {
        id,
        totalPrice,
        flight,
        ticketOwner,
        passenger,
        discount,
        seatType,
        createdAt,
      } = data
      //   {
      //     "status": "success",
      //     "data": {
      //         "id": 1,
      //         "flight": {
      //             "arrival": "HAN",
      //             "departure": "VCA",
      //             "startTime": "1970-01-01 13:40:00"
      //         },
      //         "totalPrice": 10200,
      //         "ticketOwner": "NGGUYEN THANH SANG",
      //         "passenger": {
      //             "name": "Thanh Sang",
      //             "gender": "Male",
      //             "birthday": "22-03-2002",
      //             "address": "123 DF",
      //             "identification": "1232432534231",
      //             "accountId": 2
      //         },
      //         "discount": 1,
      //         "seatType": "Economy",
      //         "createdAt": "2022-01-03 12:00:00"
      //     }
      // }
      if (status === 'success') {
        state.userInformation = {
          name: passenger.name,
          gender: passenger.gender,
          birthday: passenger.birthday,
          identification: passenger.identification,
        }
        state.flightInformation = {
          id: id,
          arrival: flight.arrival,
          departure: flight.departure,
          startTime: moment(flight.startTime).format('YYYY-MM-DD'),
          seatType: flight.seatType,
          createdAt: moment(flight.createdAt).format('YYYY-MM-DD'),
          price: totalPrice,
        }
      }
    },
  },
})

export const {} = bookingSuccessFlightsSlice.actions
export default bookingSuccessFlightsSlice
