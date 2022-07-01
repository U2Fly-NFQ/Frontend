import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightAPI from '../../api/Flight'
const initialState = {
  loadding: false,
  data: {
    flightFrom: {},
    flightTo: {},
    flightRules: [],
    price: 30.5,
  },
}
export const getDataFlights = createAsyncThunk(async (idFlight) => {
  const respone = await flightAPI.get(idFlight)
  return respone.data
})

const bookingFlightsSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataFlights.pedding, (state) => {
      state.loadding = true
    })
    builder.addCase(getDataFlights.rejected, (state) => {
      state.loadding = true
    })
    builder.addCase(getDataFlights.fullfilled, (state, action) => {
      state.loadding = false
      console.log(action.payload)
    })
  },
})

export default bookingFlightsSlice
