import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
      const { userInfo, flightInfo, status } = action.payload
      state.loadding = false
      if (status === 'success') {
        state.userInformation = { ...userInfo }
        state.flightInformation = { ...flightInfo }
      }
    },
  },
})

export const {} = bookingSuccessFlightsSlice.actions
export default bookingSuccessFlightsSlice
