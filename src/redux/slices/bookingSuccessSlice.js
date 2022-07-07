import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import flightAPI from '../../api/Flight'

export const getTicketInformation = createAsyncThunk(
  'flight/getTicketInformation',
  async (idTicket) => {
    console.log(idTicket)
    const respone = await flightAPI.getInfoTickerById(idTicket)
    return respone.data
  }
)
const initialState = {
  userInformation: {},
  flightInformation: {},
  ticketStatus: false,
  loadding: true,
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
      state.loadding = false
      const { data, status } = action.payload
      console.log(action.payload)
      const {
        id,
        totalPrice,
        flights,
        ticketOwner,
        passenger,
        discount,
        seatType,
        createdAt,
      } = data
      if (status === 'success') {
        state.ticketStatus = true
        state.userInformation = {
          name: passenger.name,
          gender: passenger.gender,
          birthday: passenger.birthday,
          identification: passenger.identification,
        }
        state.flightInformation = {
          id: id,
          arrival: flights.arrival,
          departure: flights.departure,
          startTime: moment(flights.startTime).format('YYYY-MM-DD'),
          seatType: flights.seatType,
          createdAt: moment(flights.createdAt).format('YYYY-MM-DD'),
          price: totalPrice,
        }
      } else {
        let navigate = useNavigate()
        navigate('/')
      }
    },
  },
})

export const {} = bookingSuccessFlightsSlice.actions
export default bookingSuccessFlightsSlice
