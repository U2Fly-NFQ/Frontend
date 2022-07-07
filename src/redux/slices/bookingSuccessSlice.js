import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
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
  ticketInfomation: {},
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

      const {
        id,
        totalPrice,
        flight,
        seatType,
        createdAt,
        passenger,
        email,
        discount,
      } = data
      if (status === 'success') {
        state.ticketStatus = true
        state.userInformation = {
          name: passenger.name,
          email: email,
          gender: passenger.gender,
          birthday: passenger.birthday,
          identification: passenger.identification,
        }
        state.ticketInfomation = {
          id: id,
          //   arrival: flight.arrival,
          //   departure: flight.departure,
          discount: discount < 1 ? discount : 0,
          //   startTime: moment(flight.startTime).format('YYYY-MM-DD'),
          seatType: seatType,
          createdAt: moment(createdAt).format('YYYY-MM-DD'),
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
